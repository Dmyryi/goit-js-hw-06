
const allCategories = document.querySelectorAll('.item')
console.log("Number of categories: " + allCategories.length)


const categoryItems = document.querySelectorAll('li.item')
categoryItems.forEach(element => {
    const categoryHeaders = element.querySelector('h2')
    const categoryItemsCount = element.querySelectorAll("ul li").length
    console.log("Category: " + categoryHeaders.textContent)
    console.log("Количество элементов:"+categoryItemsCount)
});
