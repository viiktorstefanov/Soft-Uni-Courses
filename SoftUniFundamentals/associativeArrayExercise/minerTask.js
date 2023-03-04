function minerTask(arr) {
let obj = {};
for(let i = 0; i < arr.length; i+=2) {
    let resource = arr[i];
    let quantity = Number(arr[i+1]);
    if(obj[resource]) {
        obj[resource] += quantity;
    }
    else {
        obj[resource] = quantity;
    }
}
for(key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )