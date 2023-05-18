function solution () {

    let variableText = "";
    
    return {
        append(text) {
            variableText += text;
        },
        removeStart(n) {
            variableText = variableText.slice(n)
        },
        removeEnd(n) {
            variableText = variableText.slice(0,variableText.length-n)
        },
        print() {
            console.log(variableText);
        }
    };
}
let firstZeroTest = solution();

console.log(firstZeroTest.append('hello'));
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
