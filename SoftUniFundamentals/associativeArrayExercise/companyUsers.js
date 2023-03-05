function companyUsers(list) {
let info = {};
for(line of list) {
    line = line.split(' -> ');
    let [companyName,id] = line;
    let set = new Set();
    if(info[companyName]) {
        info[companyName] = info[companyName].add(id)
    }
    else {
        info[companyName] = set.add(id);
    }
}
let arrInfo = Object.entries(info).sort((a,b) => a[0].localeCompare(b[0]));

for(line of arrInfo) {
let companyName = line.shift();
console.log(companyName);
let set = line[0];
let arrSet = Array.from(set);
for(id of arrSet) {
    console.log(`-- ${id}`);
}
}
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )