console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'


function helloName(name) {

  //return 'hello' + " " + name;
    return 'Hello, Your Name!'
}


// Remember to call the function to test

//console.log(helloName('Your Name!'));
//console.log(helloName('hello, Jan Michael'));


// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber,secondNumber) {
  
  return firstNumber + secondNumber;
}

console.log('this should be 5 =', addNumbers(2,3));
console.log('test this should equal 22 =', addNumbers(87,-65));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) { 
  return num1 * num2 * num3

}

console.log('test should be 162 = ',multiplyThree(3,6,9));
console.log('test should be 322002 = ',multiplyThree(54,89,67));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  if (number<=0){
  return false;
  }
}


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(6));
console.log(isPositive(-5));
console.log(isPositive(1.2));
console.log(isPositive(0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.


const array = [2, 3, 6, 7, 0, 4];

function getLast(array) {
  return array.pop();

}

console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find(value, array1) {
  
  for (let x=0; x<array1.length; x++){
  
  for (let x in array1){
    if (value === array1[x]){
     return true; 
  } 
}
}
{
  return false;
}
}
console.log(find(8, [1,3,5,7]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
    
    if (letter === string[0]){
        return true;
    } else {
        return false;
    }
}

console.log(isFirstLetter("a","angie"));



// 9. Function to return the sum of all numbers in an array

//array =[2,3,4,5,8];

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i =0; i<array.length; i++) {
          sum += array[i];
  }
    
  // TODO: return the sum
  return sum;

}

console.log(sumAll(array));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function allPositive(array) {
  const inputArray = [];
  for (let i=0; i < array.length; i++){
    if (array[i]>0){
       inputArray.push(array[i]);
    }
   
  }{return inputArray}

  }
  
  allPositive(array);
  console.log(allPositive(array));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing

try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
