let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  input = [3, 21, 88, 4, 36];
  expect(getLargestNumber(input)).toEqual(88);
  // Arrange
  // Act
  // Assert
});
test("original array is the same", function () {
  input = [3, 21, 88, 4, 36];
  expect(input).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
