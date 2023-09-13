/*
Create a function named createInt8TypedArray that
returns a new 'ArrayBuffer' with an 'Int8' value at a specific position.

It should accept three arguments:
@length (Number)  A number representing the length of the ArrayBuffer.
@position (Number)  A number representing the position
                    at which to insert the Int8 value.
@value (Number). A number representing the Int8 value to insert.

Returns: a new ArrayBuffer with an Int8 value at a specific position.

Constraints: If adding the value is not possible
the error `Position outside range` should be thrown.
*/

export default function createInt8TypedArray(length, position, value) {
  // create new Array of the given length
  const buffer = new ArrayBuffer(length);
  // create a view for this buffer as an array of 8 bit integer values
  const int8View = new Int8Array(buffer);
  // Error Hanling: check if the position is within the range of the array
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // set the value at the specified position
  int8View[position] = value;
  // return the ArrayBuffer
  return buffer;
}
