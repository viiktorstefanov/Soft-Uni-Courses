function secondTask (input) {
    let sequence = input.shift().split(' ').map(x => Number(x));
    for(let i = 0; i < input.length ; i++) {
        let currEl = input[i].slice().split(' ')
        let command = currEl[0];
        if(command === "Finish") {
            console.log(sequence.join(' '));
            return;
        }
        if(command === "Add") {
        let value = Number(currEl[1]);
        sequence.push(value);
        }
        else if(command === "Remove") {
            let value = Number(currEl[1]);
            if(sequence.includes(value)) {
                for( let i = 0; i < sequence.length; i++) {
                    let currNum = sequence[i];
                    if(currNum === value) {
                        let index = sequence.indexOf(currNum)
                        sequence.splice(index,1)
                        break;
                    }
                }
               
            }
        }
        else if(command === "Replace") {
            let value = Number(currEl[1]);
            let replacement = Number(currEl[2]);
            if(sequence.includes(value)) {
                for( let i = 0; i < sequence.length; i++) {
                    let currNum = sequence[i];
                    if(currNum === value) {
                        let index = sequence.indexOf(currNum)
                        sequence.splice(index,1,replacement)
                        break;
                    }
                }
               
            }
        }
        else if(command === "Collapse") {
            let value = Number(currEl[1]);
            let collapse = [];
            let length = sequence.length;
            for( let i = 0; i < sequence.length; i++) {
                let currNum = sequence[i];
                if(currNum >= value) {
                    collapse.push(currNum)
                }
            }
            sequence = collapse;
        }
    }
    }
secondTask((["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
)
secondTask(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])
secondTask(["1 20 -1 10",
"Collapse 12",
"Finish"])
