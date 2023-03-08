function censoredWords(sentence, word) {
let arrSentence = sentence.split(' ');

for(let i = 0; i < arrSentence.length; i++) {
    let currWord = arrSentence[i];
    if(currWord === word) {
        arrSentence[i] = arrSentence[i].replace(word,"*".repeat(word.length));
        // let index = i;
        // i = index-1;
    }
}
console.log(arrSentence.join(' '));
}
censoredWords('A kur sentence kur some kur', 'kur')
