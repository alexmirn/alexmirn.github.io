var body = document.querySelector('body');
var wrapper = document.createElement('div');
var h2 = document.createElement('h2');
var form = document.createElement('form');
var h4 = document.createElement('h4');
var checkbox = document.createElement('div');
var label = document.createElement('label');
var input = document.createElement('input');
var center = document.createElement('div');
var button = document.createElement('button');


body.appendChild(wrapper);

wrapper.classList.add('wrapper');
wrapper.appendChild(h2);
wrapper.appendChild(form);
wrapper.appendChild(center);

h2.classList.add('text-center');
h2.innerHTML = 'Тест по программированию';

form.setAttribute('href', '#');
form.setAttribute('method', 'POST');

checkbox.classList.add('checkbox');
checkbox.appendChild(label);

label.appendChild(input);
input.setAttribute('type', 'checkbox');

center.classList.add('text-center');
center.appendChild(button);

button.setAttribute('type', 'button');
button.classList.add('btn');
button.classList.add('btn-default');
button.innerHTML = 'Проверить мои результаты';

for (var i = 0; i < 3; i++) {
  form.appendChild(h4.cloneNode(true)).innerHTML = (i + 1) + '. Вопрос №' + (i + 1);
  addCheckboxes(i);
}

function addCheckboxes(i) {
  for (var j = 0; j < 3; j++) {
    form.appendChild(checkbox.cloneNode(true)).querySelector('label').querySelector('input');
    document.querySelectorAll('label')[(i*3)+j].appendChild(document.createTextNode('Вариант ответа №' + (j + 1)));
  }
}

