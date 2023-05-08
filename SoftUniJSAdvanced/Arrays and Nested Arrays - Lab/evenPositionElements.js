function evenPositionEl(arr) {
    let filtered = arr.filter((a,i) => i % 2 === 0);
    console.log(filtered.join(' '));
}
evenPositionEl(['20', '30', '40', '50', '60'])