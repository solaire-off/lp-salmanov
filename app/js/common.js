$(function() {

    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var $root = $('html, body');

    $('.anchor-link').click(function () {
        $(this).blur();
        $url = '#'+$(this).data('anchor')
        $root.animate({
            scrollTop: $($url).offset().top
        }, 700);

        return false;
    });

});
