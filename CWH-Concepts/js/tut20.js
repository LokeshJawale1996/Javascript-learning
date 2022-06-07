console.log("this is tutorial 20");

let impArray = ["adrak", "pyaz", "bhindi"];

//1)Add a key value pair inside the local Storage
localStorage.setItem("Name", "Lokesh"); //to add item in localStrorage localStorage.setItem() is used.
localStorage.setItem("Name2", "Kartik");
localStorage.setItem("sabzi", JSON.stringify(impArray));

//2)you can check what storred in your localstorage
//using window.localStorage();

//3) clears the entire localStorage
//localStorage.clear();

//4.clear a particular key-value pair
localStorage.removeItem("Name2");

//5)Retrieve an item from local Storage
let name = localStorage.getItem("Name"); //to get details from localStorage localStorage.getItem() is used
name = JSON.parse(localStorage.getItem("sabzi"));
console.log(name);

//JSON.parse takes string as argument and convert in oject
//JSON.parse takes and object as argument and returns a strings

//========================================

//session Storage
//1)Add a key value pair inside the session Storage
sessionStorage.setItem("sessionName", "sLokesh");
sessionStorage.setItem("sessionName2", "sKartik");
sessionStorage.setItem("sessionsabzi", JSON.stringify(impArray));
