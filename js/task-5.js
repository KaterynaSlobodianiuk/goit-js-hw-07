// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку на button.change - color і
//  задає це значення кольору текстовим вмістом для span.color.
const button = document.querySelector(`.change-color`);
const widgetSpan = document.querySelector('.color');

button.addEventListener(`click`, onButtonChange);
function onButtonChange() {
  const body = document.querySelector(`body`);
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  widgetSpan.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
