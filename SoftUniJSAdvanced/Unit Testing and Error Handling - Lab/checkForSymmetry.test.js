let isSymmetric = require('./checkForSymmetry');
let expect = require('chai').expect;

describe('Check for Symmetry function should return', function () {
    it('true with array of symmetry numbers as input',() => {
        let array = [1, 2, 3, 2, 1];
        let actual = isSymmetric(array);
        let expected = true;
        expect(actual).to.be.equal(expected)
    })
    it('false with string as input',() => {
        let array = '[1, 2, 3, 4, 5]';
        let actual = isSymmetric(array);
        let expected = false;
        expect(actual).to.be.equal(expected)
    })
    it('false with array of non-symmetry numbers as input',() => {
        let array = [1, 2, 3, 4, 5];
        let actual = isSymmetric(array);
        let expected = false;
        expect(actual).to.be.equal(expected)
    })
    it('true if input is empty array',() => {
        let array = [];
        let actual = isSymmetric(array);
        let expected = true;
        expect(actual).to.be.equal(expected)
    })
    it('false if array as input is only two different types of elements',() => {
        let array = [1, '1'];
        let actual = isSymmetric(array);
        let expected = false;
        expect(actual).to.be.equal(expected)
    })
    
});