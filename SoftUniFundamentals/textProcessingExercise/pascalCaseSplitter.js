function pascalCase(line) {
let result = line[0];
let text = line.toLowerCase();
for(let i = 1; i < line.length; i++) {
    let currLetter = line[i];
    
    if(currLetter !== text[i]) {
     result += ", "
    }
    result += currLetter;
}
console.log(result);

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')