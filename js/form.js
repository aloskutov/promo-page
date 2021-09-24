'use strict';

const form = document.querySelector('.form-test-drive');
const formUrl = 'https://jsonplaceholder.typicode.com/posts';

form.addEventListener('submit', (event) => {
  const formData = {};
  let emptyField = false;

  event.preventDefault();

  for (let {name, value} of form.elements) {
    if (name) {
      value = value.trim();
      formData[name] = value;
      if (value == '') emptyField = true;
    }
  }
  if (emptyField) alert('Заполнены не все поля формы!');
  else {
    fetch(formUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    }).then((data) => {
      alert('Запрос отправлен');
      form.reset();
    }).catch((error) => {
      alert('Произошла ошибка, статус ошибки: ' + error.message);
    });
  }
});
