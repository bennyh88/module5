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

describe('Lab 5 Calculator Tests', function () {
  let calc;

  beforeEach(() => {
    // fresh instance for each test
    calc = new Calculator();
  });

  it('0.	Throw error "Second argument or String input required" if only one non string argument is provided .', function () {
    expect(() => {
      calc.add(2);
    }).to.throw("Second argument or String input required");
  });

  it('1.	Empty string should return zero.', function () {
    const result = calc.add("");
    expect(result).to.equal(0);
  });

  it('2.	Just a number should return the parsed version of the number.', function () {
    const result = calc.add("2");
    expect(result).to.equal(2);
  });

  it('3.	Two numbers separated by a comma should be added together.', function () {
    const result = calc.add("2,2");
    expect(result).to.equal(4);
  });

  it('4.	Two numbers separated by a newline character ("\\n") should be added together.', function () {
    const result = calc.add("2\n2");
    expect(result).to.equal(4);
  });

  // 5.	Three numbers separated by either a comma or a newline, or any combination, should be added together.
  it('5a.	Three numbers separated by a comma should be added together.', function () {
    const result = calc.add("2,2,2");
    expect(result).to.equal(6);
  });

  it('5b.	Three numbers separated by a newline, or any combination, should be added together.', function () {
    const result = calc.add("2\n2\n2");
    expect(result).to.equal(6);
  });

  it('5c.	Three numbers separated by any combination of newline and comma, should be added together.', function () {
    const result = calc.add("2,2\n2");
    expect(result).to.equal(6);
  });

  it('6.	Negative numbers appearing anywhere in the string should throw an exception with the message "Negative numbers not allowed".', function () {
    expect(() => {
      calc.add("2,-2");
    }).to.throw("Negative numbers not allowed");
  });


});
