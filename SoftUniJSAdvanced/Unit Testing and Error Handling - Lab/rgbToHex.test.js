let rgbToHexColor = require('./rgbToHex');
let expect = require('chai').expect;

describe('function should return', () => {
    it('undefined with input above or less in range 0 - 255', () => {
        let actual = rgbToHexColor(256, -1, 0.5);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with input of strings', () => {
        let actual = rgbToHexColor('FF', '100', '50');
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with empty input', () => {
        let actual = rgbToHexColor();
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('#FFFFFF with (255,255,255) as input', () => {
        let actual = rgbToHexColor(255,255,255);
        let expected = '#FFFFFF';
        expect(actual).to.be.equal(expected) 
    })
    it('undefined with an array as input', () => {
        let actual = rgbToHexColor([255,255,255]);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with an array as element for input', () => {
        let actual = rgbToHexColor(255,255,[255]);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with an array (0,0,0) for input', () => {
        let actual = rgbToHexColor(0,0,0);
        let expected = '#000000';
        expect(actual).to.be.equal(expected)
    })
    it('undefined with an array (155,200,50) for input', () => {
        let actual = rgbToHexColor(155,200,50);
        let expected = '#9BC832';
        expect(actual).to.be.equal(expected)
    })
    it('undefined with an array of nulls for input', () => {
        let actual = rgbToHexColor(null,null,null);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with random string for input', () => {
        let actual = rgbToHexColor('hroihorthorthoiorit');
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with empty array as input', () => {
        let actual = rgbToHexColor([]);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with invalid range of green', () => {
        let actual = rgbToHexColor(100,280,5);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
    it('undefined with invalid range of red', () => {
        let actual = rgbToHexColor(-50,155,5);
        let expected = undefined;
        expect(actual).to.be.equal(expected)
    })
})
