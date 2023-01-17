function combinations(input) {
let valid = 0;
let n = Number(input[0]);
for(let i = 0; i<= n ; i++) {
    for(let k = 0; k<= n ; k++) {
        for(let g = 0; g<=n ; g++) {
            if(i + k + g == n) {
                valid++;
            }
            
        }
    }
}
console.log(valid)
}
combinations(["25"])