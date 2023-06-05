let bookSelection = require('./bookSelection');
let expect = require('chai').expect;

describe("bookSelection test", function() {
    describe("isGenreSuitable", function() {
        it("Should return not suitable for kids message with 5 age", function() {
           expect(bookSelection.isGenreSuitable('Thriller', 5)).equal(`Books with Thriller genre are not suitable for kids at 5 age`)
        });
        it("Should return not suitable for kids message with 12 age", function() {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).equal(`Books with Thriller genre are not suitable for kids at 12 age`)
         });
         it("Should return not suitable for kids message with genre Horror", function() {
            expect(bookSelection.isGenreSuitable('Horror', 12)).equal(`Books with Horror genre are not suitable for kids at 12 age`)
         });
         it("Should return not suitable for kids message with 5 age and genre Horror", function() {
            expect(bookSelection.isGenreSuitable('Horror', 5)).equal(`Books with Horror genre are not suitable for kids at 5 age`)
         });
         it("Should return  suitable for kids with not horror or thriller genre", function() {
            expect(bookSelection.isGenreSuitable('Comedy', 5)).equal(`Those books are suitable`)
         });
         it("Should return  suitable for kids with not horror or thriller genre and 12 age", function() {
            expect(bookSelection.isGenreSuitable('Comedy', 12)).equal(`Those books are suitable`)
         });
         it("Should return  suitable for kids with  horror genre and 18 age", function() {
            expect(bookSelection.isGenreSuitable('Horror', 18)).equal(`Those books are suitable`)
         });
     });
     describe("isItAffordable", function() {
        it("Should throw error with string inputs", function() {
           expect(() => bookSelection.isItAffordable('Thriller', 'test')).to.throw(`Invalid input`)
        });
        it("Should throw error with 1 string input as second parameter", function() {
            expect(() => bookSelection.isItAffordable(5, 'test')).to.throw(`Invalid input`)
         });
         it("Should throw error with 1 string input as first parameter", function() {
            expect(() => bookSelection.isItAffordable('Thriller', 5)).to.throw(`Invalid input`)
         });
         it("Should return book bought with valid inputs", function() {
            expect(bookSelection.isItAffordable(5, 5)).equal(`Book bought. You have 0$ left`)
         });
         it("Should return book bought with valid inputs with 10 budget as input", function() {
            expect(bookSelection.isItAffordable(5, 10)).equal(`Book bought. You have 5$ left`)
         });
         it("Should return not enough money with valid inputs", function() {
            expect(bookSelection.isItAffordable(10, 2)).equal(`You don't have enough money`)
         });
  
     });
     describe("suitableTitles", function() {
        it("Should throw error invalid inputs with object as first parameter", function() {
           expect(() => bookSelection.suitableTitles({}, 'test')).to.throw(`Invalid input`)
        });
        it("Should throw error invalid inputs with empty arrays", function() {
            expect(() => bookSelection.suitableTitles([], [])).to.throw(`Invalid input`)
         });
         it("Should throw error invalid inputs", function() {
            expect(() => bookSelection.suitableTitles(undefined, undefined)).to.throw(`Invalid input`)
         });
         it("Should return array of valid genre", function() {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],'Thriller')).eql([ 'The Da Vinci Code' ])
         });
     });
});
