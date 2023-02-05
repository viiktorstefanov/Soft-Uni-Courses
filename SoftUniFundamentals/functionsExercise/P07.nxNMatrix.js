function nXnMatrix(n) {
let matrix = n.toString() + " ";
matrix = matrix.repeat(n);
for(let i=0; i < n; i++) {
    console.log(matrix)
}
}
nXnMatrix(2)