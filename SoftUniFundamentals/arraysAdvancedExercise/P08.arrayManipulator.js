function arrayManipulator(integers, commands) {
let bool = false
let newArr = [];
for( let i = 0; i < commands.length; i++) {
    let currEl = commands[i].slice().split(' ');
    let command = currEl[0];
    let addManyIndex = currEl[1];
    let index = currEl[1]
    
    
    switch(command) {
        case "add" : 
        
        let addNum = Number(currEl[2])
        integers.splice(index,0,addNum) 
        break;
        case "contains" :
        let containsIndex = integers.indexOf(Number(currEl[1]))
        if(integers.includes(Number(currEl[1]))) {
            console.log(`${containsIndex}`)
        }
        else {
            console.log(-1)
        }
        break;
        case "print" :
            if(bool == true) {
                console.log(`[ ${newArr.join(', ')} ]`);   
            }
            else {
                console.log(`[ ${integers.join(', ')} ]`);   
            }
         
        return;
        case "remove" : 
        integers.splice(index,1)
        break;
        case "shift" : 
        for(let i = 0; i < index; i ++) {
            let operationShift = integers.shift()
            integers.push(operationShift)
        }
        break;
        case "addMany" : 
        for(let i = 2; i < currEl.length; i++ ) 
        {   
            integers.splice(addManyIndex,0,Number(currEl[i]))
            addManyIndex++;
        }
        break;
        case "sumPairs" : 
        for(let i = 0; i < integers.length/2; i++) {
        let a = integers[i];
        let b = integers[i+1];
        let c = a + b;
        newArr.push(c);
        
        }
        bool = true;
        break;
    }
    
}
}
//arrayManipulator([1, 2, 4, 5, 6, 7],
  //  ['add 1 8', 'contains 1', 'contains 3', 'print']
    //)
//arrayManipulator([1, 2, 3, 4, 5],
  //  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
   //)
   arrayManipulator([2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"])