function sumTable() {
let sum = document.getElementById('sum');
let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
let all = Array.from(costElements);
all.pop();
all = all.reduce((acc, x) => {
    return acc + Number(x.textContent);
},0);
sum.textContent = all;
}