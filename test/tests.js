// IMPORT code to test here
// import { add } from '../utils.js';

const test = QUnit.test;
import { add } from '../utils.js';

test('test your pure functions...', (expect) => {
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
