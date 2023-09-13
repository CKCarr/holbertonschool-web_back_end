/*
8. Clean set
Create a function named cleanSet that
 returns a string
  of all the set values that
  start with a specific string (startString).

It accepts two arguments:
 a set (Set) and a startString (String).

When a value starts with startString
 you only append the rest of the string.
  The string contains all the values of the set separated by -.
*/

export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredArray = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredArray.join('-');
}
