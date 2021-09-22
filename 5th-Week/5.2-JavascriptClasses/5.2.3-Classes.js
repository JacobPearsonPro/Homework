// refactor your Animal function constructor and methods to use the class keyword
class Animal {
    constructor (name, type, weight){
    this.name = name;
    this.type = type;
    this.weight = weight;}
    }
// extend the Animal class with a type of animal
class Mammal extends Animal{
    constructor (name, type, weight, genus){
        super (name, type, weight);
        this.genus = genus;
}
// add some unique methods and properties to the class extension
details() {console.log( `This ${this.type} belongs to the genus ${this.genus}.`)}
};
// create an instance of the class extension and call one of its methods
const wolf = new Mammal("lupin", "wolf", 120, "canis")
wolf.details()