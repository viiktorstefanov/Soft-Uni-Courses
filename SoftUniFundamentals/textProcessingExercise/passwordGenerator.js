function passwordGenerator(arr) {
    const vowels = ["a", "e", "i", "o", "u"];
    let textFromInput = (arr[0] + arr[1]).split('');
    let thirdWordArr = arr[2].split('')
    
    for(let i = 0; i < textFromInput.length; i++ ) {
        let currLetterFromText = textFromInput[i];
        for(let k = 0; k < vowels.length; k++) {
            let currVowel = vowels[k];
            if(currLetterFromText === currVowel) {
                for(let j = 0; j < thirdWordArr.length; j++) {
                   
                    let currLetterFromThirdWord = thirdWordArr.shift();
                    currLetterFromThirdWord = currLetterFromThirdWord.toUpperCase()
                    textFromInput[i] = currLetterFromThirdWord;

                    if (thirdWordArr.length === 0){
                        thirdWordArr = arr[2].split('');
                        j = -1;
                        break;
                    }
                    break;
                }
            }
        }
    }
    console.log(`Your generated password is ${textFromInput.reverse().join('')}`);
    
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )