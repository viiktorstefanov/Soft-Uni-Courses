function gladiator(input) {
    let inventory = input[0].slice().split(' ');
    input.shift();
    let commands = input;
    for (let i = 0; i < commands.length; i++) {
        let currEl = commands[i].slice().split(` `);
        let command = currEl[0];
        let item = currEl[1];
        if (command === "Buy") {
            if (!inventory.includes(`${item}`)) {
                inventory.push(item)
            }
        }
        if (command === "Trash") {
            if (inventory.includes(`${item}`)) {
                inventory.splice(inventory.indexOf(`${item}`), 1)
            }
        }
        if(command === "Repair") {
            if(inventory.includes(`${item}`)) {
                inventory.splice(inventory.indexOf(`${item}`), 1)
                inventory.push(item)
            }
        }
        if(command === "Upgrade") {
            let itemCheck = item.slice().split('-');
            let upgradeItem = `${itemCheck[0]}:${itemCheck[1]}`;
 
            if(inventory.includes(`${itemCheck[0]}`)) {
                let index = inventory.indexOf(`${itemCheck[0]}`);
                inventory.splice(index + 1,0,`${upgradeItem}`)
        }
    }
 
}
console.log(inventory.join(` `));
}
gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)