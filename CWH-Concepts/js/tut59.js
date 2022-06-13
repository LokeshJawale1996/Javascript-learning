console.log("This is tutorial 59");

//Symbols

const sym1 = Symbol("My identifier");
const sym2 = Symbol("My identifier");

// console.log("Symbol is ", sym1);
// console.log("Type of Symbol is ", typeof sym1);
console.log(sym1 === sym2); //false

const a = "this is";
const b = "this is";
console.log(a === b); //true
console.log(null === null); //true
console.log(undefined === undefined); //true

const k1 = Symbol("identifier for k1");
const k2 = Symbol("for k2");

myObj = {};
myObj[k1] = "Lokesh";
myObj[k2] = "Aryan";
myObj["name"] = "good Boy";
myObj[4] = "Good int";
console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); //cannot do this to get aryan because it is same as myObj["k2"]

//symbols is ignored in for in loop
for (key in myObj) {
  console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));
