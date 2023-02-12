function sorting(input) {
    let sortedSmallToBig = [...input].sort((a, b) => a - b);
    let sortedBigToSmall = [...input].sort((a, b) => b - a);

    sortedSmallToBig = sortedSmallToBig.slice(0, Math.floor(input.length / 2));
    sortedBigToSmall = sortedBigToSmall.slice(0, Math.ceil(input.length / 2));
    let sorted = [];
    for (let i = 0; i < Math.round(input.length / 2); i++) {
        
        sorted.push(sortedBigToSmall[i]);
        sorted.push(sortedSmallToBig[i]);
    }
    console.log(sorted.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 7, 94, 5, 9, 89]);