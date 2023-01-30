function maxNumber(array) {
    let newNumbers= [];
    for(let index = 0; index < array.length; index++) {
        let isBigger = true;
        let currNum = array[index];

        for(r = index + 1; r < array.length; r++) {
            if(currNum <= array[r]) {
                isBigger = false;
            }
        }
        if(isBigger) {
            newNumbers.push(array[index]);
        }
    }
    console.log(newNumbers.join(" "));
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])