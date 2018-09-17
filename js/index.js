const productName = document.querySelector(".container section:nth-child(1) h1");
const productImg = document.querySelector(".container section:nth-child(1) img");
const smallBTN = document.querySelector("#size_small");
const mediumBTN = document.querySelector("#size_medium");
const largeBTN = document.querySelector("#size_large");
const greenBTN = document.querySelector("#green");
const redBTN = document.querySelector("#red");
const blackBTN = document.querySelector("#black");
const blueBTN = document.querySelector("#blue");
const nameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const address1Input = document.querySelector("#address");
const address2Input = document.querySelector("#address2");
const cityInput = document.querySelector("#city");
const stateInput = document.querySelector("#state");
const zipInput = document.querySelector("#zip");
const countrySelect = document.querySelector("form div select");
const productDesc = document.querySelector(".container section:nth-child(3) div > div:nth-child(2) p:nth-child(1)");
const custName = document.querySelector(".container section:nth-child(3) div ul:nth-child(6) li:nth-child(2)");
const custAddress1 = document.querySelector(".container section:nth-child(3) div ul:nth-child(6) li:nth-child(3)");
const custAddress2 = document.querySelector(".container section:nth-child(3) div ul:nth-child(6) li:nth-child(4)");
const custCityStateZip = document.querySelector(".container section:nth-child(3) div ul:nth-child(6) li:nth-child(5)");
const custCountry = document.querySelector(".container section:nth-child(3) div ul:nth-child(6) li:nth-child(6)");
const submitBTN = document.querySelector(".container section:nth-child(3) div div:nth-child(7) input");



function changeProduct(){
    let size = document.querySelector('input[name="size"]:checked').value;
    let color = document.querySelector('input[name="color"]:checked').value;

    productName.innerHTML = size +" "+ color + " JLA Shirt";
    productImg.src = "../img/" + color + ".jpg";
    productDesc.innerHTML = size +" "+ color + " shirt";
}

greenBTN.addEventListener('change', function(){
    changeProduct();
    greenBTN.setAttribute('aria-checked','true');
    redBTN.setAttribute('aria-checked','false');
    blackBTN.setAttribute('aria-checked','false');
    blueBTN.setAttribute('aria-checked','false');
}, false);

redBTN.addEventListener('change', function(){
    changeProduct();
    greenBTN.setAttribute('aria-checked','false');
    redBTN.setAttribute('aria-checked','true');
    blackBTN.setAttribute('aria-checked','false');
    blueBTN.setAttribute('aria-checked','false');
}, false);

blackBTN.addEventListener('change', function(){
    changeProduct();
    greenBTN.setAttribute('aria-checked','false');
    redBTN.setAttribute('aria-checked','false');
    blackBTN.setAttribute('aria-checked','true');
    blueBTN.setAttribute('aria-checked','false');
}, false);

blueBTN.addEventListener('change', function(){
    changeProduct();
    greenBTN.setAttribute('aria-checked','false');
    redBTN.setAttribute('aria-checked','false');
    blackBTN.setAttribute('aria-checked','false');
    blueBTN.setAttribute('aria-checked','true');
}, false);

smallBTN.addEventListener('change', function(){
    changeProduct();
    smallBTN.setAttribute('aria-checked','true');
    mediumBTN.setAttribute('aria-checked','false');
    largeBTN.setAttribute('aria-checked','false');
}, false);

mediumBTN.addEventListener('change', function(){
    changeProduct();
    smallBTN.setAttribute('aria-checked','false');
    mediumBTN.setAttribute('aria-checked','true');
    largeBTN.setAttribute('aria-checked','false');
}, false);

largeBTN.addEventListener('change', function(){
    changeProduct();
    smallBTN.setAttribute('aria-checked','false');
    mediumBTN.setAttribute('aria-checked','false');
    largeBTN.setAttribute('aria-checked','true');

}, false);



function cityStateZip(){
    custCityStateZip.innerHTML = cityInput.value + ", " + stateInput.value + " " + zipInput.value;
}

function getCountryName(){
    let countryvalue = countrySelect.value;
    if(countryvalue === ""){
        return "";
    } else{
        return document.querySelector("option[value='" + countryvalue + "']").innerHTML
    }
}

function removeErrors(){
    let allErrors = document.getElementsByClassName("error");
    while(allErrors[0]){
        allErrors[0].parentElement.removeChild(allErrors[0]);
    }
}

class Validator{
    constructor(input, type){
        this.input = input;
        this.type = type;
        this.errors = [];
    }

    addError(message){
        this.errors.push(message);
    }

    errorMessages(){
        const status = this.input.validity;
        const fieldValue = this.input.value;

        if(status.patternMismatch && this.type === "name"){
            this.addError("Your name should have only letters and spaces.");
        }

        if(status.typeMismatch && this.type === "email"){
            this.addError("Please use a valid email address.");
        }

        if(fieldValue.length === 0){
            this.addError("This field is required.");
        }

        if(status.patternMismatch && this.type === "state"){
            this.addError("Please use the correct 2 or 3 letter abbreviation for your state or province.");
        }

        if(status.patternMismatch && this.type === "zip"){
            this.addError("Your zipcode must be only numbers and 5 to 10 digits.");
        }

        return this.errors;
    }
}

submitBTN.addEventListener("click",(event) =>{
  let errorcount = 0;
  event.preventDefault();
  removeErrors();
    let validateName = new Validator(nameInput, "name");
  let nameErrors = validateName.errorMessages();

  if(nameErrors.length > 0){
      errorcount++;
      nameErrors.forEach((err) =>{
          nameInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateEmail = new Validator(emailInput, "email");
  let emailErrors = validateEmail.errorMessages();

  if(emailErrors.length > 0){
      errorcount++;
      emailErrors.forEach((err) =>{
          emailInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateAddress = new Validator(address1Input, "address");
  let addressErrors = validateAddress.errorMessages();

  if(addressErrors.length > 0){
      errorcount++;
      addressErrors.forEach((err) =>{
          address1Input.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateCity = new Validator(cityInput, "city");
  let cityErrors = validateCity.errorMessages();

  if(cityErrors.length > 0){
      errorcount++;
      cityErrors.forEach((err) =>{
          cityInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateState = new Validator(stateInput, "state");
  let stateErrors = validateState.errorMessages();

  if(stateErrors.length > 0){
      errorcount++;
      stateErrors.forEach((err) =>{
          stateInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateZip = new Validator(zipInput, "zip");
  let zipErrors = validateZip.errorMessages();

  if(zipErrors.length > 0){
      errorcount++;
      zipErrors.forEach((err) =>{
          zipInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  if(errorcount === 0){
      orderComplete();
  }
});

function orderComplete(){
  document.querySelector(".container").style.minWidth = "100%";
  document.querySelector(".container > section:nth-child(1), .container > section:nth-child(2)").style.display = "none";
  document.querySelector(".container > section:nth-child(2)").style.display = "none";
  document.querySelector(".container > section:nth-child(3) div > div:nth-child(7) input").style.display = "none";
  document.querySelector(".container > section:nth-child(3) > h1").style.display = "block";
  document.querySelector(".container > section:nth-child(3)").style.background = "#FFF";
  document.querySelector(".container > section:nth-child(3)").style.paddingTop = "100px";
  document.querySelector(".container > section:nth-child(3)").style.position = "absolute";
  document.querySelector(".container > section:nth-child(3)").style.left = "0";
  document.querySelector(".container > section:nth-child(3)").style.right = "0";
  document.querySelector(".container > section:nth-child(3)").style.marginLeft = "auto";
  document.querySelector(".container > section:nth-child(3)").style.marginRight = "auto";
  document.querySelector(".container > section:nth-child(3)").style.marginTop = "0";
  document.querySelector(".container > section:nth-child(3)").style.marginBottom = "0";
  document.querySelector(".container > section:nth-child(3)").style.height = "100%";
  document.querySelector(".container > section:nth-child(3)").style.width = "30%";
  document.querySelector(".container > section:nth-child(3)").style.zIndex = "999";
  document.querySelector(".container > section:nth-child(3) div ul:nth-child(6) div").style.display = "block";

  if(document.body.clientWidth <= 1450){
    document.querySelector(".container > section:nth-child(3)").style.minWidth = "95%";
    document.querySelector(".container > section:nth-child(3) > h1").style.fontSize = "40px";
  }
}

nameInput.addEventListener('keyup', function(){
  custName.innerHTML = nameInput.value;
}, false);

address1Input.addEventListener('keyup', function(){
  custAddress1.innerHTML = address1Input.value;
}, false);

address2Input.addEventListener('keyup', function(){
  custAddress2.innerHTML = address2Input.value;
}, false);

cityInput.addEventListener('keyup', function(){
  cityStateZip();
}, false);

stateInput.addEventListener('keyup', function(){
  cityStateZip();
}, false);

zipInput.addEventListener('keyup', function(){
  cityStateZip();
}, false);

countrySelect.addEventListener('change', function(){
  custCountry.innerHTML = getCountryName();
}, false);
