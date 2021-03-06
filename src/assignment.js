// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.

 * @param {Array} arrayOfNumbers the array of numbers to sum
 */
console.log('QUESTION 1 ANSWER')
console.log('')

function sumOfNumbers() {
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
}

sumOfNumbers()




/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.

 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 
 */
console.log('')
console.log('')
console.log('')
console.log('')



console.log('QUESTION 2 ANSWER')
console.log('')
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


function countEvenNumbers(arrayOfNumbers) {


console.log('The original array of numbers is');       
console.log(arrayOfNumbers)

console.log('')
console.log('')


let evenNumbers = arrayOfNumbers.filter(number => number % 2 == 0)
console.log('The array of even numbers is');
console.log(evenNumbers)

console.log(`and there are ${evenNumbers.length} even numbers in this array`)


    return arrayOfNumbers.length;
}

countEvenNumbers(arrayOfNumbers)




/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

