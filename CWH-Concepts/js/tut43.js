console.log("This is Tutorial 43");
//async returns a promise
//await asynchronously handled
async function lokesh() {
  console.log("Inside lokesh function");
  const response = await fetch("https://api.github.com/users");
  console.log("Before Response");
  const users = await response.json();
  console.log("users resolved");
  return users;
  // return "harry";
}

console.log("Before Calling lokesh");
let a = lokesh();
console.log("After Calling lokesh");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of this js file");
