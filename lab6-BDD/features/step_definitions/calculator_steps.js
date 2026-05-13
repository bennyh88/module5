const { Given, When, Then } = require('cucumber');
const { should, expect } = require('chai');
const Calculator = require('../../calculator');

let myCalc;

Given('a calculator', function () {
    myCalc = new Calculator();
});

When('I add {int} and {int}', function (num1, num2) {
    myCalc.add(num1, num2);
});

When('I subtract {int} from {int}', function (num1, num2) {
    myCalc.subtract(num2, num1);
});

When('I multiply {int} and {int}', function (num1, num2) {
    myCalc.multiply(num1, num2);
});


Then('the outcome should be {int}', function (expected) {
    const actual = myCalc.getResult();
    expect(actual).to.be.equal(expected);
});