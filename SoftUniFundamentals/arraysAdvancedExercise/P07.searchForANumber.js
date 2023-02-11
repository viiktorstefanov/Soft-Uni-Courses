function searchNum (arr,commands) {
let toTake = commands[0];
let toDelete = commands[1];
let toSearch = commands[2];
arr.splice(0,toDelete)
// We can make it with .shift() too!
//arr.shift();
//arr.shift();
let counter = 0;

for(let i = 0; i < arr.length; i++ ) {
   let currEl = arr[i];
    if(currEl === toSearch) {
      counter++;
    }
   

    }
console.log(`Number ${toSearch} occurs ${counter} times.`)
}

searchNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )
searchNum([7, 1, 5, 8, 2, 7],
      [3, 1, 5]
      )