"use strict";
(function(){


// - Make a function named isNumeric(input) that returns if the input is a number like 5 or 2.3 or a string containing
// only a number like "2". Example isNumeric(3) is - true. isNumeric("banana") should return false.
//     function isNumeric(input){
//         if (parseFloat(input)){
//             return true
//         }else{
//             return false
//         }
//     };
//     console.log(isNumeric(3));
//     console.log(isNumeric("banana"))
//     console.log(isNumeric('34'))


//     - Make a function named isEqual(input1, input2) that returns if both inputs have the same value. areEqual
//     function isEqual(input1, input2){
//         if (input1 !== input2) {
//             return false
//         } else {
//             return true
//         }
//
//     }
//     console.log(isEqual());

// - Make a function named isIdentical(input1, input2) that returns if both inputs are same value and data type.
//     function isIdentical(input1, input2){
//         if (input1 === input2){
//             return true
//         }else{
//             return false
//         }
//
//     }
//     console.log(isIdentical());
//

// - Make a function named not(input) returns the input with a flipped
//     function not(input){
//        return  !(input)
//     }
//     console.log(not(false));
//     console.log(not(true));

// - Make a function named isOdd(number) that returns true if the number is odd
//     function isOdd(input){
//         if (input % 2 === 0){
//             return false
//         }else{
//             return true
//         }
//     }
//     console.log(isOdd(3))



// - Make a function named isEven(number) that returns true if the number is even or zero
//     function isEven(input){
//         if (input % 2 === 0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(isEven(0))
//     console.log(isEven(4))
//     console.log(isEven("0"))




// - Make a function named isPositive(number) that returns true if the provided input is a positive number.
// False for zero or any other number or data type.
//     function isPositive(number){
//         if (number > 0){
//             return true
//         }else{
//             return false
//         }
//
//     }
//     console.log(isPositive(2))




// - Make a function named isNegative(number) that returns true if the provided input is a negative number. False for zero or any other number or data type.
//     function isNegative(number){
//         if (number < 0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(isNegative(1))
//     console.log(isNegative(-1))
//



// - Make a function named identity(input) that returns the input exactly as provided.
//     function identity(input){
//         if (input === input){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(identity("sam"))


// - Make a function named isFive(input)
//     function isFive(input){
//         if (input == 5){
//             return true
//         }else {
//             return false
//         }
//     }
//     console.log(isFive(5))
//     console.log(isFive("5"))
//     console.log(isFive(3))


// - Make a function named addFive(input) that adds five to some input.
//     function addFive(input){
//         return input + 5
//
//     }
//     console.log(addFive(5))


// - Make a function named isMultipleOfFive(input)
//     function isMutipleOfFive(input){
//         if (input % 5 ===0){
//             return true
//         }else{
//             return false
//         }
//
//
//     }
//     console.log(isMutipleOfFive(15))



// - Make a function named isThree(input)
//     function isThree(input){
//         if (input === 3){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(isThree(3));
//     console.log(isThree(4))



// - Make a function named isMultipleOfThree(input)
//     function isMutipleOfThree(input){
//         if (input % 3 === 0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(isMutipleOfThree(9))
//     console.log(isMutipleOfThree(5))



// - Make a function named isMultipleOfThreeAndFive(input)
//     function isMultipleOfThreeAndFive(input){
//         if (input %3===0 || input %5===0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(isMultipleOfThreeAndFive(15))



// - Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
//     function isMultipleOf(target, n){
//         if (target % n === 0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(isMultipleOf(6,6))


// - Make a function named isTrue(boolean)
//     function isTrue(boolean){
//         return true
//     }
//     console.log(isTrue())




// - Make a function named isFalse(boolean)
//     function isFalse(boolean){
//         return false
//     }
//     console.log(isFalse())



// - Make a function named isTruthy(input) // remember that values other than true will behave like true. you may
// need to lookup truthy/falsy values in JavaScript

    // function isTruthy(input){
    //     if (!!input === true){
    //         return true;
    //     }
    // }
    // console.log(isTruthy(3));


// - Make a function named isFalsy(input) // remember that values other than false behave like false

    // function isFalsy(input){
    //     if (!!input === false){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }
    // console.log(isFalsy(""));



// - Make a function named isVowel(letter)
// - Make a function named isConsonant(letter)
// - Make a function named isCapital(letter)
// - Make a function named isLowerCase(letter)
// - Make a function named hasLowerCase(string) that returns if a string has any lower cased
// - Make a function named isSpace(letter) that returns if a character is a space character
// - Make a function named isZero(number)
// - Make a function named notZero(input) that returns true if the input is any number except for zero.
//                                                                                                - Write a function named lowerCase(string)
// - Write a function named double(n) that returns a number times two
// - Write a function named triple(n) that returns a number times 3
// - Write a function named quadruple(n) that returns a number times 4
// - Write a function named half(n) that returns 1/2 of the provided input
// - Write a function named subtract(a, b) that returns a minus b
// - Write a function named multiply(a, b) that returns the product of a times b
// - Write a function named divide(a, b) that returns a divided by b
// - Write a function named remainder(a, b) that returns the remainder after dividing a by b
// - Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// - Write a function named cube(n) that returns n * n * n
// - Write a function named squareRoot(n) that returns the square root of the input
// - Make a function named absoluteValue(number) that returns the absolute value of a number.
// - Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// - Write a function named cubeRoot(n) that returns the cube root of the input
// - Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// - Write a function named degreesToRadians(number)
// - Write a function named radiansToDegrees(number)
// - Make a function named trim(string) that removes empty spaces before and after the input.
// - Make a function named notNot(input) that the negation of the negation of the input.
// - Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// - Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// - Write a function called reverseString(string) that reverses a string
// - Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and - including the number of sides.

}());
