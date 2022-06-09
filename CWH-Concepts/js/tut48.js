console.log("This is tutorial 48");

//Regular Expressions:
//Basic Functions
//Metacharacter Symbols

// const regex = /^h/i;
//Character Set []

let regex = /h[a-z]rry/;
regex = /h[aty]rry/; //can be an a ,t and y
regex = /h[^aty]rry/; //cannot beany of a ,t and y
regex = /h[^aty]rr[yYu]/; //cannot be a ,t and y + can be an y ,Y or u
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; //we can have as many characters sets as we want

//Quantifiers
regex = /ha{2}y/; //r can occur exactly 2 times
regex = /ha{0,2}y/; //r can occur exactly 0 or 1 or 2(0 to 2) times

//Groupings -we use parenthesis for groupings
regex = /(har){2}([0-9]r){3}/;

// const str = "hirr99 Bhai";
let str = "harry bhai";
// str = "harharbhai";
str = "harhar1r3r4r";

let result = regex.exec(str);

console.log("The result from exec is", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} dpes not matches the expression ${regex.source}`
  );
}
