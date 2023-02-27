function thirdTask(input) {
    chatHistory = [];
for(let i = 0; i < input.length; i++) {
    let currCommand = input[i].slice().split(' ');
    let command = currCommand[0];
    if(command === "end") {
        break;
    }
    if(command === "Chat") {
        let message = currCommand[1];
        chatHistory.push(message)
    }
    else if(command === "Delete") {
        let message = currCommand[1];
        if(chatHistory.includes(message)) {
                for( let i = 0; i < chatHistory.length; i++) {
                    let currMessage = chatHistory[i];
                    if(currMessage === message) {
                        let index = chatHistory.indexOf(message)
                        chatHistory.splice(index,1)
                        break;
                    }
                }
        }
    }
    else if(command === "Edit") {
        let message = currCommand[1];
        let edited = currCommand[2];

        if(chatHistory.includes(message)) {
            for( let i = 0; i < chatHistory.length; i++) {
                let currMessage = chatHistory[i];
                if(currMessage === message) {
                    let index = chatHistory.indexOf(message)
                    chatHistory.splice(index,1,edited)
                    break;
                }
            }
    }

    }
    else if(command === "Pin") {
        let message = currCommand[1];
        if(chatHistory.includes(message)) {
            for( let i = 0; i < chatHistory.length; i++) {
                let currMessage = chatHistory[i];
                if(currMessage === message) {
                    let index = chatHistory.indexOf(message)
                    chatHistory.splice(index,1)
                    chatHistory.push(message)
                    break;
                }
            }
    }

    }
    else if(command === "Spam") {
        let messages = currCommand;
        messages.shift(); 
        // console.log(messages);
        for( let i = 0; i < messages.length; i++) {
            currMess = messages[i];
            chatHistory.push(currMess)
            
        }
       
    }
}
 console.log(chatHistory.join('\n'));
}
thirdTask((["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])
)