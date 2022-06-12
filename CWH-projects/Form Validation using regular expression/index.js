console.log("This is form validation project");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// console.log(name, email, phone);

name.addEventListener("blur", () => {
  console.log("name is blurred");
  //validate name here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
  let str = name.value;
  // console.log(regex, str);

  if (regex.test(str)) {
    console.log("it matched");
  }
});
email.addEventListener("blur", () => {
  console.log("email is blurred");
  //validate email here
});

phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  //validate phone here
});
