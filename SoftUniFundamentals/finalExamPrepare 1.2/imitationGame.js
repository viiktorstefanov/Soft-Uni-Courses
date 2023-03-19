function imitationGame(input) {
    let encryptedMessage = input.shift();
    let line = input.shift();
    while (line !== "Decode") {
        line = line.split('|');
        let command = line[0];

        if (command === "Move") {
            let numOfLetters = +line[1];
            let substring = encryptedMessage.substring(0, numOfLetters);
            encryptedMessage = encryptedMessage.replace(substring, '');
            encryptedMessage = encryptedMessage + substring;
        }
        else if (command === "Insert") {
            let index = +line[1];
            let value = line[2];
            let newMessage = encryptedMessage.split('');
            newMessage.splice(index, 0, value);
            encryptedMessage = newMessage.join('');

        }
        else if (command === "ChangeAll") {
            let substring = line[1];
            let replacement = line[2];
            encryptedMessage = encryptedMessage.replaceAll(substring, replacement);
        }
        line = input.shift();
    }
    console.log(`"The decrypted message is: ${encryptedMessage}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)