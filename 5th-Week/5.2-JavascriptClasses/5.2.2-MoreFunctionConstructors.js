// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function Animal(name, type, weight){
    this.name = name;
    this.type = type;
    this.weight = weight;}
// create a new instance on an Animal
const PetDog = new Animal("D.O.G", "Dog", 90) 
console.log(PetDog)

// add methods to the Animal prototype
Animal.prototype.log = function log(){console.log("this has run")}
Animal.prototype.log("D.O.G", "Dog", 90)

// attach a method directly to the Animal instance that "overwrites" a prototype method
PetDog.log = function log(){console.log("new result")}
Animal.prototype.log("D.O.G", "Dog", 90)
PetDog.log("D.O.G", "Dog", 90)

const petCat = new Animal("C.A.T", "Cat", 10) 
console.log(petCat)
petCat.log()

