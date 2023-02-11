function lastKNumbers (n, k) {
let sequence = [1];
for (let i = 1; i < n; i++) {
    let index = Math.max(sequence.length - k, 0);

    let lastElements = sequence.slice(index);
    let sum = 0;
    for (const el of lastElements) {
        sum += el;
    }

    sequence.push(sum);
}

console.log(sequence.join(' '));
}
lastKNumbers(6, 3)