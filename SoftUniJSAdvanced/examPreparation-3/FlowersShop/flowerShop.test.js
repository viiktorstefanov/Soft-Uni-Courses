const flowerShop = require("./flowerShop");
let expect = require('chai').expect;

describe("FlowerShop testing …", function() {
    describe("calcPriceOfFlowers", function() {
        it("should return correct anser with valid input", function() {
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 5)).equal(`You need $25.00 to buy Rose!`)
        });
        it("should throw error with not a string as first parameter", function() {
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 5, 5)).to.throw(`Invalid input!`)
        });
        it("should throw error with not a number as second parameter", function() {
            expect(() => flowerShop.calcPriceOfFlowers('undefined', undefined, 5)).to.throw(`Invalid input!`)
        });
        it("should throw error with not a number as third parameter", function() {
            expect(() => flowerShop.calcPriceOfFlowers('undefined', 5, undefined)).to.throw(`Invalid input!`)
        });
        it("should throw error with not a number as second and third parameter", function() {
            expect(() => flowerShop.calcPriceOfFlowers('undefined', undefined, undefined)).to.throw(`Invalid input!`)
        });
        it("should return correct price toFixed(2)", function() {
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, 5)).equal(`You need $5.00 to buy Rose!`)
        });
     });
     describe("checkFlowersAvailable", function() {
        it("should return available with valid input", function() {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).equal(`The Rose are available!`)
        });
        it("should return not available with valid input", function() {
            expect(flowerShop.checkFlowersAvailable('Roza', ["Rose", "Lily", "Orchid"])).equal(`The Roza are sold! You need to purchase more!`)
        });
     });
     describe("sellFlowers", function() {
        it("should return available flowers with valid input", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).equal(`Rose / Orchid`)
        });
        it("should return available only 1 flower with valid input", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily"],1)).equal(`Rose`)
        });
        it("should throw error invalid input", function() {
            expect(() => flowerShop.sellFlowers([],1)).to.throw(`Invalid input!`)
        });
        it("should throw error with not a integer as second parameter", function() {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily"],2.2)).to.throw(`Invalid input!`)
        });
        it("should throw error with negative number as second parameter", function() {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily"],-5)).to.throw(`Invalid input!`)
        });
        it("should throw error if second parameter is bigger than gardenArr length", function() {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily"],10)).to.throw(`Invalid input!`)
        });
      
     });
     
});
