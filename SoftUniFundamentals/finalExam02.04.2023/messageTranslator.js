function task(arr) {
    let numberStrings = Number(arr.shift());
    let pattern = /!(?<first>[A-Z][a-z]{3,})!:\[(?<second>[A-Za-z]{8,})\]/g
    for (let i = 0; i < numberStrings; i++) {
        let line = arr[i];
        let validMessage = line.matchAll(pattern);
        let notValid = line.match(pattern);

if(notValid !== null) {
    for (let iterator of validMessage) {
        let checkOne = iterator.groups.first;
        let checkTwo = iterator.groups.second;
        if (checkOne.length > 0 && checkTwo.length > 0) {
            let sum = "";
            for (let i = 0; i < checkTwo.length; i++) {
                for (let j = 0; j < checkTwo[i].length; j++) {
                    let num = checkTwo[i].charCodeAt(j);
                    sum += num + " ";
                }
            }
            let length = sum.length;
            let newSum = sum.substring(0, length - 1)
            console.log(`${checkOne}: ${newSum}`);
        }
    }
}
else {
    console.log(`The message is invalid`);
}
            
    }
}
task((["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]))