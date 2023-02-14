function manOWar(input) {
    let pirateShip = input.shift().split('>').map(a => Number(a));
    let warShip = input.shift().split('>').map(a => Number(a));
    let maxHealthCapacity = input.shift(Number);

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].slice().split(' ')
        let command = commands[0];

        if (command === "Retire") {
            break;
        }

        if (command === "Fire") {
            let index = Number(commands[1]);
            let damage = Number(commands[2]);

            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }

        }

        if (command === "Defend") {
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);
            let damage = Number(commands[3]);

            if (startIndex >= 0 && startIndex < pirateShip.length &&
                endIndex >= 0 && endIndex < pirateShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }

            }
        }

        if (command === "Repair") {
            let index = Number(commands[1]);
            let health = Number(commands[2]);
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxHealthCapacity) {
                    pirateShip[index] = maxHealthCapacity;
                }
            }
        }
        if (command === "Status") {
            let sectionForRepair = 0;
            let checkSection = maxHealthCapacity * 0.2;
            for (let i = 0; i < pirateShip.length; i++) {
                let currSection = pirateShip[i];
                if (currSection < checkSection) {
                    sectionForRepair++;
                }
            }
            console.log(`${sectionForRepair} sections need repair.`)
        }
    }
    let pirateShipSum = pirateShip.reduce((a, c) => a + c, 0);
    let warshipSum = warShip.reduce((a, c) => a + c, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`)
    console.log(`Warship status: ${warshipSum}`)
    

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
