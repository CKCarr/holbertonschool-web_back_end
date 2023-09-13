import getStudentsByLocation from '../2-get_students_by_loc.js';
import getListStudents from '../0-get_list_students.js';

test('returns students with location by specific city', () => {
  const students = getListStudents();
  const city = 'San Francisco';
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const result = getStudentsByLocation(students, city);

  expect(result).toStrictEqual(expected);
});

test('throws an error when the input is not an array', () => {
  const input = 'Not an array';
  const city = 'San Francisco';
  expect(() => getStudentsByLocation(input, city)).toThrow('No students provided');
});
