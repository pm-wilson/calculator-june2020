// IMPORT MODULES under test here:

// import example from '../example.js';
import { add, subtract, multiply, divide } from "../utils.js";

const test = QUnit.test;

//add tests
test("should return 7 when passed 3 and 4", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 3;
  const argument2 = 4;
  const expected = 7;

  //Act
  // Call the function you're testing and set the result to a const

  const actual = add(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return 10 when passed 2 and 8", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 8;
  const argument2 = 2;
  const expected = 10;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = add(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return 1 when passed 4 and -3", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = -3;
  const argument2 = 4;
  const expected = 1;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = add(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

//subtract tests
test("should return 2 when passed 6 and 4", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 6;
  const argument2 = 4;
  const expected = 2;

  //Act
  // Call the function you're testing and set the result to a const

  const actual = subtract(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return -6 when passed 2 and 8", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 2;
  const argument2 = 8;
  const expected = -6;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = subtract(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return -7 when passed 4 and -3", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = -3;
  const argument2 = 4;
  const expected = -7;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = subtract(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

//multiply tests
test("should return 12 when passed 3 and 4", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 3;
  const argument2 = 4;
  const expected = 12;

  //Act
  // Call the function you're testing and set the result to a const

  const actual = multiply(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return 16 when passed 2 and 8", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 8;
  const argument2 = 2;
  const expected = 16;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = multiply(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return 12 when passed 3 and 4", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 3;
  const argument2 = 4;
  const expected = 12;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = multiply(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

//divide tests
test("should return 2 when passed 10 and 5", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 10;
  const argument2 = 5;
  const expected = 2;

  //Act
  // Call the function you're testing and set the result to a const

  const actual = divide(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return 1 when passed 8 and 8", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 8;
  const argument2 = 8;
  const expected = 1;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = divide(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});

test("should return 0.75 when passed 3 and 4", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const argument1 = 3;
  const argument2 = 4;
  const expected = 0.75;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = divide(argument1, argument2);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
});
