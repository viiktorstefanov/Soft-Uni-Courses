let expect = require('chai').expect;
let findNewApartment = require('./findApartment');

describe("findNewApartment …", function () {
    describe("isGoodLocation", function () {

        it("Should return not suitable location", function () {
            expect(findNewApartment.isGoodLocation('Burgas', true)).equal('This location is not suitable for you.');
        });
        it("Should return can go", function () {
            expect(findNewApartment.isGoodLocation('Sofia', true)).equal('You can go on home tour!');
        });
        it("Should return no public transport", function () {
            expect(findNewApartment.isGoodLocation('Sofia', false)).equal('There is no public transport in area.');
        });
        it("Should return throw error", function () {
            expect(() => findNewApartment.isGoodLocation(undefined, false)).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input", function () {
            expect(() => findNewApartment.isGoodLocation('undefined', undefined)).to.throw('Invalid input!');
        });
        
    });
    describe("isLargeEnough", function () {

        it("Should return 3 apartment meters", function () {
            expect(findNewApartment.isLargeEnough([40,50,60], 40)).equal('40, 50, 60');
        });
        it("Should return only 1 apartment meter's", function () {
            expect(findNewApartment.isLargeEnough([40,50,60], 60)).equal('60');
        });
        it("Should return throw error with invalid input empty array", function () {
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input string as second parameter", function () {
            expect(() => findNewApartment.isLargeEnough(['test','test'], 'string')).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input object as first parameter", function () {
            expect(() => findNewApartment.isLargeEnough({'test': 'test','test': 'test'}, 5)).to.throw('Invalid input!');
        });
        
    });
    describe("isItAffordable", function () {

        it("Should return you can afford", function () {
            expect(findNewApartment.isItAffordable(10,20)).equal('You can afford this home!');
        });
        it("Should return you can't afford", function () {
            expect(findNewApartment.isItAffordable(20,10)).equal("You don't have enough money for this house!");
        });
        it("Should return throw error with invalid input string as first parameter", function () {
            expect(() => findNewApartment.isItAffordable('5', 5)).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input string as second parameter", function () {
            expect(() => findNewApartment.isItAffordable(5, "10")).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input negative number as first parameter", function () {
            expect(() => findNewApartment.isItAffordable(-5, 10)).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input 0 as first parameter", function () {
            expect(() => findNewApartment.isItAffordable(0, 10)).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input negative number as second parameter", function () {
            expect(() => findNewApartment.isItAffordable(10, -5)).to.throw('Invalid input!');
        });
        it("Should return throw error with invalid input 0 as second parameter", function () {
            expect(() => findNewApartment.isItAffordable(10, 0)).to.throw('Invalid input!');
        });
        
    });


});
