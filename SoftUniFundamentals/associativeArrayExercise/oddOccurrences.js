function oddOccurences (string) {
let sentence = string.split(' ').map(w => w.toLowerCase());
let obj = {};
for(word of sentence) {
    if(obj.hasOwnProperty(word)) {
        obj[word]++
    }
    else {
        obj[word] = 1;
    }
}
let values = Object.entries(obj).sort((a,b) => a[1][0] - b[1][0]);
let result = [];
for(let value of values) {
    
    if(value[1] % 2 !== 0) {
        result.push(value[0]);
     
        
        
    }
}
 console.log(result.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')