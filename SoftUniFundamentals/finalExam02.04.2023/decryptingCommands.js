function first(arr) {
    let text = arr.shift();
    let line = arr.shift();
    while (line !== "Finish") {
        line = line.split(' ');
        let command = line[0];
        if (command === "Replace") {
            let currChar = line[1];
            let newChar = line[2];
            let newText = "";

            for (let i = 0; i < text.length; i++) {
                if (text.includes(currChar)) {
                    newText = text.replace(currChar, newChar);
                    text = newText;
                    i = 0;
                }
            }
            console.log(text);
        }
        else if (command === "Cut") {
            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);

            if (text[endIndex] !== undefined && text[startIndex] !== undefined) {
                let cut = text.substring(startIndex, endIndex + 1);
                text = text.replace(cut, "");
                console.log(text);
            }
            else {
                console.log(`Invalid indices!`);
            }
        }
        else if (command === "Make") {
            let replacer = line[1];
            if (replacer === "Upper") {
                text = text.toUpperCase();
                console.log(text);
            }
            else {
                text = text.toLowerCase();
                console.log(text);
            }

        }
        else if (command === "Check") {
            let checkString = line[1];
            if (text.includes(checkString)) {
                console.log(`Message contains ${checkString}`);
            }
            else {
                console.log(`Message doesn't contain ${checkString}`);
            }
        }
        else if (command === "Sum") {
            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);

            if (text[endIndex] !== undefined && text[startIndex] !== undefined) {
                let cut = text.substring(startIndex, endIndex + 1);
                let sumASCII = 0;
                for (let i = 0; i < cut.length; i++) {
                    for ( let j=0; j < cut[i].length; j++ ) {
                        let charCode = cut[i].charCodeAt(j);
                        sumASCII += charCode;
                     }

                }
               
            

            console.log(sumASCII);
        }
        else {
            console.log(`Invalid indices!`);
        }
    }





    line = arr.shift();
}

}
first((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
)