console.log("Welcome to tutorial 14");
/*
 element selectors
 1.Single Element Selector
 2.Multi Element Selector
 */

//1.Single element selector
let element = document.getElementById("myfirst");
// element = element.className;//print classname of that element
// element = element.childNodes;
// element = element.parentNode;//print parent node
element.style.color = "red"; //changes color to red of that element associated with
element.innerText = "Lokesh is a good boy"; //changes the element text to this
element.innerHTML = "<b>Hello Lokesh</b>";
// console.log(element.innerText);

let sel = document.querySelector("#myfirst");
sel = document.querySelector("b"); //<b>Hello Lokesh</b>
sel = document.querySelector("h1"); //      <h1 class="heading">Welcome to Coding!</h1>
sel = document.querySelector("div"); //get first div
sel.style.color = "green"; //first div becomes green
// console.log(sel);

//====================================

//2.Multi element selector

let elems = document.getElementsByClassName("child");
// console.log(elems); //get HTMLcollection where child class available
elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div"); //get all div collection
console.log(elems);
// console.log(elems[0].getElementsByClassName('child'));

// Array.from(elems).forEach((element) => {
//   console.log(element);
//   element.style.color = "blue";
// });
