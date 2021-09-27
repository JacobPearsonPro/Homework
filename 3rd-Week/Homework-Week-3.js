const pizzaToppings = ["Pepperoni", "Salami", "Sausage", "Mushrooms"]

function greetCustomer(){
    let greetingsAndSalutations = "Hi, welcome to Papa Murphy's, our toppings are "
    for (options of pizzaToppings) {
        greetingsAndSalutations += `${options}, `
    }
    console.log(greetingsAndSalutations)
}

function getPizzaOrder(size, crust, ...toppings){
    toppings==false ? toppings = "cheese" : null
    console.log(`${size} ${crust} ${toppings} pizza coming right up!`)
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
        console.log(`"Order up! Here's your ${size} ${crust} ${toppings} pizza ... Enjoy!"`)
    return {
        Size: size,
        Crust: crust,
        Toppings: toppings
        }
    }
    greetCustomer()
servePizza(preparePizza(getPizzaOrder("large", "thick")))