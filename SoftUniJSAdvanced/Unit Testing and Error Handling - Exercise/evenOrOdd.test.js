const isOddOrEven = require('./evenOrOdd');
let expect = require('chai').expect;

describe('testing odd or even function', () => {

    it(' should return even with even length of string', () => {
        let actual = isOddOrEven('java');
        let expected = 'even';
        expect(actual).to.be.equal(expected)
    })
    it('should return odd with odd length of string', () => {
        let actual = isOddOrEven('javas');
        let expected = 'odd';
        expect(actual).to.be.equal(expected)
    })
    it('should return undefined with empty input', () => {
        let actual = isOddOrEven();
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('should return undefined with empty array as input ', () => {
        let actual = isOddOrEven([]);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('should return undefined with null as input', () => {
        let actual = isOddOrEven(null);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
})

