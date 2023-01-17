function sequence2k(input) {
let index = 0;
let n = Number(input[index]);
let number = 0;
while (number <= n) {
    number = number * 2 + 1;
    if(number > n) {
        break;
    }
    console.log(number)
}



}
sequence2k(["8"])