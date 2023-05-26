let mathEnforcer = require('./mathEnforcer');
let expect = require('chai').expect;

describe('Testing mathEnforcer function ',() => {
    describe('addFive function', () => {
        it('shoud return number', () => {
            let actual = mathEnforcer.addFive(5);
            let expected = 10;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with string as input', () => {
            let actual = mathEnforcer.addFive('string');
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with empty array as input', () => {
            let actual = mathEnforcer.addFive([]);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with null as input', () => {
            let actual = mathEnforcer.addFive(null);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return decimal number', () => {
            let actual = mathEnforcer.addFive(0.5);
            let expected = 5.5;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return negative number', () => {
            let actual = mathEnforcer.addFive(-10);
            let expected = -5;
            expect(actual).to.be.equal(expected);
        })
    })
    describe('subtractTen function', () => {
        it('shoud return number', () => {
            let actual = mathEnforcer.subtractTen(20);
            let expected = 10;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with string as input', () => {
            let actual = mathEnforcer.subtractTen('string');
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with empty array as input', () => {
            let actual = mathEnforcer.subtractTen([]);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with null as input', () => {
            let actual = mathEnforcer.subtractTen(null);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return decimal', () => {
            let actual = mathEnforcer.subtractTen(20.5);
            let expected = 10.5;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return negative number', () => {
            let actual = mathEnforcer.subtractTen(-20);
            let expected = -30;
            expect(actual).to.be.equal(expected);
        })
    })
    describe('sum function', () => {
        it('shoud return number', () => {
            let actual = mathEnforcer.sum(20,20);
            let expected = 40;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with string as input', () => {
            let actual = mathEnforcer.sum('string',20);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with empty arrays as input', () => {
            let actual = mathEnforcer.sum([],[]);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return undefined with null as input', () => {
            let actual = mathEnforcer.sum(null,null);
            let expected = undefined;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return decimal number', () => {
            let actual = mathEnforcer.sum(10.7,10.5);
            let expected = 21.2;
            expect(actual).to.be.equal(expected);
        })
        it('shoud return negative number', () => {
            let actual = mathEnforcer.sum(-10.7,-10.5);
            let expected = -21.2;
            expect(actual).to.be.equal(expected);
        })
    })
   
})