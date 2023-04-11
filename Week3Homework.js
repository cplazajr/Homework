//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = [`pepperoni`, `sausage`, `onions`, `tomatoes`];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
  let greet = "Welcome to MajinBu! Here are the available pizza toppings: ";
  let toppings = "";

  for (let pizzaTopping of pizzaToppings) {
    toppings += pizzaTopping + " ";
  }
  console.log(greet + toppings);
}

//Create a getPizzaOrder function

let order = [];
let pizza = {};

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`one ${size} ${crust} crust pizza with ${toppings} coming up!`);
  order = [size, crust, ...toppings];
  return order;
}

//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(order) {
  console.log("Cooking pizza...");
  pizza = {
    size: order[0],
    crust: order[1],
    toppings: order[2]
  };
  return pizza;
}

//Create a servePizza function that
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

function servePizza(pizzaOrder) {
  console.log(
    `Order up! Here is your ${pizzaOrder.size} ${pizzaOrder.crust} crust pizza with ${pizzaOrder.toppings},Enjoy!`
  );
  return pizzaOrder;
}

//Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
getPizzaOrder([]);
preparePizza([]);
servePizza(order);
