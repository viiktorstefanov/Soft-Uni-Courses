let { Repository } = require("./solution.js");
let expect = require('chai').expect;

describe("Repository", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    describe("Testing initialization", function () {
        it("Should add props property on init ", function () {
           let actual = new Repository(properties);
           
           expect(actual).to.have.property('props');
           expect(actual.props).to.deep.equal(properties)
        });
        it("Should have property data and should be type Map on init ", function () {
            let actual = new Repository(properties);
            
            expect(actual).to.have.property('data');
            expect(typeof actual.data).is.equal('object')
            expect(actual.data).instanceOf(Map)
         });
        it("Should have nextId function on init", function () {
            let actual = new Repository(properties);
            
            expect(actual).to.have.property('nextId');
            expect(typeof actual.nextId).to.equal('function')
        });
    });
    describe("add entity", function () {
        it("Should return value of id zero if first entity is added and 1 when call add second time", function () {
           let actual = new Repository(properties);
           
           expect(actual.add(entity)).to.be.equal(0);
           expect(actual.add(entity)).to.be.equal(1);
           
        });
        it("Should store valid entity in data map ", function () {
            let actual = new Repository(properties);

            actual.add(entity);
            
            expect(actual.data.get(0)).not.to.be.undefined;
            // expect(actual.data.get(0)).to.deep.equal(entity);
            expect(actual.data.get(0)).to.have.property('name').that.equals('Pesho');
            expect(actual.data.get(0)).to.have.property('age').that.equals(22);
            expect(actual.data.get(0)).to.have.property('birthday');
           
         });
         it("Should throw error if property of entity is missing", function () {
            let entity = {
                name: "Pesho",
                age: 22,
            };
            let actual = new Repository(properties);

            
           expect(() => actual.add(entity).to.throw(Error, `Property birthday is missing from the entity`))
           
         });
         it("Should throw error if property of entity has other type of value", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1995-02-16'
            };
            let actual = new Repository(properties);

            
           expect(() => actual.add(entity).to.throw(Error, `Property birthday is not of correct type!`))
           
         });
    });
    describe("Get count", function () {
        it("Should return number of added valid entities", function () {
           let actual = new Repository(properties);
           actual.add(entity);
           actual.add(entity);
           
           expect(actual.count).is.equal(2);
           
        });
        it("Should return zero if there is no added entities", function () {
            let actual = new Repository(properties);
            
            expect(actual.count).is.equal(0);
            
         });
    });
    describe("Get id", function () {
        it("Should return entity by id", function () {
           let actual = new Repository(properties);

           actual.add(entity);
           
           
           expect(actual.getId(0)).to.deep.equal(entity);
           
        });
        it("Should throw error when there is no id founded", function () {
            let actual = new Repository(properties);
 
            actual.add(entity);
            
            
            expect(() => actual.getId(2)).to.throw(Error, `Entity with id: 2 does not exist!`)
            
         });
        
    });
    describe("Update", function () {
        it("Should update one valid entity with another", function () {
           
            let newEntity = {
                name: "Gosho",
                age: 55,
                birthday: new Date(1995, 0, 7)
            };
            let actual = new Repository(properties);
            actual.add(entity);
            actual.update(0, newEntity);

            expect(actual.getId(0).name).to.equal('Gosho');
           
        });
        it("Should throw error when update invalid id ", function () {
           
            let actual = new Repository(properties);
            expect(() => actual.update(3, entity)).to.throw(Error, `Entity with id: 3 does not exist!`)
        });

        
        
    });
   describe("Delete", function () {
        it("Should delete valid entity", function () {
           
            let actual = new Repository(properties);
            actual.add(entity);
            actual.add(entity);
            actual.del(0);

            expect(actual.count).to.equal(1);
        }); 
        it("Should throw error when delete entity with invalid id", function () {
           
            let actual = new Repository(properties);
    
            expect(() => actual.del(3)).to.throw(Error, `Entity with id: 3 does not exist!`)
        }); 
    });
});
