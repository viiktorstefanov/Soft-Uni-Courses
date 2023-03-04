function worldsTracker(input) {
    let obj = {};
    const words = input.shift().split(' ');
    for (let word of words) {
        obj[word] = 0;
    }
    for (let currWord of input) {
        if (obj.hasOwnProperty(currWord)) {
            obj[currWord]++;
        }
    }
    let sort = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (line of sort) {
        console.log(`${line[0]} - ${line[1]}`);
    }
}
worldsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)