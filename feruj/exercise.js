const person = {
  name: "feruj Ahammed",
  age: 30,
  city: "Berlin",
};

const printPerson = Object.entries(person);
console.log(printPerson); //[ [ 'name', 'feruj Ahammed' ], [ 'age', 30 ], [ 'city', 'Berlin' ] ]

//2

const objectValue = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
const getObjValue = Object.values(objectValue);
console.log(getObjValue); //[ 'tea', 'coffee', 'milk' ]

//3
const person1 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
};
console.log(
  `${person1.firstName} ${person1.lastName} is a ${person1.age} year old ${person1.job} in ${person1.city}`
); //Michael Smith is a 20 year old driver in Paris

//Bonus Questions
//1
const objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};
const output = Object.entries(objectToArray)
console.log(output);//[ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

//................
const objectToArray1= {
    cats: 1,
    dogs: 2, 
    turtles: 4
  }
  const output1 = Object.entries(objectToArray1)
console.log(output1);//[ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]
//2
const student = {
    name: "Mike", 
    class: "4A" ,
    course: "English"
  }
const output2 = Object.keys(student)
console.log(output2);//[ 'name', 'class', 'course' ]

//3
let first = {firstName: "John"}
let last = {lastName: "Smith"}

const fullName = (fName,lName)=>{
    const result = Object.assign(fName,lName)
    return result
}
console.log(fullName(first,last));//{ firstName: 'John', lastName: 'Smith' }

// if we merge two object with same property value it will overwrite and show only last one. as keys need to be different name. 

//4
let person2 = {
    name: "John", 
    job: "teacher"
  }

  function reverseFunction(switchKandV) {
      const result = {}
      for(let key in switchKandV){
        result[switchKandV[key]] = key
      }
      return result;
  }
  console.log(reverseFunction(person2));//{ John: 'name', teacher: 'job' }

  //5. Return Keys and Values.

  const obj = { a: 1, b: 2, c: 3 }
  function returnFunc(object) {
      let objKeys = Object.keys(object)
      let objValu= Object.values(object)
      return (objKeys,objValu)
  }
  console.log(returnFunc(obj,obj));