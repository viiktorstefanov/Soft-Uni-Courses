function solution() {

    let stock = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    }

    let recipes = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }
    }


    return function (input) {
        const commands = input.split(' ');
        const command = commands[0];


        switch (command) {
            case 'restock':
                const microelement = commands[1];
                const quantityStock = commands[2];
                stock[microelement] += +quantityStock;
                return 'Success';

            case 'prepare':
                let food = commands[1];
                let count = +commands[2];
                let recipe = recipes[food];
        
        for (const macronutrient in recipe) {
            if(stock[macronutrient]<recipe[macronutrient]*count){
                return `Error: not enough ${macronutrient} in stock`;
              }
              stock[macronutrient]-= recipe[macronutrient]*count;
            }
            return `Success`;

    case 'report' :
        return Object.entries(stock)
        .map(x=> `${x[0]}=${x[1]}`)
        .join(' ');
    }
}

}
let manager = solution();
console.log (manager ("restock flavour 50 ")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10"));//Success
console.log (manager ("prepare apple 1")); // Success 
console.log (manager ("restock fat 10"));// Success 
console.log (manager ("prepare burger 1")); // Success 
console.log (manager ("report"));//protein=0 carbohydrate=4 fat=3 flavour=55
