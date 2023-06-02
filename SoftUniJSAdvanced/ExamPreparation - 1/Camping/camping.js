
class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        }
        this.listOfParticipants = [];
        
    }
    registerParticipant(name, condition, money) {
        
        if(!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if(this.listOfParticipants.some(x => x.name === name)) {
            return `The ${name} is already registered at the camp`;
        }
        if(money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({
            name, condition, power: 100, wins:0,
        })
        return `The ${name} was successfully registered.`;
    }
    
    unregisterParticipant(name) {
        if(!this.listOfParticipants.some(x => x.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
            let indexToRemove = this.listOfParticipants.findIndex(obj => obj.name === name);
            this.listOfParticipants.splice(indexToRemove,1)
            return `The ${name} removed successfully.`;
        
    }
    timeToPlay(typeOfGame, participant1 ,participant2) {
        
        let firstPlayer = this.listOfParticipants.find(x => x.name === participant1);
        if(typeOfGame === "WaterBalloonFights") {
            let secondPlayer = this.listOfParticipants.find(x => x.name === participant2);
            if(firstPlayer == undefined || secondPlayer == undefined) {
                throw new Error(`Invalid entered name/s.`)
            }
            if(firstPlayer.condition !== secondPlayer.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            
           if(firstPlayer.power > secondPlayer.power) {
                firstPlayer.wins++;
                return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`
           }else if(secondPlayer.power > firstPlayer.power) {
                secondPlayer.wins++;
                return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`
           }else {
                return `There is no winner.`
           }
        }else if(typeOfGame === "Battleship") {
           
            if(firstPlayer == undefined) {
                throw new Error(`Invalid entered name/s.`)
            }
            firstPlayer.power += 20;
            return `The ${firstPlayer.name} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
       
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(a => `${a.name} - ${a.condition} - ${a.power} - ${a.wins}`);
        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n${sorted.join('\n')}`;
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));







