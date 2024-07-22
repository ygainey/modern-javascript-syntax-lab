//Review: Array.prototype.map()

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']


// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((el) => {
    return el * 2
})

console.log(nums2)


//Review: Array destructuring

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [first, second] = pizzaToppings

console.log(first)
console.log(second)


//Review: Object destructuring

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
// Your code here

  const {make, model} = car
  
console.log(make)
console.log(model)

//Review: Applying the spread operator on arrays

const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]


//The spread operator can also merge multiple arrays into one:
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings, ...fruitsAndVegetables]

console.log(controversialPizzaToppings)


//Review: Applying the spread operator on objects

const originalObject = {
    foo: 'Hello',
    bar: 100,
};
  
const clonedObject = { ...originalObject };
console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }


const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
const clonedObject = originalObject;
clonedObject.foo = 'Goodbye';
  
console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

const originalObject = {
    foo: 'Hello',
    bar: 100,
};
  
// Copy the properties of originalObject:
const clonedObject = { ...originalObject };
  
// Update the properties of clonedObject:
clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;
  
console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

//Exercise 5: Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
};
  
// Change the `model` property of `myCar` to 'q7'. Log both objects.
  
// Your code here
const myCar = {...car}

myCar.model = 'q7'

console.log(car)
console.log(myCar)

//Review: Dynamic keys in objects
const fruitInventory = {
    apples: 2,
    oranges: 4,
};
  
const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];
  
console.log(selectedFruitCount); // 2

const fruitInventory = {
    apples: 2,
    oranges: 4,
};
  
const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];
  
console.log(selectedFruitCount); // 2


const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
};

console.log(fruitInventory); // { bananas: 5 }

  
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'username'
const userProfile = {
    [propertyName] : ''
}

userProfile[propertyName] = 'Ygainey'

console.log(userProfile)

//Review: import and export

import { myNumber, myString } from './myData.js';
import superCoolFunction from './superCoolFunction.js';
import * as MyData from './myData.js';
console.log(MyData.myNumber);
console.log(MyData.myString);

//Review: Default parameters
function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
addThreeNumbers(2);


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function noAdj(noun = 'cat', adjective = 'white'){
    return console.log(`The ${noun} is ${adjective}`)
}

noAdj('dog', 'blue')

//Review: The ternary operator

const age = 22;
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access); // 'Yes'


const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'


// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
pizza = pizza === 'tasty'? 'yum' : 'yuck';

console.log(pizza)

//Review: Boolean gates
const myVar = 'hello'

const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
console.log('result4:', result4);


// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = 'es';  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en'

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = 'dark'; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'

// Log the result
console.log('User theme setting:', USER_THEME);


//Review: Optional chaining
const adventurer = {
    name: 'Alice',
};
  
console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')
  
let dog = adventurer.dog?.name;
  
console.log(dog); // undefined
  
//Exercise 11: Optional chaining
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
};
  
let cat = adventurer.cat?.age // Your code here
  
console.log(cat);
  