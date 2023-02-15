function number(input) {
let arr = input.slice().split(' ').map(a => Number(a))
let average = arr.reduce((a, c) => a + c, 0) / arr.length;
let newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > average) {
     newArr.push(arr[i]);
    }
}
let sortedNewArr = newArr.sort((a, b) => b - a);
let finalArr = sortedNewArr.slice(0,5)
if(finalArr.length < 1) {
    console.log('No');
}
else {
    console.log(finalArr.join(' '));
}
}
number('10 20 30 40 50')
number('5 2 3 4 -10 30 40 50 20 50 60 60 51')
number('-1 -2 -3 -4 -5 -6')
number('1')