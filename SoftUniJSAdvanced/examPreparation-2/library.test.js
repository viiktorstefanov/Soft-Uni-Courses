let library = require("./library");
let expect = require('chai').expect;

describe("library object testing …", function() {
    describe("calcPriceOfBook function", function() {
        it("Should throw a Error -> Invalid input with number as first parameter", function() {
              
            expect(() => library.calcPriceOfBook(1,1)).to.throw('Invalid input');
        });
        it("Should throw a Error -> Invalid input with  with string as second parameter", function() {
              
            expect(() => library.calcPriceOfBook('1','1')).to.throw('Invalid input');      
        });
        it("Shoud  make a discount  with  valid input - > year under 1980 as second parameter", function() {
              
            expect(library.calcPriceOfBook('The Little Price',1943)).to.equal('Price of The Little Price is 10.00') 
        });
        it("Shoud  make a discount  with  valid input - > year equal to 1980 as second parameter", function() {
              
            expect(library.calcPriceOfBook('The Little Price', 1980)).to.equal('Price of The Little Price is 10.00') 
        });
        it("Shoud not make a discount  with  valid input - > year above 1980 as second parameter", function() {
              
            expect(library.calcPriceOfBook('The Little Price',1990)).to.equal('Price of The Little Price is 20.00') 
        });
     });
     describe("findBook function", function() {
        it("Should throw a Error -> Invalid input with empty array as first parameter", function() {
              
            expect(() => library.findBook([],'test')).to.throw('No books currently available');        
        });
        it("Should find the current book->  with valid inputs", function() {
              
            expect(library. findBook(['Troy','Life Style','Torronto'],'Troy')).to.equal('We found the book you want.')         
        });
        it("Should return missing book message with different name of book as desiredBook", function() {
              
            expect(library.findBook(['test','testov','testvam'],'Red Pill')).to.equal('The book you are looking for is not here!')         
        });
     });
     describe("arrangeTheBooks function", function() {
        it("Should throw a Error -> Invalid input with string as parameter", function() {
              
            expect(() => library.arrangeTheBooks('test')).to.throw('Invalid input');
        });
        it("Should throw a Error -> Invalid input with negative number as  parameter", function() {
              
            expect(() => library.arrangeTheBooks(-100)).to.throw('Invalid input');     
        });
        it("Should return great job message if available space is greater than the count books", function() {
              
            expect(library.arrangeTheBooks(15)).to.equal('Great job, the books are arranged.')     
        });
        it("Should return great job message if available space is equal of count books", function() {
              
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')     
        });
        it("Should return not enough space message if available space is less than count books", function() {
              
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.')     
        });
     });
});
