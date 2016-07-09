$(function () {
    var $carousel = $('.carousel');
    var $blockWidth = $($carousel).find('.carousel__item').css('width');
    var $currentLeft= -69;

    function autoRight() {
        setInterval(function () {
            if (!$($carousel).hasClass('hover')) {
                moveRight($carousel);
            }
        }, 2500);
    };

    function moveRight() {
        $($carousel).find('.carousel__items').animate({
            left: '-'+ $blockWidth +'px'
        }, 300, function() {
            $($carousel).find('.carousel__item').eq(0).clone().appendTo($($carousel).find('.carousel__items'));
            $($carousel).find('.carousel__item').eq(0).remove();
            $($carousel).find('.carousel__items').css({"left":"0px"});
            });
        $currentLeft += 24;
        $('.active').animate({
            left: $currentLeft
        }, 300,function() {
            if ($currentLeft == -21) {
                $currentLeft = -93;
            }
        });
        };

    autoRight('carousel:first');

    $carousel.on('mouseenter', function(){
        $(this).addClass('hover');
    });

    $carousel.on('mouseleave', function(){
        $(this).removeClass('hover');
    });

    var $flag = false;

    $('.accordion__toggle').on('click', function() {
            if (!$flag) {
                $('.accordion__toggle').html('+');
                $('.accordion__toggle').removeClass('accordion__active');
                $('.accordion__title').removeClass('accordion__active');
                $('.accordion__text').slideUp();
                $(this).parent().find('.accordion__text').slideDown();
                $(this).html('-');
                $(this).addClass('accordion__active');
                $(this).parent().find('.accordion__title').addClass('accordion__active');
                $flag = true;
            } else {
                $(this).parent().find('.accordion__text').slideUp();
                $(this).html('+');
                $(this).removeClass('accordion__active');
                $(this).parent().find('.accordion__title').removeClass('accordion__active');
                $flag = false;
            }
        });

});


