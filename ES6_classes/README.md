# ES6_classes: 
## Learning Objectives

<details open>
    <summary><h5>How to define a Class<h5></summary>
    <p>In ES6 (ECMAScript 2015), you can define a class using the class keyword. A class is a blueprint for creating objects with shared properties and methods.</p>

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
</details>
<details open>
    <summary><h5>How to add methods to a class</h5></summary>
    <p>You can add methods to a class by defining functions within the class. These methods can be called on instances of the class.</p>

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

```
</details>
<details open>
    <summary><h5>Why and how to add a static method to a class</h5></summary>
        <>Static methods belong to the class itself, not its instances. They are useful for utility functions that don't depend on instance-specific data.<br>
        To add a static method, use the static keyword.</p>

```
class MathUtils {
  static square(x) {
    return x * x;
  }
}

// Call a static method
const result = MathUtils.square(5);

```
</details>
<details open>
    <summary><h5>How to extend a class from another</h5></summary>
    <p>Inheritance allows you to create a new class (subclass) based on an existing class (superclass).<br> You can extend a class using the extends keyword.</p>

```
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the constructor of the superclass
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}
```
</details>
<details open>
    <summary><h5>Metaprogramming and symbols</h5></summary>
    <p>Metaprogramming refers to writing code that can inspect, modify, or generate other code during runtime.<br>Symbols are unique and immutable values often used as property keys in objects. They are useful for creating and working with metaprogramming features.</p>

```
const mySymbol = Symbol('mySymbol');

const obj = {
  [mySymbol]: 'This is a symbol property'
};

console.log(obj[mySymbol]); // Access symbol property

```
</details>
