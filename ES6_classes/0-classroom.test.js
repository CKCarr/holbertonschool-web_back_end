import ClassRoom from './0-classroom';

describe('ClassRoom', () => {
  it('should create a ClassRoom instance with the specified maxStudentSize', () => {
    const maxStudentsSize = 15;
    const classRoom = new ClassRoom(maxStudentsSize);
    expect(classRoom._maxStudentsSize).toBe(maxStudentsSize);
  });
})
