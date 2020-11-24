// Please print each of your answers to the console.
// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
  firstName: "Bob",
  lastName: "Mawaney",
  age: 64,
  nationality: "Kiwi",
};
let personArray = Object.entries(person);
for (let i = 0; i < personArray.length; i++) {
  console.log(personArray[i]);
}

// 2. Get Values. Create a function that returns an array of all values of an object's properties.
const object2 = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};

console.log(Object.values(object2));

// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
const object3 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  stringObject3: function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`;
  },
};
console.log(object3.stringObject3());

// Bonus Questions
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
function objectToArray(object4) {
  return Object.entries(object4);
}
console.log(objectToArray({ A: 1, B: 2, C: 3 }));
console.log(objectToArray({ cats: 1, dogs: 2, turtles: 4 }));

// 2. List Properties. Create a function that returns an array of properties of a javascript object.
function studentArray(student) {
  return Object.keys(student);
}
console.log(
  studentArray({
    name: "Mike",
    class: "4A",
    course: "English",
  })
);

// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
function mergeObjects(object1, object2) {
  let object3 = Object.assign(object1, object2);
  return object3;
}
console.log(mergeObjects({ firstName: "John" }, { lastName: "Smith" }));

// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
// ==>Merge two objects with the same property values, the new object won't add two objects together, just one original object.

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

function valueKeySwap1(object4) {
  const objectArr1 = Object.entries(object4);
  const objectSwap1 = [];
  for (i = 0; i < objectArr1.length; i++) {
    objectSwap1.push(objectArr1[i].reverse());
  }
  return Object.fromEntries(objectSwap1);
}
console.log(valueKeySwap1({ name: "Max", job: "dentist", city: "Berlin" }));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
function returnKeysValues(object5) {
  let total = [];
  let objectKeys = Object.keys(object5);
  let objectValues = Object.values(object5);
  return (total = [objectKeys, objectValues]);
}
console.log(returnKeysValues({ a: 1, b: 2, c: 3 }));
console.log(returnKeysValues({ key: true }));
