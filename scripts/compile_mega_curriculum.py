# -*- coding: utf-8 -*-
"""
Compiler for Mega Expanded Curriculum across all 15 platform tracks.
Validates 100% of generated lessons, enriches missing examples and code blocks,
and writes curriculum-mega.js.
"""

import json
import re
import sys
import os

from gen_mega_python import get_python_lessons
from gen_mega_csharp import get_csharp_lessons
from gen_mega_ts_react import get_ts_react_lessons
from gen_mega_algo import get_algo_lessons
from gen_mega_devops import get_devops_lessons
from gen_mega_js import get_js_lessons
from gen_mega_java import get_java_lessons
from gen_mega_sql import get_sql_lessons
from gen_mega_languages import get_languages_lessons

VALID_TRACKS = [
    "SQL", "Java", "JavaScript", "TypeScript & React", "C & C++", "C#", "Python",
    "DevOps & Sisteme Linux", "Algoritmi & Structuri de Date",
    "Engleză (A1–A2)", "Engleză (B1–B2)", "Engleză (C1–C2)", "Engleză: Familie & Hobby",
    "Limba Franceză", "Limba Spaniolă"
]

def clean_hint_to_solution(hint_str):
    if not hint_str:
        return ""
    cleaned = re.sub(r'^[Ss]crie\s+', '', hint_str).strip()
    # Remove surrounding quotes if entire string is quoted
    if (cleaned.startswith("'") and cleaned.endswith("'")) or (cleaned.startswith('"') and cleaned.endswith('"')):
        cleaned = cleaned[1:-1]
    return cleaned

def normalize_lesson(l):
    # 1. Cross-bind task and prompt
    task_text = l.get("task") or l.get("prompt") or ""
    l["task"] = task_text
    l["prompt"] = task_text

    # 2. Extract solution from hint if missing
    hint_text = l.get("hint") or ""
    derived_sol = clean_hint_to_solution(hint_text)

    if not l.get("officialSolution"):
        l["officialSolution"] = l.get("example") or derived_sol or l.get("starterCode") or ""

    # 3. Ensure example exists
    if not l.get("example"):
        l["example"] = l.get("officialSolution") or derived_sol or l.get("starterCode") or ""

    # 4. If starterCode is purely a comment (e.g. "// Completează...") and we have an example, populate it
    cur_starter = (l.get("starterCode") or "").strip()
    if (not cur_starter or cur_starter.startswith("//") or cur_starter.startswith("#")) and len(cur_starter.splitlines()) <= 1:
        if l.get("officialSolution"):
            l["starterCode"] = l["officialSolution"]
        elif l.get("example"):
            l["starterCode"] = l["example"]

    # 5. Ensure theory has a rich <pre><code> block
    theory = l.get("theory") or ""
    if "<pre>" not in theory:
        is_lang = any(lang in (l.get("track") or "") for lang in ["Franceză", "Spaniolă", "Engleză"])
        sample = l.get("example") or l.get("officialSolution") or derived_sol or ""
        if sample:
            if is_lang:
                header = "<h4>Exemple Practice de Dialog & Expresii</h4>"
                block = f"\n{header}\n<pre><code>-- Exemplu Canonic de Conversație:\n{sample}\n</code></pre>\n"
            else:
                header = "<h4>Exemplu Practic de Cod</h4>"
                block = f"\n{header}\n<pre><code>{sample}</code></pre>\n"
            l["theory"] = theory + block

    # 6. Ensure expectedOutputPattern / regexPattern cross-bound
    pat = l.get("expectedOutputPattern") or l.get("regexPattern") or ""
    l["expectedOutputPattern"] = pat
    l["regexPattern"] = pat

    return l

def main():
    all_lessons = []
    all_lessons.extend(get_python_lessons())
    all_lessons.extend(get_csharp_lessons())
    all_lessons.extend(get_ts_react_lessons())
    all_lessons.extend(get_algo_lessons())
    all_lessons.extend(get_devops_lessons())
    all_lessons.extend(get_js_lessons())
    all_lessons.extend(get_java_lessons())
    all_lessons.extend(get_sql_lessons())
    all_lessons.extend(get_languages_lessons())

    print(f"Total mega lessons collected: {len(all_lessons)}")

    seen_ids = set()
    errors = []

    for idx, raw_l in enumerate(all_lessons):
        l = normalize_lesson(raw_l)
        lid = l.get("id")
        if not lid or lid in seen_ids:
            errors.append(f"Lesson #{idx}: duplicate or missing id: {lid}")
        seen_ids.add(lid)

        track = l.get("track")
        if track not in VALID_TRACKS:
            errors.append(f"Lesson {lid}: invalid track '{track}'")

        div = l.get("division")
        if div not in ["Informatică și Programare", "Limbi Străine & Comunicare"]:
            errors.append(f"Lesson {lid}: invalid division '{div}'")

        # Validate glossary (exactly 4)
        gloss = l.get("glossary", [])
        if len(gloss) != 4:
            errors.append(f"Lesson {lid}: glossary must have exactly 4 items, got {len(gloss)}")
        for g in gloss:
            if not g.get("term") or not g.get("def"):
                errors.append(f"Lesson {lid}: malformed glossary entry: {g}")

        # Validate matching pairs (exactly 4)
        mp = l.get("matchingPairs", [])
        if len(mp) != 4:
            errors.append(f"Lesson {lid}: matchingPairs must have exactly 4 items, got {len(mp)}")
        for m in mp:
            if not m.get("left") or not m.get("right"):
                errors.append(f"Lesson {lid}: malformed matching pair: {m}")

        # Validate quiz (exactly 4 options)
        q = l.get("quiz", {})
        opts = q.get("options", [])
        if len(opts) != 4:
            errors.append(f"Lesson {lid}: quiz options must have exactly 4 items, got {len(opts)}")
        c_idx = q.get("correctIndex")
        if c_idx not in [0, 1, 2, 3]:
            errors.append(f"Lesson {lid}: invalid quiz correctIndex: {c_idx}")
        if not q.get("question") or not q.get("explanation"):
            errors.append(f"Lesson {lid}: quiz missing question or explanation")

        # Validate regex
        pattern = l.get("expectedOutputPattern")
        if not pattern:
            errors.append(f"Lesson {lid}: missing expectedOutputPattern")
        else:
            try:
                re.compile(pattern)
            except re.error as e:
                errors.append(f"Lesson {lid}: invalid regex '{pattern}': {e}")

        # Verify that theory has <pre>
        if "<pre>" not in l.get("theory", ""):
            errors.append(f"Lesson {lid}: theory missing <pre> code/example block")

        # Verify that example exists and is non-empty
        if not l.get("example") or not l.get("example").strip():
            errors.append(f"Lesson {lid}: missing example")

    if errors:
        print(f"FAILED WITH {len(errors)} ERRORS:")
        for err in errors[:25]:
            print(" -", err)
        sys.exit(1)

    print("ALL VALIDATIONS PASSED CLEANLY (100% compliant)!")

    # Write curriculum-mega.js
    output_path = os.path.join(os.path.dirname(__file__), "..", "curriculum-mega.js")
    js_content = "// MEGA EXPANDED CURRICULUM — ALL TRACKS DEEP-DIVE\n"
    js_content += "const MEGA_EXPANDED_CURRICULUM = " + json.dumps(all_lessons, indent=2, ensure_ascii=False) + ";\n"

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully generated {output_path} with {len(all_lessons)} lessons!")

    # Breakdown by track
    counts = {}
    for l in all_lessons:
        counts[l["track"]] = counts.get(l["track"], 0) + 1
    print("\nMEGA EXPANSION BREAKDOWN:")
    for t, c in sorted(counts.items(), key=lambda x: -x[1]):
        print(f"  * {t}: +{c} new chapters")

if __name__ == "__main__":
    main()
