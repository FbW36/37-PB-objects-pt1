//* 37-PB-objects-pt1
//TODO Please print each of your answers to the console.

//* 1. Object Person.
//? Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
	species: "Homo sapiens",
	hasFur: false,
	isDomesticated: true,
	trophicLevel: "top",
	naturalEnemies: "homo sapience",
}

for (const prop in person) {
	console.log(`* ${prop}: ${person[prop]}`);
}

//* 2. Get Values.
//? Create a function that returns an array of all values of an object's properties.

// same person object as above

const getObjectValues = obj => Object.values(obj);

console.log(getObjectValues(person));


//* 3. Add A Method.
//? Create an object and add a method to that object which prints the values of the objects in a string.

const resident = {
	firstName: "Michael",
	lastName: "Smith", 
	job: "driver",
	age: 20, 
	city: "Paris",
	introduce: function() {
		return `${this.firstName} ${this.lastName} is a ${this.age}-year-old ${this.job} in ${this.city}`;
	}
}

console.log(resident.introduce()); // Michael Smith is a 20-year-old driver in Paris



//TODO Bonus Questions
//* 1. Convert keys and values into an array.
//? Create a function that converts an object into an array of keys and values.

const object1 = { A: 1, B: 2, C: 3 };
const object2 = { cats: 1, dogs: 2, turtles: 4 };

const objectToArray = obj => Object.entries(obj);

console.log(objectToArray(object1)); // [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
console.log(objectToArray(object2)); // [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]


//* 2. List Properties.
//? Create a function that returns an array of properties of a javascript object.

const student = {
	name: "Mike",
	class: "4A",
	course: "English",
}

const getObjPropNames = obj => Object.keys(obj);

console.log(getObjPropNames(student)); // [ 'name', 'class', 'course' ]


//* 3. Merge.
//? Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
const first = {firstName: "John"};
// const last = {firstName: "Jerry"};
const last = {lastName: "Smith"};

const mergeObjects = (target, source) => Object.assign(target, source);

const mergedObject = mergeObjects(first, last);

console.log(mergedObject); // { firstName: 'John', lastName: 'Smith' }

//? Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
// properties with the same values are merged
// properties with the same names but different values are updated


//* 4. Switch Keys and Values.
//? Create a function to get a copy of an object. The copy must switch the keys and values.

const personObject = {
	name: "John", 
	job: "teacher"
}

const switchKeysValues = obj => {
	const entriesArr = Object.entries(obj).map(el => [el[1], el[0]]);
	const personCopy = Object.fromEntries(entriesArr);
	
	// OR simply use a loop:
	// const personCopy = {};
	// for (const prop in obj) {
	// 	personCopy[obj[prop]] = prop;
	// }
	return personCopy;
}

const newObject = switchKeysValues(personObject);
console.log(newObject);


//* 5. Return Keys and Values.
//? Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

const abc = { a: 1, b: 2, c: 3 };

const makeTwoArrays = obj => {
	const newArr = []
	newArr.push(Object.keys(obj));
	newArr.push(Object.values(obj));
	return newArr;
};

console.log(makeTwoArrays(abc)); // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
