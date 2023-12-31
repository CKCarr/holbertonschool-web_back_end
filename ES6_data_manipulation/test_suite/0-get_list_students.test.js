import getListStudents from '../0-get_list_students.js';

test('check if getListStudents returns the correct array of objects', () => {
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const result = getListStudents();

  expect(result).toStrictEqual(expected);
});
