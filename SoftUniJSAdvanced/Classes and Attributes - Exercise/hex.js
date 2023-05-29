class Hex {
    constructor(number) {
        this.number = number;
    }
    valueOf() {
        return this.number;
    }
    toString() {
        return `0x${this.number.toString(16).toUpperCase()}`;
    }
    plus(input) {
        return new Hex(this.number + input);
    }
    minus(input) {
        return new Hex(this.number - input);
    }
    parse(number) {
        return parseInt(number, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());

