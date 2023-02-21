let counterValue = 0;

const valueOnSite = document.querySelector("#value");

const addButton = document.querySelector('button[data-action="increment"]');
const substractButton = document.querySelector('button[data-action="decrement"]');

const addition = () => {
 counterValue += 1
 valueOnSite.textContent = counterValue;
 console.log(counterValue)
};
const substraction = () => {
   counterValue -= 1 
   valueOnSite.textContent = counterValue;
  console.log(counterValue);
  
};

addButton.addEventListener("click", addition);
substractButton.addEventListener("click", substraction);



