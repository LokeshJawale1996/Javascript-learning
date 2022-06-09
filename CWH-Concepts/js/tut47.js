console.log("This is tutorial 47");

let regex = /harry/;
//Lets look inti some metachracter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /ry$/; // $ means expression will match if string ends with
regex = /h.rry/; //. matches any one character
regex = /h*y/; // * matches any zero or more character
regex = /ha?rryi?/; //? after character means that chracter is optional
regex = /h\*rry/; //if we want exact match of * then use \ before *

let str = "harry is harry";

let result = regex.exec(str);
console.log("The result from exec is", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} dpes not matches the expression ${regex.source}`
  );
}
