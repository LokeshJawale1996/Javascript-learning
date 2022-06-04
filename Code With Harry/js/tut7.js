//Arrays and objects

console.log("We are in tut7.js and let's discuss about arrays");

let marks = [67, 78, 89, 65, 78, 54];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, [3, 5]];

const arr = new Array(23, 123, 21, "Orange");
// console.log(marks);
// console.log(arr);
// console.log(mixed);
// console.log(fruits[0]);
// console.log(arr.length);
// console.log(Array.isArray(arr)); //checking array is not and returning true or false according to it
arr[0] = "Lucky";
// console.log(arr);
let arrelement = arr[0];
// console.log("element :" + arrelement); //element :lucky

let value = marks.indexOf(54);
// console.log(value); //4

//mutuating or modifying arrays
// marks.push(57); //pushes  element in array after last index
// marks.unshift(66); //added element in array atv 0th index
//marks.shift();//removes first 0th index element from array
// marks.splice(1, 2);
// marks.reverse(); //array element reversed

let marks2 = [45, 79, 84, 96, 48];
marks = marks.concat(marks2); //concatinating two arrays
// console.log(marks);

//Objects

let myobj = {
  "first name": "Lokesh",
  BusinessName: "Jawale papd",
  isActive: true,
  marks: [1, 5, 3, 6],
};

// console.log(myobj);
// console.log(myobj["first name"]); //Lokesh
// console.log(myobj.BusinessName); //Jawale papd
