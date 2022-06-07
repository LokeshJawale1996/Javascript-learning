console.log("This is Tutorial 8");

const age = 19;
const doesDrive = true;
// const vari = 25;

//== only checks value
//=== check value as well as type of value
//!= if value is not matching
//!== if value and type of value is not matching

// if (age != 19) {
//   console.log("Age is not 19");
// } else if (age !== 65) {
//   console.log("Age is 65");
// } else {
//   console.log("Age is not available");
// }

// if (typeof vari !== "undefined") {
//   console.log("Vari is definded");
// } else {
//   console.log("vari is not defined");
// }

// if (doesDrive && age > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You does not drive");
// }

// console.log(age == 45 ? "Age is 45" : "Age is not 45");//Age is not 45

//switch statement is like below
switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 28:
    console.log("you are 28");
    break;
  case 38:
    console.log("you are 38");
    break;

  default:
    console.log("You are non age");
    break;
}
