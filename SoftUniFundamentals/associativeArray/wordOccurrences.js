function wordOccurrences(input) {
let sort = [];

    let count = 0;
    for(let i = 0; i < input.length; i++) {
        let wordCheck = input[i];
        if(wordCheck) {
            let word = wordCheck;
        }
        
        if(word === wordCheck) {
            count++;
        }
    
    }
    console.log(`${word} => ${count}`);

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])