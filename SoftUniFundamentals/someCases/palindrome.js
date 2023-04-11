function palindrome (arr) {
for( let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let palindrome = currNum.toString().split('').reverse().join('');
    if(currNum === Number(palindrome)) {
        console.log('true');
    }
    else {
        console.log('false');
    }
    
}
}
palindrome ([32,2,232,1010])