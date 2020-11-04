//1
const person = {
    firstName: "Ines",
    lastName: "Faro",
}

console.log(person);

//2
function valuesArray (object){
    const valuesArray = Object.values(object);
    return valuesArray;
}

console.log(valuesArray(person));

//3
const pasta = {
    pasta: "penne",
    sauce: "tomato",
    vegetable: "artichoke and capers",
    cheese: "Parmigiano"
}
console.log(`Today we have ${pasta.pasta} with ${pasta.sauce} sauce, ${pasta.vegetable} and ${pasta.cheese} on top`);

// BONUS 1
const numbers = {
    A: 1,
    B: 2,
    C: 3,
}

function objectArray(object){
    const objectArray = Object.entries(object);
    return objectArray;
}

console.log(objectArray(numbers));

//BONUS 2
const student = {
    name: "Mike", 
    class: "4A",
    course: "English",
}

function objectProperties(object){
    const objectProperties = Object.keys(object);
    return objectProperties;
}

console.log(objectProperties(student));

//BONUS 3
let first = {firstName: "John"}
let last = {firstName: "John"}

function merge(object1, object2){
    const merged = Object.assign(object1, object2);
    return merged;
}

console.log(merge(first, last));
// It merges the last object in the code, changes both original objects. 

//BONUS 4 
let person2 = {
    name: "John", 
    job: "teacher"
}

function switchKeysValue(object){
   const test = Object.keys(object); 
   return test;
}

console.log(switchKeysValue(person2));

//BONUS 5
const numbers2 = {
     a: 1, 
     b: 2, 
     c: 3,
}

function keysValues (object){
    const keysValue = Object.keys(object);
    keysValue.push(Object.values(object))
    return keysValue;   
}

console.log(keysValues(numbers2));