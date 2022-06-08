console.log("this is tutorial 41");

// ARROW FUNCTIONS

// Creating a regular function
// const lokesh = function (){
//     console.log("This is the best person ever")
// }

// Converting it to an arrow function
// const lokesh = ()=>{
//     console.log("This is the best person ever")
// }
// lokesh();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple paramteres

//single parameter
const greet = (name) => "Good Morning " + name;
console.log(greet("Harry"));

//multiple parameter
const employee = (employee_name, age, dept) =>
  "Good Morining " +
  employee_name +
  ". " +
  "Your age is " +
  age +
  "years old." +
  "and you are working in " +
  dept;

console.log(employee("lokesh", 25, "IT"));
