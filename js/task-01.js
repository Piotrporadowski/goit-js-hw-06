const categoryItems = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;

    const categoryElements = item.querySelectorAll("li");
    const numberOfElements = categoryElements.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfElements}`);
});