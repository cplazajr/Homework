let pizzaPlace = "Majin Bu";

const numberOfToppings = 3;

console.log(pizzaPlace, typeof pizzaPlace);

console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}, Here we serve ${numberOfToppings} types of toppings for your pizza.`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
