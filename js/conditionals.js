"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
confirm("Would you like to enter a number?");
var result = prompt("Put a number ");
    if (result % 2 === 0) {
        alert("Your number is Even");
    } else {
        alert("Your number is Odd")
}
alert(parseInt(result)+ 100);
if (result > 0) {
    alert(" Your number is positive")
} else {
    alert("your number is negative")
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(colorName){
    if (colorName === "blue"){
       return  "blue is the color of the sky."
    }else if (colorName === "red"){
        return "strawberries are red"
    }else if (colorName === "cyan"){
        return "i don't know anything about cyan"
    }else{
        return "i dont know really"
    }
}
var colorName = prompt("whats your favorite color?")

alert(analyzeColor(colorName))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function randomColor(colors){

}

console.log(randomColor)

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var randomColor = colors[Math.floor(Math.random() * colors.length)];

switch(randomColor) {
    case "red":
        alert("red");
        break;
    case "orange":
        alert("orange");
        break;
    case "yellow":
        alert("yellow");
        break;
    case "green":
        alert("green");
        break;
    case "blue":
        alert("blue");
        break;
    case "indigo":
        alert ("indigo");
        break;
    case "violet":
        alert ("violet");
        break;
}
console.log(randomColor)

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorName = prompt("whats your favorite color?")

alert(analyzeColor(colorName))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal(luckyNumber){
    switch (luckyNumber){
        case 0:
            return "0";
            break;
        case 1:
            return "10% discount";
            break;
        case 2:
            return "25% discount";
            break;
        case 3:
            return "35% discount";
            break;
        case 4:
            return "50% discount";
            break;
        case 5:
            return "It's free!";
            break;
    }
}
console.log(calculateTotal(luckyNumber))


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
function calculateTotal(luckyNumber, total){
    var total = prompt("how much was your total?");
    return luckyNumber = Math.floor(Math.random() * 6);
        switch (luckyNumber){
        case 0:
            return "0" + (total - (0 * total));
            break;
        case 1:
            return "10% discount" + (total - (.10 * total));
            break;
        case 2:
            return "25% discount" + (total - (.25 * total));
            break;
        case 3:
            return "35% discount" + (total - (.35 * total));
            break;
        case 4:
            return "50% discount" + (total - (.50 * total));
            break;
        case 5:
            return "It's free!" + (total - (1 * total));
            break;
    }

    return alert ("your total is" + total * luckyNumber);

}
console.log(calculateTotal(luckyNumber , total))
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);