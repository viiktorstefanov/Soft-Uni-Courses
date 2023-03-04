function companyUsers(list) {
    let company = {};
    
    let mySet1 = new Set();
for(line of list) {
    mySet1.add(line)
}
let arrSet  = Array.from(mySet1).sort((a,b) => a.localeCompare(b));
for(line of arrSet) {
    let [companyName,id] = line.split(' -> ')
    
    // console.log(companyName);
    // console.log(`-- ${id}`);
}
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )