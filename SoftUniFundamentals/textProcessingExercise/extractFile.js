function extractFile(sentence) {
    let file = '';
    let extension = '';
    let extensionSentence = sentence.split('.');
    extension = extensionSentence[1];
    sentence = sentence.split('\\');
    file = sentence[sentence.length - 1];
    file = file.split('.')[0];
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')

function extractFile2(sentence) {
    let fileName = sentence.substring(sentence.lastIndexOf('\\') + 1, sentence.lastIndexOf('.'));
    let fileExtension = sentence.substring(sentence.lastIndexOf('.') + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile2('C:\\Internal\\training-internal\\Template.pptx')