// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
  name: "Santo",
  family_name: "Borrego",
  email: "pacasa@tomasa.com",
  adress: {
    street: "Kölner str.",
    number: "66",
    city: "Bonn",
  },
};

console.log("object :>> ", Object.keys(person)); //[ 'name', 'family_name', 'email', 'adress' ]

console.log("object :>> ", Object.values(person)); //[
// 'Santo',
// 'Borrego',
// 'pacasa@tomasa.com',
// { street: 'Kölner str.', number: '66', city: 'Bonn' }

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
// * Expected output:
// ```javascript
// ["tea", "coffee", "milk"]
// ```

const objectToArray = Object.values(person);

console.log("objectToArray :>> ", objectToArray); //[
//     'Santo',
//     'Borrego',
//     'pacasa@tomasa.com',
//     { street: 'Kölner str.', number: '66', city: 'Bonn' }
//   ]

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
// * Example of Expected Output
// "Michael Smith is a 20 year old driver in Paris".

const user = {
  name: "Aza",
  email: "abcd@gmail.com",
  tel: 123456789,
};

console.log(
  "Values for user :>> ",
  `${user.name} with mail ${user.email} and telephone ${user.tel}`
);

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

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

function obToArray(object) {
  const obToArray = Object.entries(object);
  return obToArray;
}

console.log("obToArray :>> ", obToArray(myCar));

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
function obToArray2(object) {
  const obToArray = Object.values(object);
  return obToArray;
}

console.log("obToArray2 :>> ", obToArray2(myCar));
// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object.
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example:
// ```javascript
// let person = {
//   name: "John",
//   job: "teacher"
// }
// ```
// * Expected Output:
// ```javascript
// {"John": name, "teacher": job}
// ```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log("returnedTarget :>> ", returnedTarget);
// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```

// **Hint:**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
