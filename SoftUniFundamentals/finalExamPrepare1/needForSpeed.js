function speed (input) {
let countCars = Number(input.shift());
let cars = [];

for( let i = 0; i < countCars; i++) {
    let line = input.shift().split('|');
    let name = line[0];
    let miliage = Number(line[1]);
    let fuel = Number(line[2]);
    let car = [name,miliage,fuel];
    cars.push(car);
}

let commands = input.shift();

while (commands !== "Stop") {
commands = commands.split(' : ');
let command = commands[0];
let car = commands[1];

if(command === "Drive") {
let distance = Number(commands[2]);
let fuel = Number(commands[3]);
for(let i = 0; i < cars.length; i++) {
    let carInfo = cars[i];
    let carModel = carInfo[0];
    let carMileage = Number(carInfo[1]);
    let carFuel = Number(carInfo[2]);
    if(carModel === car) {
        if(carFuel >= fuel) {
        carInfo[1] += distance;
        carInfo[2] -= fuel;
        console.log(`${carModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        if(carInfo[1] >= 100000) {
            cars.splice(i,1)
            console.log(`Time to sell the ${carModel}!`);
        }
        }
        else {
            console.log(`Not enough fuel to make that ride`);
        }
    }
    
}

}

if(command === "Refuel") {
    let fuel = Number(commands[2]);

    for(let i = 0; i < cars.length; i++) {
        let carInfo = cars[i];
        let carModel = carInfo[0];
        let carMileage = Number(carInfo[1]);
        let carFuel = Number(carInfo[2]);
        if(carModel === car) {
        let maxFuel = 75;
        let fill = maxFuel - carFuel;
        let actualFill = Math.min(fill,fuel)
        carInfo[2] = carFuel + fuel;
        if(carInfo[2] > maxFuel) {
            carInfo[2] = maxFuel;
        }
        console.log(`${carModel} refueled with ${actualFill} liters`);
        }
    }



    




}
if(command === "Revert") {
    let kilometers = Number(commands[2]);

    for(let i = 0; i < cars.length; i++) {
        let carInfo = cars[i];
        let carModel = carInfo[0];
        let carMileage = Number(carInfo[1]);
        let carFuel = Number(carInfo[2]);
        if(carModel === car) {
        carInfo[1] -= kilometers;
        console.log(`${carModel} mileage decreased by ${kilometers} kilometers`);
        if(carInfo[1] < 10000) {
            carInfo[1] = 10000;
        }
        }
    }
}

    commands = input.shift();
}
for(let i = 0; i < cars.length; i++) {
    let currCar = cars[i];
    let currCarModel = currCar[0];
    let currCarMileage = currCar[1];
    let currCarFuel = currCar[2];
    console.log(`${currCarModel} -> Mileage: ${currCarMileage} kms, Fuel in the tank: ${currCarFuel} lt.`);
}


}
speed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )