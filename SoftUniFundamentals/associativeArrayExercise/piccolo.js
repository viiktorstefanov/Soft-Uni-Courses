function piccolo(input) {
    let park = {};
    let counter = 0;
for(let line of input) {
    let [direction, carNumber] = line.split(', ');
  if(direction === "IN") {
    park[carNumber] = 1;
  }
  else {
    if(park.hasOwnProperty(carNumber)) {
        delete park[carNumber];
    }
  }
}
let sortPark = Object.keys(park).sort((a,b) => a.localeCompare(b));
for(let car of sortPark) {
    console.log(`${car}`);
}
}
piccolo(
['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)