// Create an object named person. Loop through the object and print both the property and value of the object. 

const person = {
    name: 'Sara',
    lastName: 'Smedlund',
    age: 30,
};

console.log("person >>", person); // person >> { name: 'Sara', lastName: 'Smedlund', age: 30 }


// 2) Create a function that returns an array of all **values** of an object's properties. 
//console.log("ObjArr >>", Object.values(person)); // [ 'Sara', 'Smedlund', 30 ] 

function objectToArr(){
    let objectToArr = Object.values(person);

    return objectToArr;
};

console.log("objectToArr >>", objectToArr()); // objectToArr >> [ 'Sara', 'Smedlund', 30 ]

// 3) Create an object and add a method to that object which prints the values of the objects in a string. 
const myPet = {
    animal: 'cat',
    sound: 'purr purr',

    printObject() {
        console.log(`Hi, I am a ${this.animal}, ${this.sound}!!`);
    }
};
myPet.printObject(); // Hi, I am a cat, purr purr!! 

// Create a function that converts an object into an array of keys and values. 

const drinks = {
    pepsi: 2,
    cola: 4,
    fanta: 1,
    sprit: 5,
};

const convertObj = () => Object.entries(drinks);
console.log("drinks >>", convertObj()); // [ [ 'pepsi', 2 ], [ 'cola', 4 ], [ 'fanta', 1 ], [ 'sprit', 5 ] ]


// Create a function that returns an array of **properties** of a javascript object. 
const user = {
    name: 'Emma',
    lastName: 'Sjösten',
    class: 'Fbw21',
}; 
const returnProp = () => Object.keys(user);
console.log("returnProp >>", returnProp()); // [ 'name', 'lastName', 'class' ]

// Create a function that takes two objects as its parameters and merges them together into a new object. 
const fruits = {
    sort: 'red dream',
    price: 2, 
};
const customer = {
    name: 'Bob',
    amout: 7, 
};

function createNewObject(obj1, obj2) {
    let mergeObj = {...obj1, ...obj2}; 

    return mergeObj;
};
console.log("createNewObject >>", createNewObject(customer, fruits)); // { name: 'Bob', amout: 7, sort: 'red dream', price: 2 } 

// What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
// >>> If both objects have a property with the same name, then the second object property overwrites the first. 

// Create a function to get a copy of an object. The copy must switch the keys and values.
const userData = {
    userName: 'Sara-Bexx',
    email: 'sara@bexx.com',
};

function swapKeyAndValue(object){
    let newObject = {};
    for(let key in object){
        newObject[object[key]] = key; 
        //console.log("key >>", object[key])
    }
    return newObject;
};
console.log("userData >>", swapKeyAndValue(userData)); //{ 'Sara-Bexx': 'userName', 'sara@bexx.com': 'email' }


// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
const animal = {
    animal: 'dog',
    name: 'sven',
}; 
function returnTwoArr(object) {
    let newArr = [];
    let objectKeys = Object.keys(object);
    let objectValues = Object.values(object);

    return newArr = [objectKeys, objectValues];
};

console.log("returnTwoArr >>", returnTwoArr(animal)); 