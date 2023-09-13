// Import the function for testing
import getListStudentIds from '../1-get_list_student_ids.js';
import getListStudents from "../0-get_list_students.js";

// Test when the input is an array of objects
test('Returns an array of student IDs when an array of student objects is passed', () => {
  const input = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
  const expected = [1, 2, 5];
  const result = getListStudentIds(input);
  expect(result).toEqual(expected);
});

// Test when the input is not an array
test('Returns an empty array when the input is not an array', () => {
  const input = 'Not an array';
  const expected = [];
  const result = getListStudentIds(input);
  expect(result).toEqual(expected);
});

// Test when the input is an empty array
test('Returns an empty array when an empty array is passed', () => {
  const input = [];
  const expected = [];
  const result = getListStudentIds(input);
  expect(result).toEqual(expected);
});
