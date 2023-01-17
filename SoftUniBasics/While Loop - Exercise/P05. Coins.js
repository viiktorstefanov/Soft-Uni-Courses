function coins(input) {
let coin = Number(input[0]);
let change = 0 ;

while(coin > 0) {
    if(coin > 1.99) {  //2 lv.
        change++;
        coin-= 2;
    }
    else if(coin > 0.99 && coin < 2) { // 1 lv.
        change++;
        coin-= 1;
    }
    else if(coin > 0.49 && coin < 1) {  // 0.5 ct.
        change++;
        coin-= 0.5;
    }
    else if(coin > 0.19 && coin < 0.50) {   //0.2 ct.
        change++;
        coin-= 0.2;
    }
    else if(coin > 0.09 && coin < 0.20 ) {   //0.1 ct.
        change++;
        coin-= 0.1;
    }
    else if(coin > 0.04 && coin < 0.1) {  //0.05; ct.
        change++;
        coin-= 0.05;
    }
    else if(coin > 0.01 && coin < 0.05) {
        change++;
        coin-= 0.02;
    }
    else if(coin > 0 && coin < 0.02) {
        change++;
        coin-= 0.01;
        break;
    }
}
console.log(change);
}
coins(["100"])