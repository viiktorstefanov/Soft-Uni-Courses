function subSum (arr, start, end) {
let startIndex = Math.max(start,0);
let endIndex = Math.min(end,arr.length-1);
if(!Array.isArray(arr)) {
    return NaN;
}
let result = arr.slice(startIndex,endIndex + 1)
                .reduce((acc, x) => 
                acc + Number(x)
                ,0);
return result;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300)
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
subSum([10, 'twenty', 30, 40], 0, 2)
subSum([], 1, 2)
subSum('text', 0, 2)