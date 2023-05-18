function listProcessor(commands){
    let stack = [];
    let commandFactory = {
        'add':(text)=>{
            stack.push(text);
        },
        'remove':(text)=>{
            while(stack.includes(text)){
                let index = stack.indexOf(text); 
                stack.splice(index,1);
            }
        },
        'print':()=>{
            console.log(stack.join(','));
        }
    }
    for (const line of commands) {
        let [command,text] = line.split(' ');
        if(commandFactory[command]){
            commandFactory[command](text);
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])