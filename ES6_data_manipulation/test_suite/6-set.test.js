import setFromArray from "../6-set.js";

test("setFromArray tests if a set contains certain ints", () => {
  const obj = { abc: 'def'};
  const set = setFromArray([1, 2, 5, true, false, 'test', obj]);

  expect(set.has(1)).toBe(true);
  expect(set.has(2)).toBe(true);
  expect(set.has(5)).toBe(true);
  expect(set.has(10)).toBe(false);
});
