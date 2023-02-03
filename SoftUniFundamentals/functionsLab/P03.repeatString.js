function repeatString (text, repeat) {
    let result = "";
for(let i = 0; i < repeat; i++) {
result += text;
}
console.log(result);
}
repeatString("abc", 3)