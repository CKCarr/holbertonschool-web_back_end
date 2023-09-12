# ES6_data_manipulation Learning Objectives:

<details open>
<summary>
<h5>
 How to use map, filter and reduce on arrays
 </h5>
</summary>
<main>
<b>How to use Map: on an array.</b>
<br>
The 'map' function is used to transform each element in an array based on a given function and return a new array.
<br>
<br>
<b>Why Use the map function?</b>
<li>
When you want to apply the same operation to each element in an array.
</li>
<li>
When you want to keep the original array unchanged.
</li>
<br>
<b>Best Practices</b>
<li>
Keep the function pure no side effects.</li>
<li>
Always return a value from the map function.</li>

```
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // output [2, 4, 6]
```
</main>

<main>
<b>How to use Filter: on an array</b><br>
The 'filter' function is used to create a new array with all  elemments that pass a certain condition.<br><br>
<b>Why use the filter function?</b>
<li>Create a subset of an array based on a specific condition.</li>
<br>
<b>Best practices</b>
<li>Keep the function pure.</li>
<li>Return Boolean value to indicate inclusion or exclusion.</li>

```
const numbers = [1, 2, 3,4 ];
const even = numbers.filter(num =? num % 2 === 0); // output [2, 4]
```
</main>
<main>
<b>How to use Reduce: on an array</b>
<br>
The 'reduce' function is used to apply a function against an accumulator and each element in the array, to reduce the array to a single value.
<br>
<br>
<b>Why use the reduce function?</b>
<br>
<li>
To teansform it into a single array. (e.g. sum, product)
</li>
<br>
<b>Best Practices:</b>
<li>Always provide an initial value for the accumulator.</li>

```
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0); // sum will be 6
```
</main>
</details>

<details open>
<summary>
 <h5>Typed arrays</h5>
</summary>
<main>
<b>What are Type arrays?</b><br>
Type Arrays are objects that provide a way to read raw binary data in memory buffers.
<br><br>
<b>Why use type arrays?</b>
<br>
<li>Enhanced performance optimization since </li>
<li>When dealing with binary data</li>
<br>
<b>Best Practices: </b>
<li>Use the appropriate typed array for your data, to save memory.</li>
<li>Be aware of endianness.</li>

```
const typedArray = new Int8Array([1, 2, 3, 4]);
```
</main>
</details>

 <details open>
 <summary>
 <b>
 The Set data structure</b>
 </summary>
 <p>A Set is a collection of values. A Set ensures all values are unique.<br>
 <b>Why use Set?</b>
 <li>To store non-repeating values.</li>
 <li>It's useful when you want to eliminate duplicates or quickly check for the existence of an element.</li>
 </p>

 ```
 const mySet = new Set([1, 2, 3, 4, 4]); // output: [1, 2, 3, 4]
 ```
 </details>

 <details open>
 <summary>
  <h5>Map data structures</h5>
 </summary>
 <p>Maps are key-value stores where keys can be of any type, including objects and functions.
 <br>
 <br>
 <b>Why Use map?</b>
 <li>When you need more features than a simple object (e.g., keys can be of any type).</li>
 <br>
 <b>Best Practices:</b>
 <li>Use it for more complex key-value storage</li>

 ```
const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
```
</p>
 </details>

  <details open>
 <summary>
  <h5>Weak link data structure</h5>
 </summary>
 <p>These are similar to Map and Set, but they don't prevent their elements from being garbage-collected.
 <br>
 <br>
<b>Why use it?</b>
<li>
    To avoid memory leaks.
</li>
<br>
<b>Best Practices:</b>
<br>
<li>
Use it when you want to associate data with an object without affecting its lifecycle.</li>

```
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'someValue');
```
Here, if obj is deleted, the weakMap entry will be garbage-collected.
</p>
 </details>
