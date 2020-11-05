let log = console.log;
// Create an object named person. Loop through the object and print both the property and value of the object
const person = {
  name: "Marie",
  lastName: "Curie",
  occupation: "scientist",
};
function getValsAndProps(obj) {
  const propsAndVals = {};
  const objToArr = Object.entries(obj);
  for (i = 0; i < objToArr.length; i++) {
    propsAndVals[objToArr[i][0]] = objToArr[i][1];
  }
  return propsAndVals;
}
log('print value and properties -->', getValsAndProps(person));

// Create a function that returns an array of all values of an object's properties
const getValues = (obj) => {
  return Object.values(obj);
};
log("object values -->", getValues(person));

// Create an object and add a method to that object which prints the values of the objects in a string
let person2 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris,",
  printValues: function () {
    log(
      `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city} `
    );
  },
};
person2.printValues();

// Create a function that converts an object into an array of keys and values
function objectToArr(obj) {
  return Object.entries(obj);
}
const object = {
  A: 1,
  B: 2,
  C: 3,
};

log("object -->", objectToArr(object));

const pets = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
log("pets-->", objectToArr(pets));

// Create a function that returns an array of properties of a javascript object
const getProps = (obj) => Object.keys(obj);
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
log('properties of "student"-->', getProps(student));

// Create a function that takes two objects as its parameters and merges them together into a new object
const newPerson = (obj1, obj2) => Object.assign(obj1, obj2);
let first = { firstName: "John" };
let last = { lastName: "Smith" };
log(newPerson(first, last));
//  What happens if you merge two objects with the same property values?
let item1 = { property: "Value" };
let item2 = { property: "Value555" };
log(newPerson(item1, item2)); // { property: 'Value555' } --> second property overwrote the first property, because the program read it as the last one

// Create a function to get a copy of an object. The copy must switch the keys and values
let person3 = {
  name: "John",
  job: "teacher",
};
function valueToProperty(obj) {
  const objToArr = Object.entries(obj);
  const objCopy = {};
  for (i = 0; i < objToArr.length; i++) {
    objCopy[objToArr[i][1]] = objToArr[i][0];
  }
  return objCopy;
}
log(valueToProperty(person3));

// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object
const objX = { a: 1, b: 2, c: 3 }

function splitObj(obj) {
    const valObj = Object.values(obj)
const propObj = Object.keys(obj)
const objY = [propObj,valObj]
return objY;
}
log('objY -->', splitObj(objX))