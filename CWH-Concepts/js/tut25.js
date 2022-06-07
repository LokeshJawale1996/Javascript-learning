console.log("This is tutorial 25 Exercise 2 Solution");

/*
You have to create a div and inject it into the page which contains a heading

whenever someone clicks on the div,it should be converted into an editable item.
whenever user clicks away (blur) .
save the note into localstorage.

*/
//create a new element
let divElem = document.createElement("div");

//Add text to that created element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my element click to edit it");
} else {
  text = document.createTextNode(val);
}

//give element id,style and class
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border:2px solid black; width:154px; margin:34px; padding:23px"
);

//grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

//insert the element before element with id first
container.insertBefore(divElem, first);
divElem.appendChild(text);
console.log(divElem, container, first);

//add event listener to the divElem
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control"  id="textarea" rows='3'>${html}</textarea>`;
  }

  //listen for the blue event
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});
