# -*- coding: utf-8 -*-
"""
Compiler for Mega Expanded Curriculum across all 15 platform tracks.
Validates 100% of generated lessons and writes curriculum-mega.js.
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

    for idx, l in enumerate(all_lessons):
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

    if errors:
        print(f"FAILED WITH {len(errors)} ERRORS:")
        for err in errors[:20]:
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
