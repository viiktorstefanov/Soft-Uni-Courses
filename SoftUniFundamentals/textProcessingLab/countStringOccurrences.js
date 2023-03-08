function countStringOccurences(sentence,word) {
let arrSentence = sentence.split(' ');
let count = 0;
for(let i = 0; i < arrSentence.length; i++) {
    let currWord = arrSentence[i];
    if(currWord === word) {
        count++;
    }
}
console.log(count);
}
countStringOccurences('This is a word and it also is a sentence',
'is'
)