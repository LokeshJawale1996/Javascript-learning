console.log("This is Tutorial 49");

//character classes
let regex = /\war/; //word character - _or alphabet or numbers
regex = /\w+d1r/; // \w+ means one or more word characters
regex = /\Wbhai/; //Non word characters(space is non word character)
regex = /\W+bhai/; //\W+ means  more  than one Non word characters
regex = /number \d999/; //\d means digit
regex = /number \d+999/; //\d+ means more than one digit
regex = /\D999/; //\D means non digit
regex = /\D+999/; //\D+ means more than one non digit
regex = /\ska number/; //Match white space character
regex = /\s+ka number/; //Match one or more than one white space character
regex = /\Ska number/; //Match Non whitespace character
regex = /\S+ka number/; //Match one or  more than one non whitespace character
regex = /4r5r\b/; //word boundary

//Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;

let str = "harh7d1r4r5r $$%@bhai harry bhai ka number 899999harry9999";

let result = regex.exec(str);

console.log("The result from exec is", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} dpes not matches the expression ${regex.source}`
  );
}
