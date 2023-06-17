let lottery = require('./Lottery');
let expect = require('chai').expect;

describe("Loterry function test", function() {
    describe("buyLotteryTicket", function() {
        it("should trow error with invalid inputs", function() {
           expect(() => lottery.buyLotteryTicket(-1,5,true)).to.throw('Invalid input!')
        });
        it("should trow error with invalid inputs -> string", function() {
            expect(() => lottery.buyLotteryTicket('string',5,true)).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs -> string second parameter", function() {
            expect(() => lottery.buyLotteryTicket(5,"5",true)).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs -> negative num", function() {
            expect(() => lottery.buyLotteryTicket(5,-5,true)).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs -> zeor as first parameter", function() {
            expect(() => lottery.buyLotteryTicket(0,5,true)).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs third paramether string", function() {
            expect(() => lottery.buyLotteryTicket(5,5,'false')).to.throw('Invalid input!')
         });
         it("should trow error with false as third paramether", function() {
            expect(() => lottery.buyLotteryTicket(5,5,false)).to.throw('Unable to buy lottery ticket!')
         });
         it("should return message buy ticket", function() {
            expect(lottery.buyLotteryTicket(5,5,true)).to.equal('You bought 5 tickets for 25$.')
         });
         it("should return message buy ticket with equal to 1 - ticketCount", function() {
            expect(lottery.buyLotteryTicket(5,1,true)).to.equal('You bought 1 tickets for 5$.')
         });
        
     });
     describe("checkTicket", function() {
        it("should trow error with invalid inputs two objects", function() {
           expect(() => lottery.checkTicket({},{})).to.throw('Invalid input!')
        });
        it("should trow error with invalid inputs 1 objects", function() {
            expect(() => lottery.checkTicket({},[1,1,1,1,1,1])).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs string as first paramether", function() {
            expect(() => lottery.checkTicket('string',[1,1,1,1,1,1])).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs lower than 6 length", function() {
            expect(() => lottery.checkTicket([1,1,1,1,1,1],[1,1,1,1,1])).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs bigger  than 6 length as first paramether ", function() {
            expect(() => lottery.checkTicket([1,1,1,1,1,1,1],[1,1,1,1,1,1])).to.throw('Invalid input!')
         });
         it("should trow error with invalid inputs bigger than 6 length as second parameter", function() {
            expect(() => lottery.checkTicket([1,1,1,1,1,1],[1,1,1,1,1,1,1])).to.throw('Invalid input!')
         });
         it("should return message jackpot", function() {
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal('You win the JACKPOT!!!')
         });
         it("should return message reward", function() {
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,9,7,5,6])).to.equal('Congratulations you win, check your reward!')
         });
        
     });
     describe("secondChance", function() {
        it("should trow error with invalid input string as first parameter", function() {
           expect(() => lottery.secondChance('string',[1,2,3,4,5,6])).to.throw('Invalid input!')
        });
        it("should trow error with invalid input undefined as second parameter", function() {
            expect(() => lottery.secondChance(5,undefined)).to.throw('Invalid input!')
         });
         it("should trow error with invalid input", function() {
            expect(() => lottery.secondChance("5","undefined")).to.throw('Invalid input!')
         });
         it("should return You win prize!", function() {
            expect(lottery.secondChance(9,[1,2,9,7,5,6])).to.equal('You win our second chance prize!')
         });
         it("should return You didn't win!", function() {
            expect(lottery.secondChance(4,[1,2,9,7,5,6])).to.equal(`Sorry, your ticket didn't win!`)
         });
        
     });
   
});
