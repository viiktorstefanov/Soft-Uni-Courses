function pirates(input) {
let targetCities = input.shift();
let targetCitiesObj = {};

while(targetCities !== "Sail") {
    targetCities = targetCities.split('||');
let city = targetCities[0];
let population = +targetCities[1];
let gold = +targetCities[2];

if(targetCitiesObj.hasOwnProperty(city)) {
    targetCitiesObj[city]['gold'] += gold;
    targetCitiesObj[city]['population'] += population;
}
else {
    targetCitiesObj[city] = {};
    targetCitiesObj[city]['gold'] = gold;
    targetCitiesObj[city]['population'] = population;
}
    targetCities = input.shift();
}
let line = input.shift();
while(line !== "End") {
line = line.split('=>');
let command = line[0];
if(command === "Plunder") {
    let currCity = line[1];
    let people = +line[2];
    let gold = +line[3];

    console.log(`${currCity} plundered! ${gold} gold stolen, ${people} citizens killed.`);

    targetCitiesObj[currCity][`gold`] -= gold;
    targetCitiesObj[currCity][`population`] -= people;

    if(targetCitiesObj[currCity][`gold`] <= 0 || targetCitiesObj[currCity][`population`] <= 0) {
        console.log(`${currCity} has been wiped off the map!`);
        delete targetCitiesObj[currCity];
    }    
}
else if (command === "Prosper") {
    let currCity = line[1];
    let gold = +line[2];

    if(gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
        break;
    }
    else {
        targetCitiesObj[currCity][`gold`] += gold;
        console.log(`${gold} gold added to the city treasury. ${currCity} now has ${targetCitiesObj[currCity][`gold`]} gold.`);
    }
    
}

    line = input.shift();
}
let arrTargetCities = Object.keys(targetCitiesObj);
let entriesTargetCities = Object.entries(targetCitiesObj);
let numCities = arrTargetCities.length;
if(numCities > 0) {
    console.log(`Ahoy, Captain! There are ${numCities} wealthy settlements to go to:`);
    for(line of entriesTargetCities) {
        let city = line[0];
        for(key in line[1]) {
            let gold = line[1].gold;
            let population = line[1].population;
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
            break;
        }
    }

}
else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
}
}
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
)