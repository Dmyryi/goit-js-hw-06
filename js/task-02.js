const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const array =[]
for (let i = 0; i < ingredients.length; i++){
  const itemIngrediet = document.createElement("li")

  itemIngrediet.textContent = ingredients[i]
  itemIngrediet.classList.add('item')
  array.push(itemIngrediet)
  

}

list.append(...array)
console.log(array)