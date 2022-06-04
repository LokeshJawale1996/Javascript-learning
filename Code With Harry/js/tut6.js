//String:Properties,Methods & Template Literals
console.log("we are at tut6");

const myName = "lokesh";
const greeting = "Good Morning";
console.log(greeting + " " + myName); //Good Morning lokesh

//=============================
let html;
html = "<h1>This is heading</h1>" + "<p>This is my para</p>";
html = html.concat(" This", " str");
//concat() is used for concatinating strings
// console.log(html);
// console.log(html.length); //55
// console.log(html.toLocaleLowerCase());
// console.log(html.toUpperCase());
// console.log(html[1]);//h
// console.log(html.indexOf("This")); //4
// console.log(html.indexOf("jjsjh")); //-1-1
// console.log(html.lastIndexOf("<")); //42
// console.log(html.charAt(4)); //T
// console.log(html.endsWith("str")); //true
// console.log(html.includes("ghhh")); //false
// console.log(html.includes("This")); //true
// console.log(html.substring(1, 3)); //h1
// console.log(html.slice(0, 4)); //<h1>
// console.log(html.split(""));//

// console.log(html.replace("This", "it")); //replace first occurences;
// //if we want to change all occurences
// //then use replceAll()

//==============================
//Template Literals(ES6 feature)

let fruit1 = "Orange";
let fruit2 = "Apple";

let myHtml = `Hello ${myName}
              <h1>This is my heading</h1>
              <p>Do You like ${fruit1} and ${fruit2}
`;
document.body.innerHTML = myHtml;
