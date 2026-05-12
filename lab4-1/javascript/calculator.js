class Calculator {
	constructor() {
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    mult(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }

    square(a) {
        return a * a;
    }

    cube(a) {
        return a * a * a;
    }

}

module.exports = Calculator;
