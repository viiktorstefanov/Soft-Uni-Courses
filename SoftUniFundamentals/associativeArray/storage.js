function storage (input) {
let map = new Map();
for(line of input) {
    let [item,quantity] = line.split(' ');
    if(!map.has(item)) {
       map.set(item,quantity);
    }
    else {
        let currQuantity = Number(map.get(item));
        let newQuantity = currQuantity += Number(quantity);
        map.set(item,newQuantity)
    }
    
}
for(let [item,quantity] of map.entries()) {
    console.log(`${item} -> ${quantity}`);
}
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)