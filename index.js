/**
 * @param {string[]} string - answers based on favorite flavors
 * @returns {string} the number of flavors they have ordered
 */

/*
User enters flavors from a prompt
Split the answers into an array
Initalize a variable to store their answers
Iterate through the array
Store each iteration in the variable
If next iteration is already stored, increment count
Return flavor list to user
*/

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter how many of your favorite yogurt flavors you would like to order, separated by commas...i.e.",
  "chocolate,vanilla,vanilla,strawberry"
);
