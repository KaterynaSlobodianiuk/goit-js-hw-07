// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль
// текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const ulChildren = document.querySelectorAll(`.item`);

console.log(`${ulChildren.length}`);

ulChildren.forEach(item => {
  const header = item.firstElementChild.textContent;
    console.log(header);
     const elems = item.querySelectorAll(`li`);
    console.log(`${elems.length}`);
});
