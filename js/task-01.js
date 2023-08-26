const categoryItems = document.querySelectorAll('li.item')
console.log("Number of categories: " + categoryItems.length)
categoryItems.forEach(element => {
    const categoryHeaders = element.querySelector('h2')
    const categoryItemsCount = element.querySelectorAll("ul li").length
    console.log("Category: " + categoryHeaders.textContent)
    console.log("Количество элементов:"+categoryItemsCount)
});
