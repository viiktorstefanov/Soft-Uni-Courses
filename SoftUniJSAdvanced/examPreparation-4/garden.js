class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if(this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }else {
            this.plants.push( { plantName, spaceRequired, ripe: false, quantity: 0 } )
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }
    ripenPlant(plantName, quantity) {
        if(!this.plants.find(x => x.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        let currPlant = this.plants.find(x => x.plantName === plantName);
        if(currPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        currPlant.ripe = true;
        currPlant.quantity += quantity;
        if(quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }else if(quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
        
    }
    harvestPlant(plantName) {
        if(!this.plants.find(x => x.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        let currPlant = this.plants.find(x => x.plantName === plantName);
        if(currPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let removeIndex = this.plants.indexOf(currPlant);
        let removedPlant = this.plants.splice(removeIndex, 1);
        this.spaceAvailable += removedPlant[0].spaceRequired;
        this.storage.push(removedPlant[0]);
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plants = sorted.map(x => `${x.plantName}`);
        if(this.storage.length <= 0) {
            return `The garden has ${this.spaceAvailable} free space left.` + '\n' + `Plants in the garden: ${plants.join(', ')}` + '\n' + `Plants in storage: The storage is empty.`;
        }else {
            let storage = this.storage.sort((a, b) => a[0].plantName.localeCompare(b[0].plantName));
            let storagePlants = storage.map(b => `${b.plantName} (${b.quantity})`);
            return `The garden has ${this.spaceAvailable} free space left.` + '\n' + `Plants in the garden: ${plants.join(', ')}` + '\n' + `Plants in storage: ${storagePlants.join(', ')}`;
        }
        
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());




