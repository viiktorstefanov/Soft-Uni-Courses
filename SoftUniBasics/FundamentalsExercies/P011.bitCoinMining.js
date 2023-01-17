function bitcoin(input) {
let totalBitCoin = 0;
let bitCoin = 11949.16;
let gold = 67.51;
let minnedGold = 0;
let firstCoin = 0;
index = 0;
let dayGoldMinned = 0;
let daysCount = 0;
let coinCount = 0;
for(let i =0; i<input.length;  i++) {
dayGoldMinned = input[index];
daysCount++;
index++;
if(daysCount % 3 == 0) {
dayGoldMinned = dayGoldMinned - (dayGoldMinned * 0.3);
}
minnedGold+=dayGoldMinned;
totalBitCoin = minnedGold * gold;
if(totalBitCoin >= bitCoin) {
coinCount++;
}
if(coinCount == 1) {
    firstCoin = daysCount;
}

}
console.log(`Bought bitcoins: ${Math.floor(totalBitCoin / bitCoin)}`);
if(firstCoin != 0) {
console.log(`Day of the first purchased bitcoin: ${firstCoin}`)}
console.log(`Left money: ${(totalBitCoin - ((Math.floor(totalBitCoin / bitCoin))*bitCoin)).toFixed(2)} lv.`)
}
bitcoin([3124.15, 504.212, 2511.124])