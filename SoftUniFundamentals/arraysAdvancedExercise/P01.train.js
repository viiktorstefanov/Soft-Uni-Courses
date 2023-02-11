function train(input) {
    let arr = input[0].split(' ').map(Number);
    let MaxCapacity = input[1].split(' ').map(Number);
    let capacity = MaxCapacity[0];
    let commands = input.slice(2);

    for (let i = 0; i < commands.length; i++) {
        let currentRow = commands[i].split(' ');
        if (currentRow[0] === "Add") {
            let newWagonPassangers = Number(currentRow[1]);
            arr.push(newWagonPassangers);
        }
        else {
            for (let k = 0; k < arr.length; k++) {
                let passangersInCurrentWagon = arr[k];
                if (passangersInCurrentWagon + Number(currentRow[0]) <= capacity) {
                    arr[k] += Number(currentRow[0]);
                    break;
                }
            }
        }

    }


console.log(arr.join(" "));
}
(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
))