function adressBook (input) {
    let adressBook = {};
for(line of input) {
    line = line.split(':');
    let [name,adress] = line;
    adressBook[name] = adress;
}
let sortedAdressBook = Object.keys(adressBook).sort((a,b) => a.localeCompare(b))
for(line of sortedAdressBook) {
    console.log(`${line} -> ${adressBook[line]}`);
}
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)