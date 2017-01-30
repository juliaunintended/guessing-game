class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.average = 50;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.average = Math.ceil((this.min + this.max) / 2);
        return this.average;
    }

    lower() {
        this.max = this.average;
    }

    greater() {
        this.min = this.average;
    }
}

module.exports = GuessingGame;
