class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Object.defineProperty(this, 'fullName', {
            set: function (value) {
                if(/^[A-Z][a-z]+\s[A-Z][a-z]+/gm.test(value)) {
                    let [fName, lName] = value.split(' ');
                    this.firstName = fName;
                    this.lastName = lName;
                }
             
            },
            get: function() {
                return this.firstName + ' ' + this.lastName;
            }
        })
    }
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
