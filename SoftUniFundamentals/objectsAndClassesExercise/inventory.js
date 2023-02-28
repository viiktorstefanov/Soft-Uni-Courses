function inventory(input) {
    
    let arr = [];
for(line of input) {
    line = line.split(' / ')
    let name = line.shift();
    let level = Number(line.shift());
    let items = line.shift();
    const hero = {
        hero: name,
        level: level,
        items: items
    }
   arr.push(hero) 
}
arr.sort((a, b) => a.level - b.level )
for(heroes of arr) {
    console.log(`Hero: ${heroes.hero}`);
    console.log(`level => ${heroes.level}`);
    console.log(`items => ${heroes.items}`);
}
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )