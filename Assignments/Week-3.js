const pizzaToppings = ["Pepperoni", "Salami", "Sausage", "Mushrooms"]

function greetCustomer(){
    let greetingsAndSalutations = "Hi, welcome to Papa Murphy's, our toppings are "
    for (options of pizzaToppings) {
        greetingsAndSalutations += `${options}, `
    }
    console.log(greetingsAndSalutations)
}

function getPizzaOrder(size, crust, ...toppings){
    console.log(`${size} ${crust} pizza with ${toppings} coming right up!`)
    return [size, crust, toppings]
}

function preparePizza([size, crust, ...toppings]){
    console.log(`. . . Cooking pizza . . .`)
return {
    Size: size,
    Crust: crust,
    Toppings: toppings
    }
}

function servePizza({
    Size: size,
    Crust: crust,
    Toppings: toppings
    }){
        console.log(`"Order up! Here's your ${size} ${crust} crust pizza with ${toppings} ... Enjoy!"`)
    return {
        Size: size,
        Crust: crust,
        Toppings: toppings
        }
    }
servePizza(preparePizza(getPizzaOrder("large", "thick", "Pepperoni", "Salami", "Sausage", "Mushrooms")))