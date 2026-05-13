class Calculator {
	constructor() {
    }

    add(a, b = 'OPT') {
        if (b !== 'OPT') {
            return a + b;
        } 
        if (typeof a === 'string') {
            let operands = this.parseString(a);
            if (operands.length > 0) {
                return operands.reduce((total, n) => total + n, 0);
            } else {
                return 0
            }
        }
        throw new Error("Second argument or String input required");
    
    }

    parseString(a) {
        const numbers = (a.match(/-?\+?\d*\.?\d+/g) || []).map(Number);
        if (numbers.some(n => n < 0)) {
            throw new Error("Negative numbers not allowed");
        }
        return numbers
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
