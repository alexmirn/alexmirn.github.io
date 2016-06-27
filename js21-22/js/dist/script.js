'use strict';

$(function () {
    var data = {
        header: 'Мирный Алексей Сергеевич',
        questions: [{
            title: 'Вопрос №1',
            radioname: 'one',
            id: ['1', '2', '3'],
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            correct: 1
        }, {
            title: 'Вопрос №2',
            radioname: 'two',
            id: ['1', '2', '3'],
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            correct: 2
        }, {
            title: 'Вопрос №3',
            radioname: 'three',
            id: ['1', '2', '3'],
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            correct: 3
        }],
        submit: 'Проверить мои результаты'
    };

    localStorage.setItem('questionary', JSON.stringify(data));
    var $objData = JSON.parse(localStorage.getItem('questionary'));

    var html = $('#test').html();

    $('.wrapper').append('<h3 class="text-center">' + $objData.header + '</h3>');
    $('.wrapper').append('<form href="#" method="POST">');
    for (var i = 0; i < $objData.questions.length; i++) {
        var question = $('<div class="question">');
        question.append('<h4> ' + (i + 1) + '. ' + $objData.questions[i].title + '</h4>');
        $('.wrapper').append(question);
        for (var j = 0; j < $objData.questions[i].answers.length; j++) {
            var answer = $('<div class="radio">');
            answer.append('<input type="radio" name="' + $objData.questions[i].radioname + '" \n                id="' + $objData.questions[i].id[j] + '" />');
            answer.append('<label for="' + $objData.questions[i].id[j] + '">');
            answer.append($objData.questions[i].answers[j] + '</label>');
            $('.wrapper').append(answer);
            $('.wrapper').append('</div>');
        }
        $('.wrapper').append('</div>');
    }
    $('.wrapper').append('</form>');
    $('.wrapper').append('<div class="button-wrapper">\n        <button class="btn btn-default">' + $objData.submit + '</button></div>');

    function showModal(e) {
        e.preventDefault();

        var $modal = $('<div class="modal"></div>');
        var $result = 0;
        var $answer = $('input:checked');
        var $correct = [];

        for (var _i = 0; _i < $objData.questions.length; _i++) {
            $correct[_i] = $objData.questions[_i].correct;
            if ($($answer[_i]).attr('id') == $correct[_i]) {
                $result += 1;
                $modal.append('<p class="bg-success">Ответ на вопрос № ' + (_i + 1) + ' - <b>правильный</b></p>');
            } else {
                $modal.append('<p class="bg-danger">Ответ на вопрос № ' + (_i + 1) + ' - <b>неправильный</b></p>');
            }
        }

        $modal.append('<p class="result">Правильных ответов: ' + $result + '</p>');

        if ($result == $objData.questions.length) {
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
        });
    }

    $('button').on('click', showModal);

    return this;
});
