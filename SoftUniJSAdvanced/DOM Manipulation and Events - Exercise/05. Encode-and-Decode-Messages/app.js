function encodeAndDecodeMessages() {
    let firstTextAreaElement = document.querySelector('#main div:nth-of-type(1) textarea');
    let resultTextAreaElement = document.querySelector('#main div:nth-of-type(2) textarea');
    let encodeButtonElement = document.querySelector('#main div:nth-of-type(1) button ');
    let decodeButtonElement = document.querySelector('#main div:nth-of-type(2) button ');
    let textForEncode;
    let decodedText = [];
    let result = [];

    encodeButtonElement.addEventListener('click', () => {
         textForEncode = firstTextAreaElement.value;
        firstTextAreaElement.value = "";
        Array.from(textForEncode).forEach((charr,i) => {
            let currCharr = textForEncode.charCodeAt(i);
            decodedText.push(currCharr + 1);
            resultTextAreaElement.value = decodedText.join('');
        })
    })
    decodeButtonElement.addEventListener('click', () => {
        decodedText.forEach((charr, i) => {
             result.push(String.fromCharCode(charr-1))
        })

        resultTextAreaElement.value = result.join('');
    })
}