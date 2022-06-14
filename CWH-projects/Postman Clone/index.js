console.log("This is my Postman clone");

//Utility Function
//1.utility function to get element from string
function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

//Initialize number of parameters
let addedParamsCount = 0;

//Hide the parameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

//If the user clicks on params box,hide the json box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});

//If the user clicks on json box,hide the params box
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});

//If the user clicks on + button, add more parameters

let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = `
   <div id="parametersBox">
        <div class="form-row">
          <label for="url" class="col-sm-2 col-form-label">Parameter 
          ${addedParamsCount + 2}</label>
          <div class="col-md-4">
            <input
              type="email"
              class="form-control"
              id="parameterKey${addedParamsCount + 2}"
              placeholder="Enter Parameter ${addedParamsCount + 2} Key"
            />
          </div>
          <div class="col-md-4">
            <input
              type="password"
              class="form-control"
              id="parameterValue${addedParamsCount + 2}"
              placeholder="Enter parameter ${addedParamsCount + 2} Value"
            />
          </div>
          <button id="addParam" class="btn btn-primary">-</button>
        </div>
      </div>`;
  //Convert the element string to DOM node
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);
  // console.log(paramsElement);
  addedParamsCount++;
});
