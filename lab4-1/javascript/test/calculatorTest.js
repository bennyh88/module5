const chai = require('chai');
//const assert = require('chai').assert;
const expect = chai.expect;
const Calculator = require('../calculator');

describe('calculator test Addition', function() {
    it('calculator returns the right value for valid parameters', function() {
        const calc = new Calculator();
        const result = calc.add(10, 22);
        expect(result).to.be.equal(32);
    });
});

describe('calculator test Subtraction', function() {
    it('calculator returns the right value when subtracting', function() {
        const calc = new Calculator();
        const result = calc.subtract(50, 10);
        expect(result).to.be.equal(40);
    });
});

describe('calculator test Multiplication', function() {
    it('calculator returns the right value when multiplying', function() {
        const calc = new Calculator();
        const result = calc.mult(5, 5);
        expect(result).to.be.equal(25);
    });
});

describe('calculator test Division', function() {
    it('calculator returns the right value when dividing', function() {
        const calc = new Calculator();
        const result = calc.divide(50, 10);
        expect(result).to.be.equal(5);
    });
});

describe('calculator test Division by Zero', function() {
    it('calculator throws "Division by zero" when dividing by Zero', function() {
        const calc = new Calculator();
        expect(() => {
            calc.divide(50, 0);
        }).to.throw("Division by zero");
    });
});