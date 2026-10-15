# -*- coding: utf-8 -*-
"""
Script de unificare și scriere a curriculumului complet C & C++ (45 de capitole noi).
Scrie fișierul curriculum-cpp.js pentru integrare directă în browser.
"""
import json
import os
import sys

# Importa nivelurile
from generate_all_cpp import lessons as level1_lessons
from data_level2 import level2_lessons
from data_level3 import level3_lessons
from data_level4 import level4_lessons
from data_level5 import level5_lessons
from data_level_systems import systems_lessons

all_new_cpp_lessons = (
    level1_lessons +
    level2_lessons +
    level3_lessons +
    level4_lessons +
    level5_lessons +
    systems_lessons
)

print(f"Total capitole noi C & C++ asamblate: {len(all_new_cpp_lessons)}")

# Validare integritate date
ids = set()
for l in all_new_cpp_lessons:
    assert "id" in l and l["id"], f"Lecție fără id: {l}"
    assert l["id"] not in ids, f"ID duplicat: {l['id']}"
    ids.add(l["id"])
    assert l["track"] == "C & C++", f"Track invalid: {l['track']}"
    assert l["division"] == "Informatică și Programare", f"Diviziune invalidă: {l['division']}"
    assert len(l["glossary"]) == 4, f"Glosar incomplet pentru {l['id']}"
    assert len(l["matchingPairs"]) == 4, f"Perechi matching incomplete pentru {l['id']}"
    assert len(l["quiz"]["options"]) == 4, f"Opțiuni quiz incomplete pentru {l['id']}"
    assert 0 <= l["quiz"]["correctIndex"] < 4, f"Index quiz incorect pentru {l['id']}"

# Scrie curriculum-cpp.js
output_path = os.path.join(os.path.dirname(__file__), "..", "curriculum-cpp.js")
with open(output_path, "w", encoding="utf-8") as f:
    f.write("var CPP_EXPANDED_CURRICULUM = ")
    json.dump(all_new_cpp_lessons, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Fișierul {output_path} a fost generat cu succes! Dimensiune: {os.path.getsize(output_path)} octeți.")
