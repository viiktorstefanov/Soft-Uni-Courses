function sort2Criteria(arr) {
    let firstSortLength = [...arr];
    firstSortLength.sort((a, b) => a.localeCompare(b))
    firstSortLength.sort((a, b) => a.length - b.length)

    console.log(firstSortLength.join('\n'));

}
sort2Criteria(['alpha', 'beta', 'gamma'])
sort2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])