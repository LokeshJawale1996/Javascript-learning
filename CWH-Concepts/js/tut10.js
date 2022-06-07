//Functions
//understanding of scope
console.log("We are in tutorial 10");
if (1) {
  var i = 234;
  console.log(i);
}
console.log(i);

function ui(name) {
  var i = 9;
  console.log(i);
  return `This is a ${name} ui`;
}
console.log(ui("lokesh"), i);

// const mygreet = (name1, thank = "Thank You") => {
//   let msg = `Happy Birthday ${name1} How I wish I could fly to you right now and be with you on this special day of yours.Bur remember ,my good whishes are always there with you. ${thank}`;
//   return msg;
// };

// let name = "Ajinkya";
// let name2 = "Roshan";

// let val = mygreet("lokesh", "Thanks a lot!");
// console.log(val);

// //=================================

// const myobj = {
//   name: "lokesh",
//   game: function () {
//     return "GTA";
//   },
// };
// console.log(myobj.game()); //GTA
// //================================

// arr = ["fruit", "vegetable", "furniture"];

// arr.forEach(function (element, index, array) {
//   console.log(element, index);
// });
