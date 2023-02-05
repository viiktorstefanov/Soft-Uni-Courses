function loadingBar(num) {
let percent = num + "%";
let symbol = "%";
let symbolRepeat = num / 10;
let dots = ".";
let dotsRepeat = (100 - num)/10;
if(num === 100) {
    console.log(`${num}% Complete!`)
    console.log(`[${symbol.repeat(symbolRepeat)}]`)
}
else {
    console.log(`${percent} [${symbol.repeat(symbolRepeat)}${dots.repeat(dotsRepeat)}]`);
    console.log("Still loading...");
}

}
loadingBar(30)
loadingBar(50)
loadingBar(100)