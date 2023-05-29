class List {
    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }
    add(number) {
        this.numbers.push(number);
        this.numbers.sort((a, b) => a-b);
        this.size = this.numbers.length;
        return new List();
    }
    remove(index) {
        if(this.numbers[index] === undefined ) {
            throw new Error;
           
        }else {
            this.numbers.splice(index,1);
            this.numbers.sort((a, b) => a-b);
            this.size = this.numbers.length;
        }
        return new List();
    }
    get(index) {
        if(this.numbers[index] === undefined) {
            throw new Error;
           
        }else {
            return this.numbers[index];
        }
    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
