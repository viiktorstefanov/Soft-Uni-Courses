function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let winBattle = 0;
    let energy = 0;
    for (let i = 0; i < input.length; i++) {
        let currCommand = input[i];
        if (currCommand === "End of battle") {

            break;
        }
        energy = Number(currCommand);
        if (initialEnergy - energy < 0 || initialEnergy === 0) {
            console.log(`Not enough energy! Game ends with ${winBattle} won battles and ${initialEnergy} energy`);
            return;
        }

        initialEnergy -= energy;
        winBattle++;
        if (winBattle % 3 === 0) {
            initialEnergy += winBattle;
        }

    }
    console.log(`Won battles: ${winBattle}. Energy left: ${initialEnergy}`);
}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
)
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
)