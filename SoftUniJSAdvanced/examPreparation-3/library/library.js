class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if(this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        }else {
            this.books.push({ bookName, bookAuthor, payed: false });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
    payBook(bookName) {
        if(!this.books.find(x => x.bookName === bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(this.books.find(x => x.bookName === bookName).payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        this.books.find(x => x.bookName === bookName).payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        if(!this.books.find(x => x.bookName === bookName)) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if(this.books.find(x => x.bookName === bookName).payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        let removeIndex = this.books.indexOf(this.books.find(x => x.bookName === bookName));
        this.books.splice(removeIndex,1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            sortedBook.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim();
        } else {
            let findBook = this.books.find(b => b.bookAuthor == bookAuthor);

            if (findBook) {
                let result = [];
                let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    }
    
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


