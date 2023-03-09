function hardWord(arr) {
    let [letter, words] = arr;
    let string = letter.toString().split(' ');

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (letter.includes('_')) {
            for (word of words) {
                if (word.length === letter.length && !letter.includes('.')) {
                    string[i] = word;
                }
                else if (word.length === letter.length || word.length === letter.length - 1 && letter.includes('.')) {
                    string[i] = word + ".";
                }
                else if (word.length === letter.length || word.length === letter.length - 1 && letter.includes(',')) {
                    string[i] = word + ",";
                }
            }
        }
    }
    console.log(string.join(' '));



}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)