"""Run the introductory SELECT exercise against disposable SQLite fixtures."""

import json
import math
import re
import sqlite3
import sys
from pathlib import Path
from collections import Counter
from contextlib import closing
from http.server import BaseHTTPRequestHandler

MAX_BODY = 8192
MAX_QUERY = 2000
DEMO = [(1, 0), (2, 1), (3, 42), (4, 100), (5, 101)]
CHECK = [(11, None), (12, -1), (13, 2), (14, 99), (15, 150)]
REFERENCE = "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100"
SELECT = re.compile(r"\ASELECT\b", re.IGNORECASE)


def authorize(action, table, _column, database, _context):
    if action == sqlite3.SQLITE_SELECT:
        return sqlite3.SQLITE_OK
    if action == sqlite3.SQLITE_READ and database == "main" and table == "Orders":
        return sqlite3.SQLITE_OK
    return sqlite3.SQLITE_DENY


def query_rows(query, fixture):
    with closing(sqlite3.connect(":memory:")) as db:
        db.execute("CREATE TABLE Orders (Id INTEGER PRIMARY KEY, Quantity INTEGER)")
        db.executemany("INSERT INTO Orders VALUES (?, ?)", fixture)
        expected = db.execute(REFERENCE).fetchall()
        db.execute("PRAGMA query_only = ON")
        db.set_authorizer(authorize)
        db.setlimit(sqlite3.SQLITE_LIMIT_LENGTH, 8192)
        db.setlimit(sqlite3.SQLITE_LIMIT_COLUMN, 16)
        db.setlimit(sqlite3.SQLITE_LIMIT_EXPR_DEPTH, 30)
        db.setlimit(sqlite3.SQLITE_LIMIT_COMPOUND_SELECT, 4)
        db.setlimit(sqlite3.SQLITE_LIMIT_VDBE_OP, 10000)
        steps = 0

        def stop_long_query():
            nonlocal steps
            steps += 1
            return steps > 50

        db.set_progress_handler(stop_long_query, 100)
        cursor = db.execute(query)
        rows = cursor.fetchmany(25)
        if len(rows) == 25:
            raise ValueError("Interogarea trebuie să întoarcă mai puțin de 25 de rânduri.")
        columns = [column[0] for column in cursor.description]
        correct = ([name.casefold() for name in columns] == ["id", "quantity"]
                   and sorted(rows, key=repr) == sorted(expected, key=repr))
        return columns, rows, correct


COURSE = json.loads((Path(__file__).resolve().parents[1] / "server/sql-course.json").read_text())
EXERCISES = {ex["id"]: ex for ex in COURSE["exercises"]}
SAFE_FUNCTIONS = {"count", "sum", "avg", "min", "max", "coalesce", "round", "lower", "upper", "length", "abs", "ifnull"}


def public_course():
    return {
        "lessons": COURSE["lessons"], "project": COURSE["project"],
        "exercises": [{k: v for k, v in ex.items() if k != "reference"} for ex in COURSE["exercises"]],
        "tables": {name: {"columns": schema["columns"]} for name, schema in COURSE["tables"].items()},
        "datasets": COURSE["datasets"],
    }


def course_authorize(action, table, function, database, _context):
    if action == sqlite3.SQLITE_SELECT:
        return sqlite3.SQLITE_OK
    if action == sqlite3.SQLITE_READ and table in COURSE["tables"] and (database == "main" or (database is None and function == "")):
        return sqlite3.SQLITE_OK
    if action == sqlite3.SQLITE_FUNCTION and (function or "").lower() in SAFE_FUNCTIONS:
        return sqlite3.SQLITE_OK
    return sqlite3.SQLITE_DENY


def course_rows(query, fixture):
    with closing(sqlite3.connect(":memory:")) as db:
        for table, schema in COURSE["tables"].items():
            fields = ", ".join(name + " " + type_ for name, type_ in zip(schema["columns"], schema["types"]))
            db.execute(f"CREATE TABLE {table} ({fields})")
            marks = ",".join("?" for _ in schema["columns"])
            db.executemany(f"INSERT INTO {table} VALUES ({marks})", fixture[table])
        db.execute("PRAGMA query_only = ON")
        db.setlimit(sqlite3.SQLITE_LIMIT_LENGTH, 8192)
        db.setlimit(sqlite3.SQLITE_LIMIT_COLUMN, 16)
        db.setlimit(sqlite3.SQLITE_LIMIT_EXPR_DEPTH, 30)
        db.setlimit(sqlite3.SQLITE_LIMIT_COMPOUND_SELECT, 4)
        db.setlimit(sqlite3.SQLITE_LIMIT_VDBE_OP, 10000)
        db.set_authorizer(course_authorize)
        ticks = 0

        def budget():
            nonlocal ticks
            ticks += 1
            return ticks > 200

        db.set_progress_handler(budget, 100)
        cursor = db.execute(query)
        rows = cursor.fetchmany(101)
        if len(rows) > 100:
            raise ValueError("Rezultatul este prea mare. Limitează-l la maximum 100 de rânduri.")
        if any(not isinstance(value, (str, int, float, type(None)))
               or (isinstance(value, float) and not math.isfinite(value))
               for row in rows for value in row):
            raise ValueError("Rezultatul poate conține doar texte, numere finite și NULL. Evită valori BLOB sau infinite.")
        return [c[0] for c in cursor.description], rows


def evaluate_course(payload):
    ex = EXERCISES.get(payload.get("exerciseId")) if isinstance(payload.get("exerciseId"), str) else None
    variant = payload.get("variant", 0)
    if ex is None or type(variant) is not int or variant not in (0, 1):
        return 400, {"error": "Exercițiul sau setul de date nu este valid."}
    query = payload.get("query")
    if not isinstance(query, str) or not query.strip() or len(query) > MAX_QUERY:
        return 400, {"error": "Scrie o interogare SQL de maximum 2.000 de caractere."}
    query = query.strip()
    if not SELECT.match(query):
        return 400, {"error": "Folosește un singur SELECT. Datele laboratorului pot fi doar citite."}
    try:
        correct = True
        columns, rows = [], []
        fixtures = [COURSE["datasets"][variant], *COURSE["hidden"], COURSE["datasets"][1 - variant]]
        for index, fixture in enumerate(fixtures):
            actual_columns, actual = course_rows(query, fixture)
            expected_columns, expected = course_rows(ex["reference"], fixture)
            same_rows = actual == expected if ex["ordered"] else Counter(actual) == Counter(expected)
            correct = correct and len(actual_columns) == len(expected_columns) and same_rows
            if index == 0:
                columns, rows = actual_columns, actual
    except ValueError as error:
        return 400, {"error": str(error)}
    except (sqlite3.Error, MemoryError, UnicodeError):
        return 400, {"error": "Interogarea nu poate fi executată. Verifică numele coloanelor, virgulele, apostrofurile și relațiile dintre tabele. Sunt permise doar SELECT și funcțiile de bază de agregare."}
    result = {"columns": columns, "rows": rows, "correct": correct, "exerciseId": ex["id"], "variant": variant}
    if not correct:
        result["error"] = ("Rezultatul nu corespunde cerinței pe toate datele de verificare. "
                           "Verifică numărul și ordinea coloanelor, filtrele, rândurile duplicate și valorile NULL."
                           + (" Ordinea rândurilor trebuie să respecte toate criteriile cerute." if ex["ordered"] else " Ordinea rândurilor este liberă."))
    return 200, result


def evaluate(body):
    if len(body) > MAX_BODY:
        return 413, {"error": "Cererea este prea mare."}
    try:
        payload = json.loads(body)
    except (ValueError, UnicodeError, RecursionError):
        return 400, {"error": "Cererea trebuie să conțină JSON valid."}
    if isinstance(payload, dict) and "exerciseId" in payload:
        return evaluate_course(payload)
    query = payload.get("query") if isinstance(payload, dict) else None
    if not isinstance(query, str) or not query.strip() or len(query) > MAX_QUERY:
        return 400, {"error": "Scrie o interogare SQL de maximum 2.000 de caractere."}
    query = query.strip()
    if not SELECT.match(query):
        return 400, {"error": "Laboratorul acceptă o singură interogare SELECT pe tabelul Orders."}
    try:
        columns, rows, demo_correct = query_rows(query, DEMO)
        correct = demo_correct and query_rows(query, CHECK)[2]
    except ValueError as error:
        return 400, {"error": str(error)}
    except (sqlite3.Error, MemoryError, UnicodeError):
        return 400, {"error": "Interogarea nu poate fi executată. Verifică sintaxa și folosește un singur SELECT pe tabelul Orders."}
    result = {"columns": columns, "rows": rows, "correct": correct}
    if not correct:
        result["error"] = "Rezultatul nu corespunde cerinței. Verifică toate coloanele și limitele 1 și 100, inclusiv."
    return 200, result


class handler(BaseHTTPRequestHandler):
    def reply(self, status, data):
        body = json.dumps(data, allow_nan=False).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        if status == 405:
            self.send_header("Allow", "POST")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        self.reply(200, public_course())

    def do_POST(self):
        if self.headers.get_content_type() != "application/json":
            self.reply(415, {"error": "Trimite cererea în format JSON."})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        if not 0 < length <= MAX_BODY:
            self.reply(413 if length > MAX_BODY else 400, {"error": "Dimensiunea cererii nu este validă."})
            return
        self.reply(*evaluate(self.rfile.read(length)))


if __name__ == "__main__":
    print(json.dumps(public_course() if "--catalog" in sys.argv else evaluate(sys.stdin.buffer.read(MAX_BODY + 1))))
