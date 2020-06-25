// IMPORT MODULES under test here:
import { add } from "../utils.js";

// import example from '../example.js';

const test = QUnit.test;

test("should return 7 when passed 3 and 4", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 3;
  const argument2 = 4;
  const expected = 7;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = argument1, argument2;

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});
