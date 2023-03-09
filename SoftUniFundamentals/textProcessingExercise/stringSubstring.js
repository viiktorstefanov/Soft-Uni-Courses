function stringSubstring(string, text) {
let input = text.split(' ');
for(word of input) {
    word = word.toLowerCase()
if(word === string.toLowerCase()) {
console.log(word);
return;
}
}
console.log(`${string.toLowerCase()} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)
stringSubstring('python',
'JavaScript is the best programming language'
)