import initializeRooms from './1-make_classrooms';
import ClassRoom from './0-classroom';

describe('initializeRooms', () => {
  it('should should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order)', () => {
    // call function
    const rooms = initializeRooms();
    // assert room is an array
    expect(Array.isArray(rooms)).toBe(true);
    // assert room has 3 items
    expect(rooms.length).toBe(3);
    // assert each item is a ClassRoom
    expect(rooms[0] instanceof ClassRoom).toBe(true);
    expect(rooms[1] instanceof ClassRoom).toBe(true);
    expect(rooms[2] instanceof ClassRoom).toBe(true);
    // assert each room has a specific size property
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});
