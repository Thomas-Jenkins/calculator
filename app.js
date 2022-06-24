// import needed modules

// define and grab DOM elements

// event handlers - what needs to happen?
    // logic and calculations
    // update UI

import { add, subtract } from '../utils.js';




const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

console.log(addInput1, addInput2, addButton, addResult);

addButton.addEventListener('click', () => {
const num1 = Number(addInput1.value);
const num2 = Number(addInput2.value);
addResult.textContent = add(num1, num2);
});

const subInput1 = document.getElementById('subtract-input-1');
const subInput2 = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subResult = document.getElementById('subtract-result');

console.log(subInput1, subInput2, subButton, subResult);

subButton.addEventListener('click', () =>
{
    const num3 = Number(subInput1.value);
    const num4 = Number(subInput2.value);
    subResult.textContent = subtract(num3, num4);
});

