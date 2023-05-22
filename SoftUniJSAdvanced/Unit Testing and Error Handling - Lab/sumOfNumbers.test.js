
let sum = require('./sumOfNumbers');
let expect = require('chai').expect;

describe('Sum function test', function () {
    it('Shoud return sum with array of numbers as input', function () {
        let arr = [1,2,3,4,5];
        let expected = 15;
        let actual = sum(arr);
        expect(actual).to.be.equal(expected);
    });
    it('Shoud return sum with array of numbers and string as input', function () {
        let arr = [1,2,'3',4,5];
        let expected = 15;
        let actual = sum(arr);
        expect(actual).to.be.equal(expected);
    })
    it('Shoud return sum with array of numbers as input', function () {
        let arr = [1,2,3,4,5];
        let expected = 15;
        let actual = sum(arr);
        expect(actual).to.be.equal(expected);
    })
} )