import createInt8TypedArray from "../5-typed_arrays.js";

test("createInt8TypedArray returns 5 when getting the 0th index", () => {
  let array = createInt8TypedArray(10, 0, 5);
  expect(array.getInt8(0)).toBe(5); 
});

test("createInt8TypedArray returns 5 when getting the 0th index", () => {
  let array = createInt8TypedArray(10, 0, 5);
  console.log(typeof array, array instanceof DataView);  // Debugging line
  expect(array.getInt8(0)).toBe(5);
});

test("createInt8TypedArray returns 5 when getting the 0th index", () => {
  let buffer = createInt8TypedArray(10, 0, 5);
  let dataView = new DataView(buffer);
  expect(dataView.getInt8(0)).toBe(5);
});
