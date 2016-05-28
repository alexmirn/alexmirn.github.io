$(function() {
	var data = {
		header: 'Мирный Алексей Сергеевич',
		questions: [{
            title: 'Вопрос №1',
            radioname: 'one',
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 1
            },
            {
            title: 'Вопрос №2',
            radioname: 'two',
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 2
            },
            {
            title: 'Вопрос №3',
            radioname: 'three',
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 3
        }],
		submit: 'Проверить мои результаты'
	};

	localStorage.setItem('questionary', JSON.stringify(data));
	var objData = JSON.parse(localStorage.getItem('questionary'));

	var html = $('#test').html();
	var content = tmpl(html, objData);

	$('.wrapper').append(content);


    function showModal(e) {
        e.preventDefault();

        var $modal = $('<div class="modal"></div>');
        var $result = 0;
        var $answer = $('input:checked');
        var $correct = [];

        for (var i = 0; i<objData.questions.length; i++) {
                $correct[i] = objData.questions[i].correct;
            if ($($answer[i]).attr('id') == $correct[i]) {
                $result += 1;
                $modal.append('<p class="correct">Ответ на ' + (i+1) + ' вопрос <b>правильный</b></p>');
            } else {
                $modal.append('<p class="incorrect">Ответ на ' + (i+1) + ' вопрос <b>неправильный</b></p>');
            }
        }

        $modal.append('<h4 class="result">Всего правильных ответов: ' + $result + '</h4><hr>');

        if ($result == objData.questions.length) {
            $modal.append('<h4>Поздравляем! Вы успешно прошли тест</h4>');
        } else {
            $modal.append('<h4>Tест не пройден</h4>');
        }

        $modal.append('<button>Закрыть и начать заново</button>');
        $('body').append($modal);

        $('button').one('click', function (e) {
            e.preventDefault();
            $modal.detach();
            $('input').attr('checked', false);
        })
    }

    $('button').on('click', showModal);

    return this;

});
// var body = document.querySelector('body');
// var wrapper = document.createElement('div');
// var h2 = document.createElement('h2');
// var form = document.createElement('form');
// var h4 = document.createElement('h4');
// var checkbox = document.createElement('div');
// var label = document.createElement('label');
// var input = document.createElement('input');
// var center = document.createElement('div');
// var button = document.createElement('button');


// body.appendChild(wrapper);

// wrapper.classList.add('wrapper');
// wrapper.appendChild(h2);
// wrapper.appendChild(form);
// wrapper.appendChild(center);

// h2.classList.add('text-center');
// h2.innerHTML = 'Тест по программированию';

// form.setAttribute('href', '#');
// form.setAttribute('method', 'POST');

// checkbox.classList.add('checkbox');
// checkbox.appendChild(label);

// label.appendChild(input);
// input.setAttribute('type', 'checkbox');

// center.classList.add('text-center');
// center.appendChild(button);

// button.setAttribute('type', 'button');
// button.classList.add('btn');
// button.classList.add('btn-default');
// button.innerHTML = 'Проверить мои результаты';

// for (var i = 0; i < 3; i++) {
//   form.appendChild(h4.cloneNode(true)).innerHTML = (i + 1) + '. Вопрос №' + (i + 1);
//   addCheckboxes(i);
// }

// function addCheckboxes(i) {
//   for (var j = 0; j < 3; j++) {
//     form.appendChild(checkbox.cloneNode(true)).querySelector('label').querySelector('input');
//     document.querySelectorAll('label')[(i*3)+j].appendChild(document.createTextNode('Вариант ответа №' + (j + 1)));
//   }
// }

