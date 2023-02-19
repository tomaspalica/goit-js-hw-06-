const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients");
const createlist = (ingredients) => {
  ingredients.forEach((ingredient) => {
 const listElements = document.createElement('li')
 listElements.class = 'item'
 listElements.textContent = ingredient;
 ul.append(listElements)
});
} ;
createlist(ingredients)