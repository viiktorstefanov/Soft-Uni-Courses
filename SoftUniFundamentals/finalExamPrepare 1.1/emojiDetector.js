function emojiDetector(input) {
let patternAnimals = (/(:{2}|\*{2})(?<animal>[A-Z][a-z]{2,})\1/g);
let patternDigits = /\d/g;
let text = input.shift();
let extractAnimals = text.matchAll(patternAnimals);
let extractDigits = text.match(patternDigits);

let coolThresholdSum = 1;
for (const iterator of extractDigits) {
    coolThresholdSum *= Number(iterator);
}
console.log(`Cool threshold: ${coolThresholdSum}`);
let emojiObj = {};
let emojiCounter = 0;
for (const iterator of extractAnimals) {
    let emoji = iterator[0]
    emojiCounter++;
    let animal = iterator.groups.animal.split('');
    let sumOfASCII = 0;
    for(letter of animal) {
       sumOfASCII += letter.charCodeAt();
    }
    if(sumOfASCII > coolThresholdSum) {
        emojiObj[emoji] = sumOfASCII;
    }
    
}
console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
for(key in emojiObj) {
    console.log(key + " ");
}
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])