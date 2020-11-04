//1
const person = {
  name: "Arjun",
  age: 5000,
  job: "Warrior",
};

const objectToArray1 = Object.entries(person);
console.log(objectToArray1);

//2 xpected output:["tea", "coffee", "milk"]

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};

const objectToArray2 = Object.values(getObjectValues);
console.log(objectToArray2);

// List Properties. Create a function that returns an array of
//properties of a javascript object.
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
const objectToArray3 = Object.keys(student);
console.log(objectToArray3);

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

let first = { firstName: "John" };
let last = { lastName: "Smith" };

function merge(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
console.log(merge(first, last));

// 4
let personN = {
  name: "John",
  job: "teacher",
};

function revs(sub1) {
  let objTOarr = Object.entries(personN);
  console.log(objTOarr);
  let emptyObj = {};
  for (i = 0; i < objTOarr.length; i++) {
    emptyObj[objTOarr[i][1]] = objTOarr[i][0];
  }

  return emptyObj;
}

console.log(revs(personN)); // { John: 'name', teacher: 'job' }

//
