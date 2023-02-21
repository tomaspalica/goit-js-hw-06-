const validationInput = document.querySelector("#validation-input");
const validationInputLength = Number(validationInput.getAttribute("data-length"))

const colorChange = () => {if(validationInput.value.length === validationInputLength){
validationInput.classList.add("valid")
} else {
  validationInput.classList.add("invalid")
}
}
validationInput.addEventListener("blur", colorChange)



