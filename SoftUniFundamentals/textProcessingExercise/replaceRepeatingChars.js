function replaceChars(string) {
let line = string;
let newString = "";
for(let i = 0; i < line.length; i++) {
    let currLetter = line[i];
    if(currLetter !== line[i+1] ) {
     newString += currLetter;
    }
}
console.log(newString);
}
replaceChars('aaaaabbbbbcdddeeeedssaa')
replaceChars('qqqwerqwecccwd')