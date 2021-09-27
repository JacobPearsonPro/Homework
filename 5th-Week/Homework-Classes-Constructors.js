class Class1{
    constructor(param1){
        this.trait1 = param1;
    }
}

class ClassA extends Class1 {
    constructor(param1, param2){
        super(param1);
        this.trait2 = param2;
    }
}

class ClassB extends Class1 {
    constructor(param1, param2){
        super(param1);
        this.trait2 = param2;
    }
}

const var1 = new Class1("thing1")
const varA = new ClassA("thing1", "thingA")
const varB = new ClassB("thing1", "thingB")
console.log(var1.trait1)
console.log(varA.trait1)
console.log(varB.trait1)
console.log(varA.trait2)
console.log(varB.trait2)

