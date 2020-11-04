//1 **1. Object Person.**
/*Create an object named person. Loop through the object and print both the property and value of the object. */

const person = {
    first_name: "sezai",
    last_name: "kes",
    age: 36,
}
console.log("person ==> ", person);
//person ==>  { first_name: 'sezai', last_name: 'kes', age: 36 }

//2. /*2. Get Values. Create a function that returns an array of all values of an object's properties.

const getObjectValues={
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  }

  const objectToArray = Object.values(getObjectValues);

  console.log("getObjectValues ==>", objectToArray);

  //getObjectValues ==> [ 'tea', 'coffee', 'milk' ]

  //3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

  let person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
}

console.log("person 2 ==> ",`${person2.firstName} ${person2.lastName} is a ${person2.age} year old ${person2.job} from ${person2.city}` );

//BONUS
//1. Convert keys and values into an array. 
//Create a function that converts an object into an array of keys and values.
let objectToArray1={
  A: 1,
  B: 2,
  C: 3
}
const objectToArray2 = Object.entries(objectToArray1);
console.log("objectToArray2 ==> ", objectToArray2);
//objectToArray2 ==>  [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

let objectToArray3={
  cats: 1,
  dogs: 2, 
  turtles: 4
}
const objectToArray4= Object.entries(objectToArray3);
console.log("objectToArray4 ==> ", objectToArray4);
//objectToArray4 ==>  [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

//2. List Properties. Create a function that returns an 
//array of properties of a javascript object.

let student = {
  name: "Mike", 
  class: "4A", 
  course: "English"
}

const listProperties = Object.keys(student);
console.log("listProperties ==> ", listProperties);
//listProperties ==>  [ 'name', 'class', 'course' ]

// 3. Merge. Create a function that takes two objects as its 
//parameters and merges them together into a new object.

let first = {firstName: "John"}
let last = {lastName: "Smith"}

const newObject1 = Object.assign(first, last);
console.log("newObject1 ==> ", newObject1);
//newObject1 ==>  { firstName: 'John', lastName: 'Smith' }

//Extra Credit: What happens if you merge two objects with 
//the same property values? In merging these two objects, 
//do you expect to change either or both of the original 
// objects? Why or why not? Comment your answers.

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object. 
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */

 //MDN says: Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.


 //4. Switch Keys and Values. Create a function to get a copy of an object. 
 //The copy must switch the keys and values.
 let person1 = {
  name: "John", 
  job: "teacher"
}
for (const [key, value] of Object.entries(person1)) {
  console.log("switching properties ==> ", `${value}:${key}`);
}
// please cia help, i switched the two things, but its not a object
//John:name
//teacher:job

//5. Return Keys and Values. Write a program that takes an object 
//and returns an array which contains two arrays: 
//one for the keys of the object and the other for the values of the object.





