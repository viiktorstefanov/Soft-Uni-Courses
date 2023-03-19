function plantDiscovery(input) {
  
    const plantCount = Number(input.shift());
    let plants = {};

    
    for (let i = 0; i < plantCount; i++) {
        
        let line = input.shift(); 
        let lineArr = line.split('<->'); 
        let name = lineArr[0];
        let rarity = Number(lineArr[1]);

        
        plants[name] = {
            rarity: rarity,
            ratings: [],
        };
    }

    
    let line = input.shift(); 
    while (line != 'Exhibition') {
        
        let commandArr = line.split(': ');  
        let command = commandArr[0];
        let args = commandArr[1].split(' - '); 
        let name = args[0];
        let argument = args[1];

        let plant = plants[name];
        if (plant) {
            switch (command) {
                case 'Rate':
                    let rating = Number(argument);
                    plant.ratings.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plant.rarity = rarity;
                    break;
                case 'Reset':
                    plant.ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        line = input.shift();
    }

    
    console.log('Plants for the exhibition:');
    for (const name in plants) {
        
        let sum = 0;
        let ratingsCount = plants[name].ratings.length;

        for (const rating of plants[name].ratings) {
            sum += rating;
        }

        let averageRating = sum / ratingsCount;
        if (!averageRating) {
            averageRating = 0;
        }

        
        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);