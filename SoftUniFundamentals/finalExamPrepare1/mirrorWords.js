function mirrorWords(input) {
let text = input.shift();
let mirrors = [];
let mirrorsCount = 0;
let pairsCount = 0;
let pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
let firstExtract = text.matchAll(pattern);


for (const iterator of firstExtract) {
    let firstWord = iterator.groups.word;
    let secondWord = iterator.groups.word2;
    pairsCount++;

    let reversedSecondWord = secondWord.split("").reverse().join("");
    if(firstWord === reversedSecondWord) {
        mirrors.push(firstWord,secondWord);
        mirrorsCount++;
    }
}
if(pairsCount === 0) {
    console.log('No word pairs found!');
}
else {
    console.log(`${pairsCount} word pairs found!`);
}

if(mirrorsCount === 0) {
    console.log("No mirror words!");
}
else {
    let resultMirrors = "";
    for(let i = 0; i < mirrors.length; i+= 2) {
        let word = mirrors[i];
        let hisPair = mirrors[i+1];
        resultMirrors += `${word} <=> ${hisPair}, `;
        
    }
    console.log(`The mirror words are:`);
    let index = resultMirrors.lastIndexOf(',');
    resultMirrors = resultMirrors.substring(0,index);
    console.log(resultMirrors);
}
//Part <=> traP, leveL <=> Level, sAw <=> wAs

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )