function heroicInventory (arr) {
    let result = [];
for( let i = 0; i < arr.length; i++ ) {
    let [name, level, items] = arr[i].split(' / ');
    level = +level;
    items = items.split(', ');
    
    result.push({name, level, items});
}
console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

function registerHero(stats) {
    return JSON.stringify(
      stats.reduce((acc, curr) => {
        const [name, level, items] = curr.split(' / ');
  
        acc.push({
          name,
          level: Number(level),
          items: items ? items.split(', ') : [],
        });
  
        return acc;
      }, [])
    );
  }