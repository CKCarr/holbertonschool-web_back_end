# ES6_promises Learning Objectives:
<style>
summary  b {
    font-size: 18px
  }
</style>
<details open>
<summary>
  <b>Promises (how, why, and what)</b>
</summary>
<main>
<b>Promises: How</b>
<br>
A Promise in JavaScript is an object that represents a value that may not be available yet<br> but will be resolved or rejected at some point in the future.<br>It's like a placeholder for the result of an asynchronous operation.
<br>

Example to create a Promise:
```
const myPromise = new Promise((resolve, reject) => {
  // Do something asynchronous here
  if (/* some condition */) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});
```
<br>
<b>Promises: Why</b>
<br>
Promises are used to handle asynchronous operations in JavaScript,<br> like reading a file, making an API call, etc.<br> They make it easier to manage async operations compared to callbacks.
<br>
<br>
<b>Promises: What</b>
<br>
A Promise has three states:
<ol>
<li>Pending: Initial state, neither fulfilled nor rejected.</li>
<li>Fulfilled: The operation completed successfully.</li>
<li>Rejected: The operation failed.</li>
</ol>
</main>
</details>

<details open>
<summary>
  <b>How to use the then, resolve, catch methods</b>
</summary>
<main>

<b>then method</b>
The .then() method is used to specify what to do when the Promise is resolved.
```
myPromise.then((value) => {
  console.log(value); // "Success!"
});
```
<b>resolve method</b>
The resolve method is not a method on the Promise object but a parameter in the executor function.<br> You call resolve to indicate that the Promise is successfully completed.
```
resolve("Success!");
```
<b>catch methods</b>
The .catch() method is used to handle any errors or rejections.
```
myPromise.catch((error) => {
  console.log(error); // "Failure!"
});
```
</main>
</details>

 <details open>
 <summary>
  <b>How to use every method of the Promise object</b>

 </summary>
<main>
<ol>
  <li><b>Promise.all:</b>
  <br>
   Waits for all promises to be resolved, or for any to be rejected.</li>

```
const promise1 = Promise.resolve("Hello");
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "World"));

Promise.all([promise1, promise2]).then((values) => {
  console.log(values); // ["Hello", "World"]
}).catch((error) => {
  console.log(error);
});
```
  <li><b>Promise.race:</b>
  <br>
  Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects.</li>

```
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "One"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Two"));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "One"
});
```
  <li><b>Promise.resolve:</b>
  <br>
  Returns a Promise object that is resolved with a given value.</li>

```
const promise = Promise.resolve("Success");

promise.then((value) => {
  console.log(value); // "Success"
});
```
  <li><b>Promise.reject:</b>
  <br>
  Returns a Promise object that is rejected with a given reason.</li>

```
const promise = Promise.reject("Failure");

promise.catch((reason) => {
  console.log(reason); // "Failure"
});
```
</ol>
</main>
 </details>

 <details open>
 <summary>
  <b>Throw / Try</b>
 </summary>
 <main>
 In the context of Promises, you can use throw inside a .then() to move directly to the nearest .catch()

 ```
 myPromise.then((value) => {
  throw new Error("Something went wrong!");
}).catch((error) => {
  console.log(error); // "Something went wrong!"
});
 ```
 </main>
 </details>
 
  <details open>
 <summary>
  <b>The await operator</b>
 </summary>
  <main>The await operator is used to pause async function execution until a Promise is fulfilled or rejected.
  
```
async function myAsyncFunction() {
  const value = await myPromise;
  console.log(value); // "Success!"
}
```
  </main>
 </details>

  <details open>
 <summary>
  <b>How to use an async function</b>
 </summary>
  <main>An async function is a function declared with the async keyword. It makes it easier to work with asynchronous code.

```
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```
</main>
 </details>
