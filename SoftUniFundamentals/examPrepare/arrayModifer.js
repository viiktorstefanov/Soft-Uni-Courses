function arrayModifer(input) {
let numbers = input.shift().split(' ').map(x => Number(x));
let commands = input
let finalArr = [];
for( let i = 0; i < commands.length; i++) {
    let command = commands[i].slice().split(' ');
    if(command[0] === "end") {
        break;
    }
    if(command[0] === "swap") {
        let index1 = Number(command[1]);
        let index2 = Number(command[2]);
        let swap1 = numbers[index1];
        let swap2 = numbers[index2];
        numbers[index1] = swap2;
        numbers[index2] = swap1;
      
    }
    else if(command[0] === "multiply") {
        let index1 = Number(command[1]);
        let index2 = Number(command[2]);
        let firstEl = numbers[index1];
        let secondEl = numbers[index2];
        let finalEl = firstEl * secondEl;
        numbers[index1] = finalEl;
        
    }
    else if(command[0] === "decrease") {
       numbers = numbers.map( x => x - 1)
    }
}
console.log(numbers.join(', '));
}
arrayModifer( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )