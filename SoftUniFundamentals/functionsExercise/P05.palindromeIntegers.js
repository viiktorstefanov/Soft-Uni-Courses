function palindrome(arr) {
    let reverseArr = [];
for(let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    currentNum = currentNum.toString();
    currentNum = currentNum.split('').reverse().join('')
    currentNum = Number(currentNum);
    reverseArr.push(currentNum);
}
for(let i =0; i < arr.length; i++) {
    let arrNum = arr[i];
    let reverseNum = reverseArr[i];
    if(arrNum === reverseNum) {
        console.log('true')
    }
    else {
        console.log('false')
    }
}
}
palindrome([123,323,421,121])