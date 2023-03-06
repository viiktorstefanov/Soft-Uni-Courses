function arenaTier(input) {
let allGladiators = {}; 

for(let i = 0; i < input.length-1; i++) {
    
     if (! input[i].split(' ').includes('vs')) {
        let [name,technique,skill] = input[i].split(' -> ');
        skill = +skill;
        if(! allGladiators.hasOwnProperty(name)) {
            allGladiators[name] = {};
        }
        if(! allGladiators[name].hasOwnProperty(technique) || allGladiators[name][technique] < skill ) {
            allGladiators[name][technique] = skill;
        }
     }
     else {
        let [firstGladiator,secondGladiator] = input[i].split(' vs '); 
        if(allGladiators.hasOwnProperty(firstGladiator) && allGladiators.hasOwnProperty(secondGladiator)) {
        let gladiator1Techniques = allGladiators[firstGladiator];
        let gladiator2Techniques = allGladiators[secondGladiator];

        for(skill in gladiator1Techniques) {
        if(gladiator2Techniques.hasOwnProperty(skill)) {
             if(gladiator1Techniques[skill] > gladiator2Techniques[skill]) {
                 delete allGladiators[secondGladiator]
             }
             else if (gladiator2Techniques[skill] > gladiator1Techniques[skill]) {
                delete allGladiators[firstGladiator];
             }
        }
        
        }
        }
     }

}
let sortedGladiators = Object.keys(allGladiators).sort((a, b) => a.localeCompare(b));
for(gladiator in allGladiators) {
    let sum = 0;
    for(techniques in allGladiators[gladiator]) {
        sum+= allGladiators[gladiator][techniques]
    }
    allGladiators[gladiator][`sum`] = sum;
}
let sortedSkillSumNameGladiators = Object.entries(allGladiators).sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
.forEach(el => { 
    console.log(`${el[0]}: ${el[1].sum} skill`);
    delete el[1].sum;
    let sortedSkillTechnique = Object.entries(el[1]).sort((a, b) => b[1] - a[1]|| a[0].localeCompare(b[0]))
    for(let i = 0; i < sortedSkillTechnique.length; i++) {
        let line = sortedSkillTechnique[i];
        
        console.log(`- ${line[0]} <!> ${line[1]}`);
    }}) 
    
  

}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )