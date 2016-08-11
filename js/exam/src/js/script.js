$(function () {

        $('.bxslider').bxSlider({
            auto: false,
            autoControls: true
        });
        
        function grid() {
            var $grid = $('.grid');
            $grid.imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 10,
                    gutter: 20
                });
            });
        }

        $('.grid').masonry({
          // options
          itemSelector: '.grid-item',
          columnWidth: 10
        });
        
        function search() {
            var $searchKey = $('.search__field').val();
        
            $.ajax({
                url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
                dataType: 'jsonp',
                success: function (data) {
                        var images = document.querySelectorAll(".ideas__pic__img");
                   
                        var $ideasImg = document.querySelectorAll(".ideas__pic__img");
                        var $ideasTitle = document.querySelectorAll(".ideas__pic__title");
                        for (var i = 0; i < 9; i++) {
                        $ideasImg[i].setAttribute('src', data.hits[i].webformatURL);
                        // $ideasTitle[i].innerHTML = data.hits[i].tags.split(', ')[1];
                    }
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
