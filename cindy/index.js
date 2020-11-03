// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

// 2. Get Values. Create a function that returns an array of all values of an object's properties.
//     Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
//     Expected output:
// ["tea", "coffee", "milk"] 

const Person = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
    getObjectValues: function () {
      return `${this.choice1}, ${this.choice2}, ${this.choice3}`;
    },
  };
  console.log("Person ==> ", Person.getObjectValues());