function invalidNumber (input) {
let num = Number(input[0]);
if ( num == 0 || num >= 100 && num <= 200) {
    console.log();
}
else {
    console.log("invalid")
}
}
invalidNumber(["150"])