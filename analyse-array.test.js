const analyseArray = require("./analyse-array");

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}

test("adds 1 + 2 equal 3", () => {
  expect(analyseArray([1,8,3,4,2,6])).toStrictEqual(object);
});
