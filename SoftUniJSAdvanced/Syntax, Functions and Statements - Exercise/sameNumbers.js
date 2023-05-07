function sameNum (input) {
    let sum = 0;
    let check = false;
    input = input.toString();
    for (let i = 0; i < input.length; i++) {
        let currNum = Number(input[i]);
        sum += currNum;
        if(currNum === Number(input[0])) {
           
            check = true;
        }
        else {
            check = false;
        }
    }
    console.log(check);
    console.log(sum);

}
sameNum(2222222)
sameNum(1234)
