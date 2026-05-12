const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../calculator');

describe('Calculator', function () {
  let calc;

  beforeEach(() => {
    // fresh instance for each test
    calc = new Calculator();
  });

  it('adds numbers correctly', function () {
    const result = calc.add(10, 22);
    expect(result).to.equal(32);
  });

  it('subtracts numbers correctly', function () {
    const result = calc.subtract(50, 10);
    expect(result).to.equal(40);
  });

  it('multiplies numbers correctly', function () {
    const result = calc.mult(5, 5);
    expect(result).to.equal(25);
  });

  it('divides numbers correctly', function () {
    const result = calc.divide(50, 10);
    expect(result).to.equal(5);
  });

  it('throws "Division by zero" when dividing by zero', function () {
    expect(() => {
      calc.divide(50, 0);
    }).to.throw('Division by zero');
  });

  it('squares numbers correctly', function () {
    const result = calc.square(7);
    expect(result).to.equal(49);
  });

  it('cubes numbers correctly', function () {
    const result = calc.cube(2);
    expect(result).to.equal(8);
  });
});
