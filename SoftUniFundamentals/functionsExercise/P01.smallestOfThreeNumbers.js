function smallestNumber (firstNum, secondNum, thirdNum) {
    let min = Number.MAX_SAFE_INTEGER;
    if(firstNum < min) {
        min = firstNum;
    }
    if(secondNum < min) {
        min = secondNum;
    }
    if( thirdNum < min) {
        min = thirdNum;
    }
    console.log(min)
    }
smallestNumber(600,
    342,
    123
    )