/**
 * @param {string[]} string - answers based on favorite flavors
 * @returns {object} the number of flavors they have ordered
 */

/*
User enters flavors from a prompt
Split the answers into an array
Declare a function with the parameter of the flavor array
Initalize a variable to store their answers
Iterate through the array
Store each iteration in the variable
If next iteration is already stored, increment count
Return flavor list to user
*/

// Prompt the user for a list of integers separated by commas.
const userFlavorString = prompt(
  "Please enter how many of your favorite yogurt flavors you would like to order, separated by commas...i.e. chocolate,vanilla,vanilla,strawberry"
);

const yogurtArray = userFlavorString.split(",");

console.log(yogurtArray);

function userFlavorList(array) {
  let order = {};
  for (const element of array) {
    if (!element in order) {
      order.splice(0);
    } else {
    }
  }
  return order;
}

console.log(userFlavorList(yogurtArray));
