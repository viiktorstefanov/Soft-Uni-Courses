function solve (input) {
let friendList = input.shift();
friendList = friendList.slice().split(',');
let countBlacklisted = 0;
let countLost = 0;

for(let i = 0; i < input.length; i++ ) {
    let el = input[i];
    let commands = el.slice().split(' ');
    let command = commands[0];

    if(command === "Report") {
console.log(`Blacklisted names: ${countBlacklisted}`);
console.log(`Lost names: ${countLost}`);
console.log(friendList.join(' '));
        break;
    }
    
    if(command === "Blacklist") {
        
      let name = commands[1];
    
      if(friendList.includes(`${name}`)) {
      for(let i = 0; i < friendList.length; i++) {
        let currName = friendList[i];
      
     
        
        if(currName === name) {
            
            
            friendList.splice(i,1,"Blacklisted")
            
            
        }
      }
      console.log(`${name} was blacklisted.`);
      countBlacklisted++;
    }
    else {
        console.log(`${name} was not found.`);
    }
}
    else if (command === "Error") {
        let index = Number(commands[1]);

        let name = friendList[index];
        name = name.slice().split(' ');
        name = name[1];
        
        
      
        if(friendList[index] !== "Blacklisted" && index < friendList.length  && index >= 0 && friendList[index] !== "Lost") {
           friendList[index] = "Lost";

        console.log(`${name} was lost due to an error.`);
           countLost++;
        }
    }
    else if(command === "Change") {
        let index = Number(commands[1]);
        let newName = commands[2];
        if(index < friendList.length  && index >= 0) {
            console.log(`${friendList[index]} changed his username to ${newName}`);
            friendList.splice(index,1,newName);
            
        }

    }
    
}
}
// solve(["Mike, John, Eddie","Blacklist Mike","Error 0","Change 5 gosho","Report"])
// solve((["Mike, John, Eddie, William",
// "Error 3",
// "Error 3",
// "Change 0 Mike123",
// "Report"]))
solve(["Mike, John, Eddie, William","Blacklist Maya","Error 1","Change 4 George","Report"])