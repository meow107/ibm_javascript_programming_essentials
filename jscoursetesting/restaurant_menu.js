const breakfastMenu = ['Pancakes', 'Omelette', 'Fruit Salad'];
const mainCourseMenu = ['Steak', 'Salmon', 'Vegetarian Pasta'];
const dessertMenu = ['Cheesecake', 'Chocolate Mousse', 'Fruit Tart'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;