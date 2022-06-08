console.log("This is my tutorial 42");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData() {
//   console.log("Started getData");
//   url = "lokesh.txt";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }
// getData();

// function getJsonData() {
//   console.log("started getJsonData");
//   // url = "dummy.json";
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Inside first then");
//       console.log(data);
//     });
// }
// console.log("Before Running getJsonData");
// getJsonData();
// console.log("After Running getJsonData");

function postData() {
  // url = "http://dummy.restapiexample.com/api/v1/create";
  url = "https://api.instantwebtools.net/v1/airlines";
  // data = '{"name":"lokessdh","salary":"1234","age":"25"}';
  data = {
    id: 13,
    name: "Sri Lankan Airways1",
    country: "Sri Lanka1",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    slogan: "From Sri Lanka1",
    head_quaters: "Katunayake, Sri Lanka1",
    website: "www.srilankaairways.com1",
    established: "1991",
  };
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postData();
