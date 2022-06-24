// import needed modules

// define and grab DOM elements

// event handlers - what needs to happen?
    // logic and calculations
    // update UI

import { add } from '../utils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

console.log(addInput1, addInput2, addButton, addResult)

addButton.addEventListener('click', () => {
const num1 = Number(addInput1.value);
const num2 = Number(addInput2.value);
addResult.textContent = add(num1, num2);
})
