function convertToJSON(firstName, secondName, hairColor) {
let person = {
    name : firstName,
    lastName : secondName,
    hairColor : hairColor
}
console.log(JSON.stringify(person));
}
convertToJSON('George', 'Jones', 'Brown')