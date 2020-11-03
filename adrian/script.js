//1
const person = {
  name: "a",
  lastName: "b",
  age: 1,
};

// for (const key in person) {
//   console.log(`The key ${key} has a value of ${person[key]}`);
// }

//2. Get Values
function getObjectValues(object) {
  return Object.values(object);
}

//3. Add A Method

let person1 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  printValues: function () {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`
    );
  },
};

// person1.printValues();

//BONUS QUESTIONS
//1
function objectToArray(object) {
  return Object.entries(object);
}

//2
function getObjectValues(object) {
  return Object.keys(object);
}

//3. Merge.
let first = { firstName: "John" };
let last = { lastName: "Smith" };

function merge(obj1, obj2) {
  //   let mergedObject = { ...obj1, ...obj2 };
  let mergedObject = Object.assign({}, obj1, obj2);
  return mergedObject;
}
// console.log(merge(first, last));
/*
With Object.assign(target, source) properties in the target object are 
overwritten by properties in the sources if they 
have the same key. Later sources' properties
 overwrite earlier ones.

 Similarly with let mergedObject = { ...obj1, ...obj2 } 
 If both objects have a property with the same name, 
 then the second object property overwrites the first.

 To not change any of the two original objects we can use 
 the spread operator ==> let mergedObject = { ...obj1, ...obj2 } or 
 we can create a new Object with Object.assign ==> let mergedObject = Object.assign({}, obj1, obj2);
 */

//4. Switch Keys and Values.
function switchKeyForValue(object) {
  let newObject = {};
  for (const key in object) {
    newObject[object[key]] = key;
  }
  //or
  /* let entries = Object.entries(object);
  entries.map((entry) => {
    newObject[entry[1]] = entry[0];
  });
 */
  return newObject;
}

// console.log(
//   switchKeyForValue({
//     name: "John",
//     job: "teacher",
//   })
// );

//5.  Return Keys and Values.
function returnKeysAndValues(object) {
  return [Object.keys(object), Object.values(object)];
}

console.log(returnKeysAndValues({ a: 1, b: 2, c: 3 }));
