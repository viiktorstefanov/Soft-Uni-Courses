function houseParty(input) {
    let guestList = [];
    for (const el of input) {
        let currentEl = el.slice(0).split(' ');
        let guestName = currentEl[0];
        if (currentEl.length === 3) {
            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            }
            else {
                guestList.push(guestName);
            }

        }
        else {
            if (!guestList.includes(guestName)) {
                console.log(`${guestName} is not in the list!`)
            }
            else {
                let index = guestList.indexOf(guestName);
                guestList.splice(index, 1)
            }
        }
    }
    console.log(guestList.join(`\n`));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)
