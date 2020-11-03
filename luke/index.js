// ! 1. Object Person.**
// Create an object named person.Loop through the object and print both the property and value of the object.
const person = {
  name: "Luke",
  age: 26,
};

const personArr = Object.entries(person);

for (let i = 0; i < personArr.length; i++) {
  console.log(personArr[i]);
}

// ! 2. Get Values.**
// Create a function that returns an array of all ** values ** of an object's properties.
const teaTimeBeverages = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};

function getObjectValue(object) {
  const objToArr = Object.values(object);
  return objToArr;
}

console.log(getObjectValue(teaTimeBeverages));

// ! 3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string.

let personA = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  printPersonA: function () {
    return `${this["firstName"]} ${this["lastName"]} is a ${this["age"]} year old ${this["job"]} in ${this["city"]}.`;
  },
};

console.log(personA.printPersonA());

// ## Bonus Questions

// ! 1. Convert keys and values into an array.**
// Create a function that converts an object into an array of keys and values.
function objectToArray(object) {
  objectToArr = Object.entries(object);
  console.log(objectToArr);
}

objectToArray({
  A: 1,
  B: 2,
  C: 3,
});

objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4,
});

// ! 2. List Properties.**
// Create a function that returns an array of ** properties ** of a javascript object.

let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

function getObjectKeys(object) {
  const objectToArr = Object.keys(object);
  return objectToArr;
}

console.log(getObjectKeys(student));

// ! 3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object.

let first = { firstName: "John" };
let last = { lastName: "Smith" };

const combineObjects = (object1, object2) => {
  const newObject = Object.assign(object1, object2);
  return newObject;
};

console.log(combineObjects(first, last));
// ** Extra Credit:** What happens if you merge two objects with the same property values ? In merging these two objects, do you expect to change either or both of the original objects ? Why or why not ? Comment your answers
// if you use assign as long as the keys are different nothing will change but..
//! if the keys are the same it will take the last key added because it overrides, keys cannot be the same name
//* it would be the same if i targeted the objects key directly, like newObject['firstName'] = 'luke'

// ! 4. Switch Keys and Values.**
// Create a function to get a copy of an object.The copy must switch the keys and values.

let person3 = {
  name: "John",
  job: "teacher",
};

function copyAndSwitch(object) {
  const newObject = {};
  const objArr = Object.entries(object);
  for (let i = 0; i < objArr.length; i++) {
    newObject[objArr[i][1]] = objArr[i][0];
  }
  return newObject;
}

console.log(copyAndSwitch(person3));

// ! 5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

const randomObject = { a: 1, b: 2, c: 3 };

const showKeysAndValues = (object) => {
  const objKeys = Object.keys(object);
  const objValues = Object.values(object);
  return [objKeys, objValues];
};

console.log(showKeysAndValues(randomObject));
