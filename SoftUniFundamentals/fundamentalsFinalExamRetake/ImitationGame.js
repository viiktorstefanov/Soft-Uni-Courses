function imitatitonGame (arr) {
let encryptedMessage = arr.shift().split('');
for( let i = 0; i < arr.length; i++) {
    let instruction = arr[i];
    let commands = instruction.slice().split('|');
    let command = commands[0];
    if(command === "Decode") {
        break;
    }
    if(command === "Move") {
        let number = commands[1];
           let a = encryptedMessage.splice(0,number);
           for (const letter of a) {
            encryptedMessage.push(letter)
           }
    }
    else if(command === "Insert") {
        let index = commands[1];
        if(index >= 0 || index <= encryptedMessage.length - 1) {
          let value = commands[2].split("");
          for(let letter of value) {
          encryptedMessage.splice(index,0,letter);
          index++;
          }
        }
      }
    else if(command === "ChangeAll") {
        let substring = commands[1];
        let replacement = commands[2];
        
        for( let i=0; i< encryptedMessage.length; i++) {
            let currLetter = encryptedMessage[i];
            if(currLetter === substring) {
                encryptedMessage[i] = replacement;
            }
        }
        
    }
   
}
console.log(`The decrypted message is: ${encryptedMessage.join("")}`);
}
imitatitonGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )
  imitatitonGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']
  )