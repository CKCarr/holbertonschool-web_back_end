/*
10. More map data structure

Create a function named updateUniqueItems that
returns an updated map
for all items with initial quantity at 1.

It should accept a map as an argument.
 The map it accepts for argument is similar to the map you create
  in the previous task.

For each entry of the map where the quantity is 1,
 update the quantity to 100.
  If updating the quantity is not possible (argument is not a map)
   the error 'Cannot process' should be thrown.
*/

export default function updateUniqueItems(groceryMap) {
  // validate arguments and handle errors
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  // loop through each entry in the map
  groceryMap.forEach((value, key) => {
    // if value is 1 update the quantity to 100
    if (value === 1) {
      groceryMap.set(key, 100);
    }
  });
  return groceryMap;
}
