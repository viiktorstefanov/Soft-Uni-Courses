function tresuareHunt(input) {
    let initialLoot = input.shift().split('|');
    for (let i = 0; i < input.length; i++) {
        let currEl = input[i].slice().split(' ');
        if (currEl[0] === "Yohoho!") {
            break;
        }
        let command = currEl[0];
        if (command === "Loot") {

            for (let i = 1; i <= currEl.length - 1; i++) {
                if (!initialLoot.includes(currEl[i])) {
                    initialLoot.unshift(currEl[i])
                }
            }
        }
        else if (command === "Drop") {
            let index = Number(currEl[1]);
            if (index >= 0 && index < initialLoot.length) {
                let removeItem = initialLoot.splice(index, 1);
                initialLoot.push(removeItem[0]);
            }
        }
        else if (command === "Steal") {
            let count = Number(currEl[1]);

            let stealedTresure = initialLoot.slice(-count);
            initialLoot.splice(-count);
            console.log(stealedTresure.join(', '));
        }
    }
    let averageTreasureGain;
    let total = initialLoot
        .reduce((a, c) => a + c.length, 0) / initialLoot.length;


    if (initialLoot.length > 0) {
        console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`)
    } else {
        console.log("Failed treasure hunt.")
    }
}
tresuareHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)