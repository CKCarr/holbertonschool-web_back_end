import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";


test('Return sum of all student Ids', () => {
  const students = getListStudents();
  const sum = getStudentIdsSum(students);
  const expected = 8;
  expect(sum).toEqual(expected);
})

