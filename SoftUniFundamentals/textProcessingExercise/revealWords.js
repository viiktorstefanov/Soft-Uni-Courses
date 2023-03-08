function revealWords(words,sentence) {

words = words.split(', ');
sentence = sentence.split(' ');
for(let i = 0; i < sentence.length; i++ ) {
let currWord = sentence[i];
let currWordLength = currWord.length;
for(word of words) {
    let mainWordLength = word.length;
    if(currWordLength == mainWordLength && currWord.includes('*')) {
         sentence[i] = word;
    }
}
}
console.log(sentence.join(' '));
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)