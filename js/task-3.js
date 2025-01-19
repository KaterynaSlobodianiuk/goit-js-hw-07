// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name -
//     output як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const userNameElem = document.querySelector(`.js-input`);
userNameElem.addEventListener(`input`, onInputChange);
function onInputChange() {
    const spanValue = document.querySelector(`.js-span-value`);
    spanValue.textContent = userNameElem.value.trim();
    if (userNameElem === `` || userNameElem.value.split(" ").join("").length === 0) {
     spanValue.textContent = `Anonymous`;
    }
};



