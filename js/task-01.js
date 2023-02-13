const findCategory = document.querySelector(`#categories`)
const findItem = findCategory.querySelectorAll("li.item")

console.log(`Number of categories ${findItem.length}`)

findItem.forEach(item =>{
  const findH2 = item.querySelector("h2")
  const findItemNumber = item.querySelectorAll("li")
  console.log(`Category:${findH2.textContent}`)
  console.log(`Elements:${findItemNumber.length}`)
})
