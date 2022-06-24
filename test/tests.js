// IMPORT code to test here
// import { add } from '../utils.js';

import { add } from '../utils.js';

const test = QUnit.test;
test('Test 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    const num1 = 3;
    const num2 = 5;


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

import { subtract } from '../utils.js';

const test2 = QUnit.test;
test('Test 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected2 = 2;
    const num3 = 5;
    const num4 = 3;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = subtract(num3, num4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2, expected2);
});



