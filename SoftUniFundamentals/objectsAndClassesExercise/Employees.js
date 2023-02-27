function employees(list) {
    class Employees {
        constructor(currEmployee, currEmployeeLength) {
            this.name = currEmployee;
            this.number = currEmployeeLength;
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }

for(let i =0; i < list.length; i++) {
    let currEmployee = list[i];
    let currEmployeeLength = currEmployee.length;
    
    let newEmployee = new Employees (currEmployee, currEmployeeLength)
    newEmployee.print()
}

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )