const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../calculator');

describe('Calculator', function () {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('adds numbers correctly', () => {
    expect(calc.add(10, 22)).to.equal(32);
  });

  it('subtracts numbers correctly', () => {
    expect(calc.subtract(50, 10)).to.equal(40);
  });

  it('multiplies numbers correctly', () => {
    expect(calc.mult(5, 5)).to.equal(25);
  });

  describe('divide', () => {
    const validCases = [
      { a: 50, b: 10, expected: 5 },
      { a: -50, b: 10, expected: -5 },
      { a: 50, b: -10, expected: -5 },
      { a: -50, b: -10, expected: 5 },
      { a: 7.5, b: 2.5, expected: 3 },
      { a: 0.3, b: 0.1, expected: 3 },
      { a: 10, b: 50, expected: 0.2 },
      { a: -10, b: 50, expected: -0.2 }
    ];

    validCases.forEach(({ a, b, expected }) => {
      it(`divides ${a} by ${b}`, () => {
        expect(calc.divide(a, b)).to.be.closeTo(expected, 0.000001);
      });
    });

    it('throws "Division by zero" when dividing by zero', () => {
      expect(() => calc.divide(10, 0)).to.throw('Division by zero');
    });
  });

  it('squares numbers correctly', () => {
    expect(calc.square(7)).to.equal(49);
  });

  it('cubes numbers correctly', () => {
    expect(calc.cube(2)).to.equal(8);
  });
});
