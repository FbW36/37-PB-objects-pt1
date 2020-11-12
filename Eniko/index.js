// Please print each of your answers to the console.

// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
    firstName: "Person",
    otherName: "Persenson",
    pastaOfChoice: "fettuccine",
};
const items = Object.entries(person);
console.log("exercise 1", items);
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    //console.log(items[i][0], items[i][1]);
  }

// 2. Get Values. Create a function that returns an array of all values of an object's properties.

// Examples:
const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};
const arrayOfValues = obj => Object.values(obj);
console.log("exercise 2", arrayOfValues(getObjectValues));



// Expected output:
// ["tea", "coffee", "milk"] 
// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

// Example
 const person2 = {
   firstName: "Michael",
   lastName: "Smith", 
   job: "driver",
   age: 20, 
   city: "Paris",
    makeString: function() { 
       return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`
      }
 };

console.log(person2.makeString());
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
// Bonus Questions
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
const example2 = { cats: 1, dogs: 2, turtles: 4};
function objectToArray (obj) {
    return Object.entries(obj);
}
console.log("bonus 1", objectToArray(example2));
// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// 2. List Properties. Create a function that returns an array of properties of a javascript object.

// Example
let student = {
name: "Mike", 
class: "4A" ,
course: "English",
};

function makeArrayOfProperty (obj) {
    return Object.keys(obj);
};

console.log("bonus 2", makeArrayOfProperty(student));
// Expected output:
// ["name", "class", "course"]
// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
let first = {firstName: "John"}
let last = {lastName: "Smith"}

function megreObj (a, b) {
    return Object.assign(a, b);
}
console.log("bonus 3", megreObj(first, last));
// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
let person3 = {
   name: "John", 
   job: "teacher"
};

function switcheroo (obj) {
    const switchedObj = {};
    for (const i in obj) {
       switchedObj[obj[i]] = i;
    }
    return switchedObj;
}
console.log("bonus 4", switcheroo(person3));
// Expected Output:
// {"John": name, "teacher": job} 
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
function twoArraysInOne (obj) {
    const endResult = [];
    endResult.push(Object.keys(obj));
    endResult.push(Object.values(obj));
    return endResult;
};
console.log("bonus 5", twoArraysInOne({ a: 1, b: 2, c: 3 }));
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.