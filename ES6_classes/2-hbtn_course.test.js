import HolbertonCourse from './2-hbtn_course';
// Jest Mocks for HolbertonCourse

/* Implement a class named HolbertonCourse:
* Constructor attributes:
* @name {String}
* @length {Number}
* @students {array of Strings}
* Make sure to verify the type of attributes during object creation
* Each attribute must be stored in an “underscore” attribute version
*  (ex: name is stored in _name)
* Implement a getter and setter for each attribute.
*/

describe('HolbertonCourse', () => {
  it('should create an instance of HolbertonCourse', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course).toBeInstanceOf(HolbertonCourse);
  });
  it('should throw an error if name is not a string', () => {
    expect(() => new HolbertonCourse(12, 1, ['Bob', 'Jane'])).toThrow(TypeError);
  });
  it('should throw an error if length is not a number', () => {
    expect(() => new HolbertonCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
  });
  it('should throw an error if students is not an array of strings', () => {
    expect(() => new HolbertonCourse('ES6', 1, ['Bob', 12])).toThrow(TypeError);
  });
});
