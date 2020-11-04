// objects

/*
1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.*/

const person = {
  name: "lisa",
  age: 30,
};

console.log("person all , name, age =>", person, person.name, person.age);

/* 2. Get Values. Create a function that returns an array of all values of an object's properties.

Examples:
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
Expected output:
["tea", "coffee", "milk"] */

const fruits = {
  fruit1: "banana",
  fruit2: "pineapple",
  fruit3: "cherry",
  fruit4: "coconut",
};

const fruitValue = Object.values(fruits);

console.log(fruitValue); // [ 'banana', 'pineapple', 'cherry', 'coconut' ]

/* 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

Example
let person = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: Paris
}
Example of Expected Output "Michael Smith is a 20 year old driver in Paris".*/

const user = {
  name: "queen23",
  age: 22,
  email: "queeni@gmail.com",
  city: "berlin",
  getUserData: function () {
    return `${this.name} is ${this.age} years old an lives in ${this.city}. The Mailaddress is ${this.email}.`;
  },
};

console.log("get user Data ", user.getUserData());
// queen23 is 22 years old an lives in berlin. The Mailaddress is queeni@gmail.com.

// ------------------------------------------------------------
// bonus

// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
// Examples:
/*objectToArray({
    A: 1,
    B: 2,
    C: 3
})
Expected output:
[["A", 1], ["B", 2], ["C", 3]]*/

/* objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4
})
Expected output:
[["cats", 1], ["dogs", 2], ["turtles", 4]]*/

const letterValue = {
  A: 1,
  B: 2,
  C: 3,
};

let arrayletterValue = Object.entries(letterValue);
console.log("ObjectToArray 1 ==>", arrayletterValue); //  [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

const animalObject = {
  cat: "bitch",
  dog: "loyal",
  hamster: "boring",
};

let animalArray = Object.entries(animalObject);
console.log("ObjectToArray2 ==>", animalArray); // [ [ 'cat', 'bitch' ], [ 'dog', 'loyal' ], [ 'hamster', 'boring' ] ]

//2.  List Properties. Create a function that returns an array of properties of a javascript object.

/*Example
let student = {
    name: "Mike",
    class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"]*/

let food = {
  meat: false,
  veggi: true,
  sweets: "sometimes",
  cake: "yes,yes,yes",
};
let foodKeys = Object.keys(food);
console.log("food==>", foodKeys); // 'meat', 'veggi', 'sweets', 'cake' ]

// 3. Merge.Create a function that takes two objects as its parameters and merges them together into a new object.

//     Example
// let first = { firstName: "John" }
// let last = { lastName: "Smith" }
// Expected output:
// { firstName: "John", lastName: "Smith" }

let first = { firstName: "John" };
let last = { lastName: "Smith" };

function mergeObjects(object1, object2) {
  let fullName = Object.assign(object1, object2);
  return fullName;
}

console.log("Merge", mergeObjects(first, last)); // { firstName: 'John', lastName: 'Smith' }

// Extra Credit: 1. What happens if you merge two objects with the same property values ? 2. In merging these two objects, do you expect to change either or both of the original objects ? 3.Why or why not ? Comment your answers.

// 1.it merges them together to the latest (previous) value.
// 2. no , it creates a new object, not changing the original-data, in general you should just in rare cases change the original data.

/*4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

Example:
let person = {
  name: "John",
  job: "teacher"
}
Expected Output:
{"John": name, "teacher": job}*/

let person2 = {
  name: "John",
  job: "teacher",
};

function reverseObject(object) {
  let arrayObject = Object.entries(object); // [ [ 'name', 'John' ], [ 'job', 'teacher' ] ]
  for (i = 0; i < arrayObject.length; i++) {
    arrayObject[i].reverse();
  }
  return arrayObject;
}

console.log("reverse", reverseObject(person2)); // [ [ 'name', 'John' ], [ 'job', 'teacher' ] ]

/*5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

Examples:
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]]*/

const blabla = {
  a: 3,
  b: 3,
  c: 1,
  d: 2,
};

function KeysAndValues(object) {
  let all = [Object.keys(object)].concat([Object.values(object)]);
  return all;
}

console.log(KeysAndValues(blabla)); // [ [ 'a', 'b', 'c', 'd' ], [ 3, 3, 1, 2 ] ]

//Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
