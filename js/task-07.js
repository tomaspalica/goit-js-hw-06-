const stripe = document.querySelector("#font-size-control")
const text = document.querySelector("#text")


const fontSizeChange = () => {
  text.style.fontSize = stripe.value + "px";  
}

stripe.addEventListener("input",fontSizeChange)