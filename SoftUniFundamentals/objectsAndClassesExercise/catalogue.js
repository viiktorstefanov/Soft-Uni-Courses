function catalogue(input) {
let obj = {};
for(line of input) {
    let [name,price] = line.split(' : ');
    obj[name] = Number(price);
}
let firstLetterGroup = "";
let sortCatalogue = Object.keys(obj).sort((a,b) => a.localeCompare(b));
for(let i = 0; i < sortCatalogue.length; i++) {
    let line = sortCatalogue[i];
    
if(firstLetterGroup !== line[0]) {
    firstLetterGroup = line[0];
    console.log(firstLetterGroup);
}

    console.log(`  ${line}: ${obj[line]}`);
}
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )