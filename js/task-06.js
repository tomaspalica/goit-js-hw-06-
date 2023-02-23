const validationInput = document.querySelector("#validation-input");
const validationInputLength = Number(
  validationInput.getAttribute("data-length")
);

const colorChange = () => {
  if (validationInput.value.length === validationInputLength) {
    validationInput.className = "valid";
  } else if (validationInput.value.length === 0) {
    validationInput.className = "";
  } else {
    validationInput.className = "invalid"
   
  }
};
validationInput.addEventListener("blur", colorChange);

