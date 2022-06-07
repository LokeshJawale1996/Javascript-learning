console.log("this is tutorial 16");

//create element

let element = document.createElement("li");
//add a class name to the li element
element.className = "childui";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
let text = document.createTextNode("A am a text node");
element.appendChild(text);

// element.innerText = `Hello this is created by lokesh`;
let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);

//replace element
let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("this is created node for elem2");
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById("myul");
myul.replaceChild(element, document.getElementById("fui"));
myul.removeChild(document.getElementById("lui"));

let pr = elem2.getAttribute("id");
elem2.removeAttribute("id");
console.log(elem2, pr);
