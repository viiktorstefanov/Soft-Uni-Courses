function heroes (input) {
let numHeroes = input.shift();
let heroes = {};

for(let i = 0; i < numHeroes; i++) {
let line = input.shift().split(' ');
let heroName = line[0];
let heroHP = +line[1];
let heroMP = +line[2];
heroes[heroName] = {};
heroes[heroName][`heroHP`] = heroHP;
heroes[heroName][`heroMP`] = heroMP;
}
let line = input.shift();
while(line !== "End") {
line = line.split(' - ');
let command = line[0];

if(command === "CastSpell") {
    let currHero = line[1];
    let neededMP = +line[2];
    let spell = line[3];
    
    if(heroes.hasOwnProperty(currHero)) {
        if(heroes[currHero][`heroMP`] >= neededMP) {
            heroes[currHero][`heroMP`] -= neededMP;
            console.log(`${currHero} has successfully cast ${spell} and now has ${heroes[currHero][`heroMP`]} MP!`);
        }
        else {
            console.log(`${currHero} does not have enough MP to cast ${spell}!`);
        }
    }
}

else if (command === "TakeDamage") {
    let currHero = line[1];
    let damage = +line[2];
    let attacker = line[3];
    
    if(heroes.hasOwnProperty(currHero)) {
        heroes[currHero][`heroHP`] -= damage;
        if(heroes[currHero][`heroHP`] > 0) {
            console.log(`${currHero} was hit for ${damage} HP by ${attacker} and now has ${heroes[currHero][`heroHP`]} HP left!`);
        }
        else {
            delete heroes[currHero];
            console.log(`${currHero} has been killed by ${attacker}!`);
        }
    }
}
else if (command === "Recharge") {
    let currHero = line[1];
    let regenerateMP = +line[2];
    if(heroes.hasOwnProperty(currHero)) {
        let currHeroMP = heroes[currHero][`heroMP`];
        let missingMP = 200 - currHeroMP;
        let currRegenerateMP = Math.min(missingMP,regenerateMP);

        heroes[currHero][`heroMP`] += regenerateMP;
          if(heroes[currHero][`heroMP`] > 200) {
            heroes[currHero][`heroMP`] = 200;
          }
        console.log(`${currHero} recharged for ${currRegenerateMP} MP!`);
    }
}
else if (command === "Heal") {
    let currHero = line[1];
    let regenerateHP = +line[2];
    if(heroes.hasOwnProperty(currHero)) {
        let currHeroHP = heroes[currHero][`heroHP`];
        let missingHP = 100 - currHeroHP;
        let currRegenerateHP = Math.min(missingHP,regenerateHP);

        heroes[currHero][`heroHP`] += regenerateHP;
          if(heroes[currHero][`heroHP`] > 100) {
            heroes[currHero][`heroHP`] = 100;
          }
          console.log(`${currHero} healed for ${currRegenerateHP} HP!`);
    }
}
    line = input.shift();
}
let heroesAlive = Object.keys(heroes);
let numAliveHeroes = heroesAlive.length;
let heroesAliveStats = Object.entries(heroes);
if(numAliveHeroes > 0) {
for(hero in heroes) {
    console.log(hero);
    console.log(` HP: ${heroes[hero][`heroHP`]}`);
    console.log(` MP: ${heroes[hero][`heroMP`]}`);
}
}
}
heroes ([2,
"Solmyr 85 120",
"Kyrre 99 50",
"Heal - Solmyr - 10",
"Recharge - Solmyr - 50",
"TakeDamage - Kyrre - 66 - Orc",
"CastSpell - Kyrre - 15 - ViewEarth",
"End"
])