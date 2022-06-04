console.log("Welcome to tutorial 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");
let nodeName = cont.childNodes[2].nodeName;
// console.log(nodeName); //text

let nodeType = cont.childNodes[1]; //1
// console.log(nodeType);

//Node Types
// 1.element
// 2.attribute
// 3.text
// 8.comment
// 9.document
// 10.docType

// console.log(cont.childNodes);//shows all including comment text and all elements
// console.log(cont.children);//shows only element

let container = document.querySelector("div.container");
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild); //text
// console.log(container.firstElementChild); //<h1>...</h1>

// console.log(container.lastChild); //text
// console.log(container.lastElementChild); //<form>....</form>

// console.log(container.children);
// console.log(container.childElementCount); //6 count of child elements
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
