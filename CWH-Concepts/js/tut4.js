//Data Types
//1)Primitive Data Types

//String
var name = "lokesh";
console.log("my string is " + name);
console.log("Data type is " + typeof name);

//Numbers
var marks = 56;
console.log("Data type is " + typeof marks);

//Boolean
let isDriver = true;
console.log("Data type is " + typeof isDriver);

//Null
let nullVar = null;
console.log("Data type is " + typeof nullVar); //it's type of return value is object which is bogus

//undefined
let undef = undefined;
console.log("Data type is " + typeof undef);

//2)Reference Data Types

//Arrays
myarr = [1, 2, 3, 4, 5, false, "string"];
console.log("Data type is " + typeof myarr);

//Object Literals
let stMarks = {
  lokesh: 90,
  mayur: 80,
  dhanaji: 89,
  karik: 67,
};
console.log(stMarks);

//function

function findName() {}
console.log(typeof findName);

//Date
let date = new Date();
console.log(typeof date);
