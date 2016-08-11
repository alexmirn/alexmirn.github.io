$(function () {

        $('.bxslider').bxSlider({
            auto: false,
            autoControls: true
        });
        
        function grid() {
            // $('.grid').masonry({
            //   columnWidth: 200,
            //   itemSelector: '.grid-item'
            // });


            // var $container = $('#container').masonry();
            //   $container.imagesLoaded( function() {
            //     $container.masonry();
            //   });

            var $grid = $('.grid');
            $grid.imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 10
                });
            });
        }

        $('.grid').masonry({
          // options
          itemSelector: '.grid-item',
          columnWidth: 10
        });
        
        function search() {
            // $('.ideas').find('div').remove();
            var $searchKey = $('.search__field').val();
            // jQuery.support.cors = true;
            
            $.ajax({
                url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
                // url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
                // url: 'https://api.pixplorer.co.uk/image?word=' + $searchKey + '&amount=10',
                dataType: 'jsonp',
                success: function (data) {
                    // var $html = $('#container').html();
                    // var $content = tmpl($html, data);
                        // var x = $(".ideas__pic__img");
                        var images = document.querySelectorAll(".ideas__pic__img");
                        console.log(images.length);
                        
                        var x = document.querySelectorAll(".ideas__pic__img");
                        var y = document.querySelectorAll(".ideas__pic__title");
                        console.log(x)
                    for (var i = 0; i < 9; i++) {
                        x[i].setAttribute('src', data.hits[i].webformatURL);
                        // y[i].innerHTML = data.hits[i].tags.split(', ')[1];
                    }
                    console.log('alesha');
                    // $('.ideas').append($content);
                    grid();
                },
                error: function () {
                    alert('Error!');
                }
            });
        }

        search();

        $('.search__button').on('click', function (e) {
            e.preventDefault();
            search();
            $('.search__field').val('');
        })
    }
);
