function activationKeys (input) {
let activationKey = input.shift();
let line = input.shift();

while(line !== "Generate") {
    line = line.split(">>>");
    let command = line[0];

    if(command === "Contains") {
        let substring = line[1];
        if(activationKey.includes(substring)) {
            console.log(`${activationKey} contains ${substring}`);
        }
        else {
            console.log(`Substring not found!`);
        }

    }
    
    else if(command === "Flip") {
        let modifier = line[1];
        let startIndex = Number(line[2]);
        let endIndex = Number(line[3]);
        if(modifier === "Upper") {
         let toUpper = activationKey
         .substring(startIndex,endIndex)
         .toUpperCase();
         let beforeUpper = activationKey
         .substring(startIndex,endIndex);
         let newActivationKey = activationKey.replace(beforeUpper,toUpper);
         activationKey = newActivationKey;
         console.log(activationKey);
        }
        else if (modifier === "Lower"){
            let toLower = activationKey
            .substring(startIndex,endIndex)
            .toLowerCase();
            let beforeLower = activationKey
            .substring(startIndex,endIndex);
            let newActivationKey = activationKey.replace(beforeLower,toLower);
            activationKey = newActivationKey;
            console.log(activationKey);
        }
    }

    else if(command === "Slice") {
        let startIndex = Number(line[1]);
        let endIndex = Number(line[2]);
        let sliced = activationKey.slice(startIndex,endIndex);
        activationKey = activationKey.replace(sliced,'')
        console.log(activationKey);
    }



    line = input.shift();
}
console.log(`Your activation key is: ${activationKey}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)