const allCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach(category => {
  const categoryTitle = category.querySelector('h2');
  const categoryItems = category.querySelectorAll('li');
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
