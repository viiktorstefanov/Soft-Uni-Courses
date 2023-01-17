function oldBooks(input) {
let index = 0;
let searchedBook = input[index];
index++;
let bookCount = 0;
while(input.length) {
    let currentBook = input[index];
    index++;
    bookCount++;
    if(currentBook == searchedBook) {
        console.log(`You checked ${bookCount -1} books and found it.`)
    }
    if(currentBook === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount - 1} books.`)
        break;
    }
}
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])



