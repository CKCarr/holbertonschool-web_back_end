/*
'Create' a function updateStudentGradeByCity that is called to
Return: an array of students for a specific city with their new grade
accepts 3 parameters:
@students: list of students (from getListStudents),
@city (String)students.location filtered from student list.
@newGrades (Array of “grade” objects)
  @studentIds (Array of Integers) list of student ids
  @grade (String)grade to update
Each grade object has the format: { studentId: 31, grade: 78 }

newGrades is an array of objects with this format:
  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

Constraints -- You must use filter and map combined. --
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  // handle errors
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
