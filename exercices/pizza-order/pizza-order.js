/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {

const ORDER = [pizza, ...extras
];
let price = 0;
for (let i = 0; i < ORDER.length; i++) {
  switch (ORDER[i]) {
    case 'Margherita':
      price += 7;
      break;
    case 'Caprese':
      price += 9;
      break;
    case 'Formaggio':
      price += 10;
      break;
    case 'ExtraToppings':
      price += 2;
      break;
    case 'ExtraSauce':
      price += 1;
      break;
    default:
      price += 0;
  }

}

  return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
 let total = 0;
 
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras);
  }
 
  return total;
}
