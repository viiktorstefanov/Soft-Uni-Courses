function cats (input) {
class Cat {
    constructor(catname, herAge) {
        this.name = catname;
        this.age = herAge;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
    
for(let i =0 ; i < input.length; i++) {
let currEl = input[i].split(' ');
let catName = currEl[0];
let herAge = Number(currEl[1]);

let cat = new Cat(catName, herAge)
cat.meow()
}
}
cats(['Mellow 2', 'Tom 5'])