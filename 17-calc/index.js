'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
let panel = document.querySelector('.panel');

function clearInputValues() {
    num1.value = '';
    num2.value = '';
}

function press(sign) {

    if (sign === '-') panel.innerText = +num1.value - +num2.value;
    if (sign === '+') panel.innerText = +num1.value + +num2.value;
    if (sign === '/') panel.innerText = +num1.value / +num2.value;
    if (sign === '*') panel.innerText = +num1.value * +num2.value;

    clearInputValues()
}
