// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const Person = {
  name: 'Julie',
  age: 10,
  occupation: 'Student'
}
console.log("Person => ",Person )
// 2. Get Values. Create a function that returns an array of all values of an object's properties.
//     Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
//     Expected output:
// ["tea", "coffee", "milk"] 

const Person2 = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
    getObjectValues: function () {
      return `${this.choice1}, ${this.choice2}, ${this.choice3}`;
    },
  };
  console.log("Person2 ==> ", Person2.getObjectValues());

//3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
//     Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
const Person3 = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  getObjectValues3: function () {
    return `${this.firstName}, ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;
  },
};
console.log("Person3 ==> ", Person3.getObjectValues3());

//1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
//     Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
//     Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
//     Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
const user = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
const objectToArray = Object.keys(user);
console.log("Ex. 1 => ", objectToArray)//
console.log("Ex. 1 (entries)=> ", Object.entries(user))

//2. List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
//     Expected output:
// ["name", "class", "course"]
const student = {
  name: 'Mike',
  class: "4A",
  course: 'English',
};
const objectToArray2 = Object.keys(student);
console.log("Ex,2  => ", objectToArray2)//

//3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
//     Expected output:
// {firstName: "John", lastName: "Smith"}
function listed(a,b){
let first = {
  first: "John",
}
let last = {
  last: 3
}
let userInfo = { ...first, ...last };
console.log("userInfo ==> ", userInfo
);
}
listed();
  
  //Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
//While using "..." values are still having the original property value. i.e. Strings are still being strings and numbers are still being numbers. This said, I'm not expecting to change its value. why not? Because they're having different keys. 

//4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
//     Expected Output:
// {"John": name, "teacher": job} 
const person = {
  name: 'John',
  job: 'teacher',
}
const newData = Object.keys(person).reduce(function(obj, key) {
  obj[person[key]] = key;
  return obj;
}, {});
console.log(newData);

//5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
//no idea how to do it :s 