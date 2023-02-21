const colorName = document.querySelector(".color")
const colorChange = document.querySelector(".change-color")
const body = document.querySelector("body")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const bodyColor = () => {
  
body.style.backgroundColor = getRandomHexColor()
colorName.textContent = getRandomHexColor()
}

colorChange.addEventListener("click", bodyColor)






