function shoppingList(input) {
let initialList = input.shift().split('!');
for( let i = 0; i < input.length-1; i++) {
    let currEl = input[i].slice().split(' ');
    let command = currEl[0];
    let item = currEl[1];
    if(command === "Urgent") {
          if(!initialList.includes(item)) {
            initialList.unshift(item)
          }
    }
    if(command === "Unnecessary") {
        if(initialList.includes(item)) {
            initialList.splice(initialList.indexOf(`${item}`), 1)
        }
    }
    if(command === "Correct") {
        let newItem = currEl[2];
        if(initialList.includes(item)) {
            initialList.splice(initialList.indexOf(`${item}`),1,newItem)
        }
    }
    if(command === "Rearrange") {
        if(initialList.includes(item)) {
            initialList.splice(initialList.indexOf(`${item}`), 1);
            initialList.push(item)
        }
    }
}
console.log(initialList.join(', '))
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
