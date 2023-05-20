function argumentInfo (...arguments) {
let info = {};


arguments
.forEach( x => {
    let typeArgument = typeof x;
    if(!info[typeArgument]) {
        info[typeArgument] = 1;
    }else {
        info[typeArgument]++;
    }
    console.log(`${typeArgument}: ${x} `);
});

Object.entries(info).sort((a, b) => b[1] - a[1]).forEach(x => {
    console.log(`${x[0]} = ${x[1]}`);
})
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); },'fewfw')