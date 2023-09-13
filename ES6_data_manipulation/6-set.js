/*
Set data structure
Create a function named setFromArray that returns a Set from an array.
It accepts an argument (Array, of any kind of element).
*/

export default function setFromArray(arrayToSet) {
  // validate input and handle errors
  if (!Array.isArray(arrayToSet)) {
    throw new Error('Input must be an array');
  }
  // create new set from the array
  const mySet = new Set([...arrayToSet]);
  // return the set
  return mySet;
}
