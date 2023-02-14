function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.slice().split('|')
    let missingHealth = 0;
    let restoredHealth = 0;
    for(let i = 0; i < rooms.length; i++) {
        let currEl = rooms[i].slice().split(` `);
        let command = currEl[0];
        let number = Number(currEl[1]);
    
        if(command === "potion") {
                missingHealth = 100 - health;
                restoredHealth = Math.min(missingHealth, number)
                health += restoredHealth
                   console.log(`You healed for ${restoredHealth} hp.`);
                   console.log(`Current health: ${health} hp.`);
            }
        
        else if(command === "chest") {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`)
        }
        else {
            health -= number;
            if(health > 0) {
                console.log(`You slayed ${command}.`);
            }
            else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
    
    }
    muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
    muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")