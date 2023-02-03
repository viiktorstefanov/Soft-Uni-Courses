function charactersInRange(firstCharr, secondCharr) {
let rangeStart = Math.min(firstCharr.charCodeAt(),secondCharr.charCodeAt());
let rangeFinish = Math.max(firstCharr.charCodeAt(),secondCharr.charCodeAt());
let result = "";
 
for(let currCharr = rangeStart + 1 ; currCharr < rangeFinish; currCharr++) {
    result+=((String.fromCharCode(currCharr)) + " ");
}
return result;
}
console.log(charactersInRange('#',
':'
))