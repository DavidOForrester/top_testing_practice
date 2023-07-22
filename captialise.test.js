const capitaliseString = require("./captialise");

test("string should become Testing", () => {
  expect(capitaliseString("testing")).toBe("Testing");
});
