import json
import runpy
import unittest
from pathlib import Path


lab = runpy.run_path(str(Path(__file__).resolve().parents[1] / "api" / "sql-lab.py"))


class SqlLabTests(unittest.TestCase):
    def check(self, query):
        return lab["evaluate"](json.dumps({"query": query}).encode())

    def test_correct_query_returns_inclusive_boundaries(self):
        status, result = self.check("SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100;")
        self.assertEqual(status, 200)
        self.assertTrue(result["correct"])
        self.assertEqual(result["rows"], [(2, 1), (3, 42), (4, 100)])

    def test_equivalent_query_is_accepted(self):
        status, result = self.check("select Id, Quantity from orders where Quantity >= 1 and Quantity <= 100 order by Id desc")
        self.assertEqual(status, 200)
        self.assertTrue(result["correct"])

    def test_incorrect_result_is_returned_with_feedback(self):
        status, result = self.check("SELECT * FROM Orders WHERE Quantity > 100")
        self.assertEqual(status, 200)
        self.assertFalse(result["correct"])
        self.assertEqual(result["rows"], [(5, 101)])

    def test_visible_fixture_alone_does_not_earn_credit(self):
        status, result = self.check("SELECT * FROM Orders WHERE Id IN (2, 3, 4)")
        self.assertEqual(status, 200)
        self.assertFalse(result["correct"])

    def test_mutation_system_tables_and_multiple_statements_are_denied(self):
        for query in ("DELETE FROM Orders", "SELECT * FROM sqlite_master", "SELECT * FROM Orders; DELETE FROM Orders", "SELECT load_extension('x')"):
            with self.subTest(query=query):
                self.assertEqual(self.check(query)[0], 400)

    def test_invalid_body_and_size(self):
        self.assertEqual(lab["evaluate"](b"{")[0], 400)
        self.assertEqual(lab["evaluate"](b"x" * 8193)[0], 413)
        self.assertEqual(self.check("SELECT " + "1" * 2000)[0], 400)


if __name__ == "__main__":
    unittest.main()
