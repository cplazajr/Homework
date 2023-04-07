const pizzaToppings = [`pepperoni`, `sausage`, `onions`, `tomatoes`];

function greetCustomer() {
  console.log("Welcome to MajinBu! Here are the available pizza toppings:");
}
greetCustomer();

for (let i = 0; i < pizzaToppings.length; i++) {
  console.log(" " + pizzaToppings[i]);
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`one ${size} ${crust} crust pizza with ${toppings} coming up!`);
}
getPizzaOrder("large", "thin", "pepperoni", "sausage", "onions", "tomatoes");

function preparePizza([size, crust, toppings]) {
  console.log("Cooking pizza...");
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
}
preparePizza(["large", "thin", ["pepperoni", "sausage", "onions", "tomatoes"]]);

function servePizza(pizza) {
  console.log(
    `Order up! Here is your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings},Enjoy!`
  );
  return pizza;
}
const pizza = {
  size: "large",
  crust: "thin",
  toppings: ["pepperoni", "sausage", "onions", "tomatoes"]
};
servePizza(pizza);
