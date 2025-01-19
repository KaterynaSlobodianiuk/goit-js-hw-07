// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'.
// Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів,
// а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    if (!form.elements.email.value || !form.elements.password.value) {
        alert('All form fields must be filled in');
        return;
    }

    const allValues = {
        email: e.target.elements.email.value.trim(),
        password: e.target.elements.password.value.trim(),
    }
    console.log(allValues);
    form.reset();
}
