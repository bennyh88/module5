class Calculator {
    constructor() {
        this.answer = 0;
    }

    add(x, y) {
        this.answer = x + y;
    }

    subtract(x, y) {
        this.answer = x - y;
    }

    multiply(x, y) {
        this.answer = x * y;
    }

    getResult() {
        return this.answer;
    }
}

module.exports = Calculator;