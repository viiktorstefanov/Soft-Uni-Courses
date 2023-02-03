function signCheck (firstNum, secondNum, thirdNum) {
    let result = "";
    let sum = 0;
     let signCheckFirstSecond = (firstNum, secondNum) => 
       sum = firstNum * secondNum
       if(sum < 0) {
        result = "Negative";
       }
       else {
        result = "Positive"
       };
    let firstSecond = signCheckFirstSecond(firstNum, secondNum);
    if((firstSecond * thirdNum) < 0) {
        result = "Negative"
    }
    else {
        result = "Positive";
    }
    console.log(result);
    
}
signCheck( 5,
    12,
   -15
   )