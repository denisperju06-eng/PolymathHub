import json
import runpy
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LAB = runpy.run_path(str(ROOT / 'api/sql-lab.py'))

class SqlCourseTests(unittest.TestCase):
    def evaluate(self, exercise, query, variant=0):
        return LAB['evaluate'](json.dumps({'exerciseId': exercise, 'query': query, 'variant': variant}).encode())

    def test_course_has_six_lessons_twelve_exercises_and_three_project_tasks(self):
        course = LAB['public_course']()
        self.assertEqual(len(course['lessons']), 6)
        self.assertEqual(sum(len(x['exercises']) for x in course['lessons']), 12)
        self.assertEqual(len(course['project']['exercises']), 3)
        encoded = json.dumps(course)
        self.assertNotIn('reference', encoded)
        self.assertNotIn('hidden', encoded)
        for ex in course['exercises']:
            self.assertEqual(len(ex['hints']), 3)
            self.assertIn('explanation', ex)
        self.assertNotEqual(course['datasets'][0], course['datasets'][1])

    def test_all_reference_solutions_work_on_both_public_variants(self):
        data = json.loads((ROOT / 'server/sql-course.json').read_text())
        for ex in data['exercises']:
            for variant in (0, 1):
                with self.subTest(exercise=ex['id'], variant=variant):
                    status, result = self.evaluate(ex['id'], ex['reference'], variant)
                    self.assertEqual(status, 200)
                    self.assertTrue(result['correct'], result)

    def test_equivalent_projection_and_aliases_are_accepted(self):
        status, result = self.evaluate('s2-alias', 'select name as articol, price as cost from products')
        self.assertEqual(status, 200)
        self.assertTrue(result['correct'])

    def test_order_is_required_where_requested_and_ties_are_checked(self):
        self.assertFalse(self.evaluate('s4-price', 'SELECT name, price FROM products ORDER BY price ASC, id ASC')[1]['correct'])
        self.assertTrue(self.evaluate('s4-price', 'SELECT name, price FROM products ORDER BY price DESC, id ASC')[1]['correct'])

    def test_duplicates_nulls_and_hidden_data_prevent_accidental_acceptance(self):
        self.assertFalse(self.evaluate('s1-all', 'SELECT * FROM customers WHERE id IN (1,2,3,4)')[1]['correct'])
        self.assertFalse(self.evaluate('s5-left', 'SELECT c.name, o.total FROM customers c JOIN orders o ON o.customer_id=c.id')[1]['correct'])
        self.assertFalse(self.evaluate('s6-cities', 'SELECT DISTINCT city, 1 FROM customers')[1]['correct'])

    def test_safe_functions_work_and_dangerous_operations_are_denied(self):
        self.assertTrue(self.evaluate('s6-cities', 'SELECT city, count(*) FROM customers GROUP BY city')[1]['correct'])
        for sql in ['DELETE FROM orders', 'PRAGMA table_info(orders)', 'SELECT * FROM sqlite_master', "SELECT load_extension('x')", 'SELECT randomblob(999999999)', 'SELECT * FROM customers; SELECT * FROM orders', 'SELECT name FROM pragma_table_info(\'orders\')']:
            with self.subTest(sql=sql):
                self.assertEqual(self.evaluate('s1-all', sql)[0], 400)

    def test_safe_count_and_constant_table_scans_run_even_when_the_answer_is_wrong(self):
        for query in ['SELECT COUNT(*) FROM customers', 'SELECT COUNT(id) FROM customers', 'SELECT 1 FROM customers']:
            with self.subTest(query=query):
                status, result = self.evaluate('s1-all', query)
                self.assertEqual(status, 200)
                self.assertFalse(result['correct'])

    def test_binary_and_nonfinite_results_return_serializable_feedback(self):
        for query in ['SELECT CAST(name AS BLOB) FROM customers', 'SELECT 1e999']:
            with self.subTest(query=query):
                status, result = self.evaluate('s1-all', query)
                self.assertEqual(status, 400)
                self.assertIn('error', result)
                json.dumps(result, allow_nan=False)

    def test_invalid_ids_variants_and_bounded_feedback(self):
        self.assertEqual(self.evaluate('missing', 'SELECT 1')[0], 400)
        self.assertEqual(self.evaluate('s1-all', 'SELECT 1', 9)[0], 400)
        self.assertEqual(self.evaluate('s1-all', 'SELECT 1', True)[0], 400)
        self.assertEqual(self.evaluate('s1-all', 'SELECT ' + '1' * 2001)[0], 400)
        result = self.evaluate('s1-all', 'SELECT city FROM customers')[1]
        self.assertFalse(result['correct'])
        self.assertIn('error', result)
        self.assertNotIn('reference', json.dumps(result))

if __name__ == '__main__': unittest.main()
