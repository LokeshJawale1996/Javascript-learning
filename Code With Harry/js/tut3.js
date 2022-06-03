//variables

console.log("tutorial3");
//variables in js
//var ,let & const
var name = "lokesh";
var name = "kaushal";
var businessName;
var marks = 345;
//businessName = " jawalePapd";
console.log(name, businessName);

//Rules for creating JavaScipt variables
/*
1)Cannot start with numbers 
2)Can start with letter , _ or $
3)Are case sensitive
*/
var city = "Jalgaon";
console.log(city);

const ownerName = "Ram";
//ownerName = "Hari"; //Cannot do this (error)
console.log(ownerName);

{
  let city = "Bhalod";
  city = "Faizpur";
  console.log(city); //Faizpur
}

console.log(city); //Jalgaon

/*Most common programming case types:
1.camel_Case
2.Kebab-case
3.snake_case
4.PascalCase
*/

/*
var	let	const
1)var
The scope of a var variable is functional scope.	
It can be updated and re-declared into the scope.

2)let
The scope of a let variable is block scope.
It can be updated but cannot be re-declared into the scope.	


3)const
The scope of a const variable is block scope.
It cannot be updated or re-declared into the scope.
*/
