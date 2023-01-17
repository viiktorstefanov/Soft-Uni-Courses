function minNumber(input) {
    let index = 0;
    let income = input[index];
    
    let minNumber = Number.MAX_SAFE_INTEGER;
    while(income !== "Stop") {
        income = input[index];
    let number = Number(input[index]);
    if(number < minNumber) {
        minNumber = number;
    }
    index++;
    }
    console.log(minNumber);
    
    }
    minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
    