function secretChat(input) {

    let concealedMessage = input.shift();
    let line = input.shift();

    while (line !== "Reveal") {

        line = line.split(':|:');
        let command = line[0];

        if (command === "InsertSpace") {
            let index = Number(line[1]);
            concealedMessage = concealedMessage.split('');
            concealedMessage.splice(index, 0, ' ');
            concealedMessage = concealedMessage.join('');

        }

        else if (command === "Reverse") {
            let string = line[1];
            if (concealedMessage.includes(string)) {
                let reversedString = string.split("").reverse().join("");

                let newMessage = concealedMessage.replace(string, "");
                newMessage = newMessage + reversedString;
                concealedMessage = newMessage;
            }
            else {
                console.log('error');
                line = input.shift();
                continue;

            }
        }
        else if (command === "ChangeAll") {
            let searchedString = line[1];
            let replacementString = line[2];
            let newMessage = concealedMessage.split(searchedString).join(replacementString);
            concealedMessage = newMessage;
        }
        line = input.shift();
        console.log(concealedMessage);
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)