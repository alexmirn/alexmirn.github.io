$(function() {
	let data = {
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
	let objData = JSON.parse(localStorage.getItem('questionary'));

	let html = $('#test').html();
	let content = tmpl(html, objData);

    $('.wrapper').append(`<h3 class="text-center">${data.header}</h3>`);
	$('.wrapper').append(content);


    function showModal(e) {
        e.preventDefault();

        const $modal = $('<div class="modal"></div>');
        let $result = 0;
        let $answer = $('input:checked');
        let $correct = [];

        for (let i = 0; i<objData.questions.length; i++) {
                $correct[i] = objData.questions[i].correct;
            if ($($answer[i]).attr('id') == $correct[i]) {
                $result += 1;
                $modal.append(`<p class="bg-success">Ответ на вопрос № ${i+1} - <b>правильный</b></p>`);
            } else {
                $modal.append(`<p class="bg-danger">Ответ на вопрос № ${i+1} - <b>неправильный</b></p>`);
            }
        }

        $modal.append(`<p class="result">Правильных ответов: ${$result}</p>`);

        if ($result == objData.questions.length) {
            $modal.append('<h4>Вы прошли тест!</h4>');
        } else {
            $modal.append('<h4>Вы не прошли тест</h4>');
        }

        $modal.append('<button class="btn btn-info">Пройти еще раз</button>');
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
