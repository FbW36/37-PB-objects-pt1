// # 37-PB-objects-pt1

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
  name: "max",
  age: 33,
  hight: 166,
};
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}
// **2. Get Values.**
// Create a function that returns an array of all **values** of an object's properties.
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
const drink = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};

// const getObjectValues = () => {
//   return Object.values(drink);
// };
// getObjectValues();

const getObjectValues = () => Object.values(drink);
console.log(getObjectValues());

// * Expected output:
// ```javascript
// ["tea", "coffee", "milk"]
// ```

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string.
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith",
//   job: "driver",
//   age: 20,
//   city: Paris
// }
// ```

let person2 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  sentence: function () {
    return `${person2.firstName} ${person2.lastName} is a ${person2.age} years old ${person2.job} in ${person2.city}`;
  },
};

console.log(person2.sentence());
// * Example of Expected Output
// "Michael Smith is a 20 year old driver in Paris".

// ## Bonus Questions

// **1. Convert keys and values into an array.**
// Create a function that converts an object into an array of keys and values.
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// ```
let object = {
  A: 1,
  B: 2,
  C: 3,
};

const objectToArray = () => {
  return Object.entries(object);
};
console.log(objectToArray(object));
console.log({
  cats: 1,
  dogs: 2,
  turtles: 4,
});

// * Expected output:
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// ```
// * Expected output:
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]]
// ```

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object.
// * Example
// ```javascript
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// ```
// * Expected output:
// ```javascript
// ["name", "class", "course"]
// ```
let student = {
  name: "Mike",
  class: "4A",
  language: "English",
};

const prop = () => Object.keys(student);
console.log(prop());
// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object.
// * Example
// ```javascript
let first = { firstName: "John" };
let last = { lastName: "Smith" };

const merge = (object, object2) => Object.assign(object, object2);
console.log(merge(first, last));
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 2, c: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, コピー先オブジェクト自体が変化する
// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example:
// ```javascript
// let person = {
//   name: "John",
//   job: "teacher"
// }
// ```

let name = {
  name: "John",
  job: "teacher",
};

const switchObj = (object) => {
  let newObj = {};
  for (const key in object) {
    newObj[object[key]] = key;
    console.log("1", [object[key]]);
    console.log("2", [key]);
    console.log("3", key);
  }
  return newObj;
};

console.log(switchObj(name));
// * Expected Output:
// ```javascript
// {"John": name, "teacher": job}
// ```

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```

const object2 = { a: 1, b: 2, c: 3 };

const array = (obj) => {
  let newArr = [];
  newArr.push(Object.keys(obj));
  newArr.push(Object.values(obj));
  return newArr;
};

console.log(array(object2));
// **Hint:**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
