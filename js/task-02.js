const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
for (let i = 0; i < ingredients.length; i++){
const itemIngrediet = document.createElement("li")

  itemIngrediet.textContent = ingredients[i]
  itemIngrediet.classList.add('item')
  list.append(itemIngrediet)

}

