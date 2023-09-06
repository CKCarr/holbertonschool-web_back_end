# ES6 Basics

<details>
<summary>What ES6 is:</summary>
ES6 stands for ECMAScript 2015, which is the sixth edition of the ECMAScript standard. It's a scripting language specification that JavaScript is based on. ES6 introduced several new features and improvements to the JavaScript language, making it more powerful and expressive.

</details>
<details>
<summary>New features introduced in ES6:</summary>

javascript
```
// ES6 introduced numerous features, including:

// let and const for declaring variables.
let variable = 42;
const constant = 100;

// Arrow functions for more concise function syntax.
const arrowFunction = () => {
  // Function body
};

// Default function parameters for providing default values.
function greet(name = "World") {
  // Function body
}

// Rest and spread operators for working with function parameters and arrays/objects.
function sum(...numbers) {
  // Function body
}

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Template literals for more versatile string interpolation.
const name = "John";
const greeting = `Hello, ${name}!`;

// Enhanced object creation syntax with shorthand property notation and computed property names.
const x = 10;
const y = 20;
const obj = { x, [y]: 30 };

// Iterators and the for...of loop for iterating over collections.
const iterable = [1, 2, 3];
for (const item of iterable) {
  // Loop body
}

```

</details>

<details>
<summary>The difference between a constant and a variable:</summary>
A variable is a storage container for holding data that can change during the program's execution.
A constant (declared with const) is also a storage container, but its value cannot be reassigned once it's assigned. It remains constant throughout the program's execution.

```
// Example 1: Using a variable
let variableValue = 5; // Declare a variable 'variableValue' and assign the value 5 to it

console.log('Variable Example:');
console.log('Initial value:', variableValue);

// You can reassign the variable's value
variableValue = 10; // Variable value is changed

console.log('Updated value:', variableValue);

// Example 2: Using a constant
const constantValue = 7; // Declare a constant 'constantValue' and assign the value 7 to it

console.log('\nConstant Example:');
console.log('Initial value:', constantValue);

// Attempting to reassign a constant will result in an error
// constantValue = 14; // Uncommenting this line will result in a TypeError

console.log('Constant value remains:', constantValue);

```

</details>

<details>
<summary>Block-scoped variables:</summary>
ES6 introduced let and const for declaring block-scoped variables. Block-scoped variables are only accessible within the block of code where they are defined, such as within a function or a loop.

```
// Example 1: Block scope within a function
function blockScopedExample() {
  if (true) {
    let blockVar = 'I am block-scoped';
    var functionVar = 'I am function-scoped';
  }

  // 'blockVar' is only accessible within the if block
  console.log(blockVar); // ReferenceError: blockVar is not defined

  // 'functionVar' is accessible within the entire function
  console.log(functionVar); // 'I am function-scoped'
}

blockScopedExample();

// Example 2: Block scope within a loop
function loopScopedExample() {
  for (let i = 0; i < 3; i++) {
    let loopVar = `Loop iteration ${i}`;
    console.log(loopVar); // 'Loop iteration 0', 'Loop iteration 1', 'Loop iteration 2'
  }

  // 'loopVar' is not accessible here, outside the loop
  console.log(loopVar); // ReferenceError: loopVar is not defined
}

loopScopedExample();

```

</details>

<details>
<summary>Arrow functions and function parameters default to them:</summary>
Arrow functions are a more concise way to write functions in ES6. They have a shorter syntax and automatically capture the surrounding this value. You can also provide default values for function parameters, ensuring that the function works even if certain arguments are not provided.

```
// Traditional function expression
function multiply(x, y) {
  return x * y;
}

// Arrow function with explicit return
const divide = (x, y) => {
  return x / y;
};

// Arrow function with implicit return
const subtract = (x, y) => x - y;

// Arrow function with no parameters
const greet = () => {
  console.log('Hello, world!');
};
```

</details>

<details>
<summary>Rest and spread function parameters:</summary>
Rest parameters (...) allow you to collect multiple function arguments into a single array parameter.
Spread operator (...) allows you to spread elements of an array or object into another array or object.

###### Rest Parameters
```
// Example: Using rest parameters to collect function arguments into an array
function sum(...numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log('Total sum:', total); // Output: Total sum: 15
```
###### Spread Operator
```
// Example: Using spread to combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log('Combined array:', combinedArray); // Output: Combined array: [1, 2, 3, 4, 5, 6]

```

</details>

<details>
<summary>String templating in ES6:</summary>
String templating, also known as template literals, is a feature that allows you to embed expressions within strings using ${}. It makes string interpolation and multi-line strings easier and more readable.

```
// Template literals for more versatile string interpolation.
const name = "John";
const greeting = `Hello, ${name}!`;
```

</details>

<details>
<summary>Object creation and their properties in ES6:</summary>
ES6 introduced shorthand property notation, computed property names, and object destructuring, making it more convenient to create and manipulate objects.

```
// Enhanced object creation syntax with shorthand property notation and computed property names.
const x = 10;
const y = 20;
const obj = { x, [y]: 30 };
```

</details>

<details>
<summary>Iterators and for-of loops:</summary>
Iterators are objects that provide a way to loop through collections like arrays, strings, and maps in a consistent manner.
The for...of loop is used to iterate over the values of iterable objects using their iterators.

```
// Iterators and the for...of loop for iterating over collections.
const iterable = [1, 2, 3];
for (const item of iterable) {
  // Loop body
}
```

</details>
