$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
            $(this).children('.sub-menu').children('li').animate({backgroundColor:"violet"}, 500 );
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
            $(this).children('.sub-menu').animate({backgroundColor:"yellow"}, 500 );
        }
    );
}); // end ready


