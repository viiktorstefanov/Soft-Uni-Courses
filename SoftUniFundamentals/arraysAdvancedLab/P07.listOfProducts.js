function listOfProducts(arr) {
let orderNameList = arr.sort((a,b) => a.localeCompare(b));
for(let i = 0; i< orderNameList.length; i++) {
    console.log(`${i+1}.${orderNameList[i]}`)
}
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])