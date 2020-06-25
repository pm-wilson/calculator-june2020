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


test("should return 10 when passed 2 and 8", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 8;
    const argument2 = 2;
    const expected = 10;
  
    //Act
    // Call the function you're testing and set the result to a const
    const actual = argument1, argument2;
  
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
    const actual = argument1, argument2;
  
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
  });