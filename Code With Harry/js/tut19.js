//Exercise 1 Solution

//You have to create a variable which is a string
//containing the text which is valid link you are interested in
//you have to fetch all the links from a given page
//which contains text

let str = "python";
let links = document.links;
console.log(links);

let href;
Array.from(links).forEach(function (element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});
