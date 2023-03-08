function modern(sentence) {
    let specialWords = [];
    sentence = sentence.split(' ');
    for (word of sentence) {
        let specialWord = '';
        if (word.startsWith('#') && word.length > 1) {
            let ascii = word.charCodeAt(1);
            let isLetter = ascii >= 65 && ascii <= 90 ||
                ascii >= 97 && ascii <= 122;
                if(isLetter) {
                    specialWord = word.slice(1, word.length);
                    specialWords.push(specialWord)
                }
            
        }
    }
    console.log(specialWords.join(' ' + '\n'));

}
modern('Nowadays everyone uses # to tag a #special word in #socialMedia')