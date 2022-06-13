console.log("This is tutorial 58");

//Set  stores uniques values
const mySet = new Set(); //Initialize an empty set
console.log("The set looks like :", mySet);

//Adding values ti this set
mySet.add("this");
mySet.add("My name");
mySet.add("this");
mySet.add("that");
mySet.add(34);
mySet.add(true);
mySet.add(false);

console.log("The set looks like this now :", mySet);

//use the constructor to initialze the set
// let mySet2 = new Set(["that", 45, "this", false, { a: 4, b: 8 }]);
// console.log("New set :", mySet2);

console.log(mySet.size);

console.log(mySet.has(34)); //true

console.log(mySet.has("lokesh")); //false

console.log("before removal :", mySet);
mySet.delete("that"); //remove an element from set
console.log("after removal :", mySet);

//Iterating a set

// for (let item of mySet) {
//   console.log("Item is :", item);
// }

mySet.forEach((item) => {
  console.log("the item is :", item);
});

//Quiz ;Can yo use Array.from(mySet) to convert set into Array.
