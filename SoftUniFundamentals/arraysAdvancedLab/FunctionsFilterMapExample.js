function processOddNumber(arr) {
   // take only odd index numbers  multiply them  by 2 
   let result = arr
   .filter((x, i) => i % 2 !== 0)
   .map(x => x * 2);
   console.log(result)
    }
    processOddNumber([10, 15, 20, 25])