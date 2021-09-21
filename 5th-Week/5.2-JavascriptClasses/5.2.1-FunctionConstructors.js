// create an object literal
const puppy = {
    name: "Spot",
    age: 5,
    hobbies: ["Run around", "Play catch", "Go to the park"]
}
// include a method that uses "this"
const person = {
    name: "Alex",
    hobbies: ["Fishing", "Sleeping", "Watching hockey", "Teaching"],
    greet() {
        return `Wedding bells for ${this.name}`
    }
}
// create a function in the global scope that prints "this"
function logThis() {
    console.log("this is: ", this);
}
logThis();