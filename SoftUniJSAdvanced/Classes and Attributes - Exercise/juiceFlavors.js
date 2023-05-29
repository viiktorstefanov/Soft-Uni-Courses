function juiceFlavors (input) {
let juices = {};
let bottleOfJuice = {};
let counter = 0;

input.forEach(x => {
    let [fruit, quantity] = x.split(' => ');
    if(!juices[fruit]) {
        juices[fruit] = +quantity;
        if(juices[fruit] > 999) {
            while(juices[fruit] > 999) {
                juices[fruit] = juices[fruit] - 1000;
                
                if(!bottleOfJuice[fruit]) {
                    bottleOfJuice[fruit] = 1;
                }else {
                    bottleOfJuice[fruit] = bottleOfJuice[fruit] + 1;
                }
            }
            counter = 0;
        }
    }else {
        juices[fruit] += +quantity;
        if(juices[fruit] > 999) {
            while(juices[fruit] > 999) {
                juices[fruit] = juices[fruit] - 1000;
                
                if(!bottleOfJuice[fruit]) {
                    bottleOfJuice[fruit] = 1;
                }else {
                    bottleOfJuice[fruit] = bottleOfJuice[fruit] + 1;
                }
            }
            
        }
    }
})
for (const key in bottleOfJuice) {
    console.log(`${key} => ${bottleOfJuice[key]}`);
}
}
// juiceFlavors(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// )
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)