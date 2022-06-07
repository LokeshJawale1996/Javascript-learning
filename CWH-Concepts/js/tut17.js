console.log("This is Tutorial 17 on events");

//Events
document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("you have clicked on heading");
  variable = e.target;
  variable = e.target.className; //yourhead
  variable - e.target.id; //heading
  variable = Array.from(e.target.classList); //gets all target classes in array format
  variable = e.offsetX;
  variable = e.offsetY;
  console.log(variable);
  // locationn.href = "//codewithharry.com";
});
