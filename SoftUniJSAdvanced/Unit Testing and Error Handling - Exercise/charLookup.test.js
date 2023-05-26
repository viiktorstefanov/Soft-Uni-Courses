const lookupChar = require('./charLookup');
let expect = require('chai').expect;

describe('testing function which is returning correct charr at custom index', () => {
    it('Should return a charr with valid inputs', () => {
        let actual = lookupChar('JavaScript',4);
        let expected = 'S';

        expect(actual).to.be.equal(expected)
    })
    it('Should return a error - Incorrect index', () => {
        let actual = lookupChar('JavaScript',-5);
        let expected = 'Incorrect index';

        expect(actual).to.be.equal(expected)
    })
    it('Should return a undefined with numbers as input', () => {
        let actual = lookupChar(5,5);
        let expected = undefined;

        expect(actual).to.be.equal(expected)
    })
    it('Should return a undefined with only string as input', () => {
        let actual = lookupChar('black','black');
        let expected = undefined;

        expect(actual).to.be.equal(expected)
    })
    it('Should return a undefined with empty array as input', () => {
        let actual = lookupChar([],[]);
        let expected = undefined;

        expect(actual).to.be.equal(expected)
    })
    it('Should return a error - Incorrect index', () => {
        let actual = lookupChar('JavaScript',15);
        let expected = 'Incorrect index';

        expect(actual).to.be.equal(expected)
    })
    it('Should return a error - Incorrect index with decimal number', () => {
        let actual = lookupChar('JavaScript',0.5);
        let expected = undefined;

        expect(actual).to.be.equal(expected)
    })
    
})