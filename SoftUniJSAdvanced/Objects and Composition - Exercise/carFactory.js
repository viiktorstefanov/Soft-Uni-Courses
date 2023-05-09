function carFactory (obj) {
    let outputObj = {};

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let model = obj.model;
    let power = obj.power;
    let color = obj.color;
    let carriage = obj.carriage;
    let wheelsize = obj.wheelsize;

    outputObj[`model`] = model;
    
    if(power <= smallEngine.power) {
        outputObj[`engine`] = smallEngine;
    }
    else if (power <= normalEngine.power) {
        outputObj[`engine`] = normalEngine;
    }
    else if (power <= monsterEngine.power) {
        outputObj[`engine`] = monsterEngine;
    }

    outputObj[`carriage`] = { type: carriage, color: color};

    outputObj[`wheels`] = [];
    if(wheelsize % 2 === 0) {
        wheelsize = wheelsize - 1;
    }
   
    outputObj[`wheels`].length = 4;
    outputObj[`wheels`].fill(wheelsize)

    return outputObj;
}
carFactory ({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)