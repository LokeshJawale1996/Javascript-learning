//type conversion

console.log("Welcome to tut5");
let myVar;
myVar = 45;
console.log(myVar, typeof myVar); //45 number

//conversion from number to string
let myVar1;
myVar1 = String(67);
// console.log(myVar1, typeof myVar1); //67 string
//=======================================
//conversion from boolean to string
let booleanVar = String(true);
// console.log(booleanVar, typeof booleanVar);//true string

//=======================================
//conversion of Date into string
let date = String(new Date());
// console.log(date, typeof date);
//=======================================
//conversion of arr into string
let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, typeof arr);//9 string

//=======================================
//conversion of number into string using toString() method
//we can convert boolean,Date,Arr in string using toString Method.
let i = 6;
// console.log(i.toString(), typeof i); //6 number

let arr1 = [1, 2, 3, 4, 4, 6];
// console.log(arr1.toString());
// //1,2,3,4,5,6,
//=======================================
//conversion of string into number
let stri = Number("1234");
stri = Number("12d34"); //NaN
// console.log(stri, typeof stri); //NaN number
//=================================
//conversion of boolean to number
let stri1 = Number(false);
let stri2 = Number(true);
// console.log(stri1, stri2, typeof stri1, typeof stri2); // 0 1 number number
//=================================
//conversion of array into number is not possible
let arr2 = Number([12, 23, 45, 56]);
// console.log(arr2, typeof arr2); //NaN number

//=================================
//conversion of string into number using parseInt() method & parseFloat() method

let number = parseInt("23.067");
// console.log(number, typeof number);//23 number

let number1 = parseFloat("23.067");
// console.log(number1, typeof number1); //23.067 number

//
// console.log(number1.toFixed(5), typeof number1); //23.06700 number

//============================================================================
//Type coercion

let myStr1 = "657";
let myNum1 = 34;
// console.log(myStr1 + myNum1);//65734

let myStr2 = Number("657");
let myNum2 = 34;
// console.log(myStr2 + myNum2); //691
