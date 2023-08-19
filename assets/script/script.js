$(document).ready(function () {
    $('.destination-cards .card.trending').each(function () {
        $(this).prepend(`<div class="card-badge">
                            <p>Trending</p>
                        </div>`);
    });
    $(".testimonials-cards").slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 5) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
        var destinationsPosition = $('#destinatinations').offset().top;
        var contactUsPosition = $('#contact-us').offset().top;
        var tesimonialsPosition = $('#testimonials').offset().top;
        // console.log(contactUsPosition, scroll);
        if (scroll <= $('.hero').height()) {
            $('.main-nav .nav-item').removeClass('active');
            $('.home-nav').addClass('active');
        }
        if (destinationsPosition <= scroll + 100) {
            $('.main-nav .nav-item').removeClass('active');
            $('.destinations-nav').addClass('active');
        }
        if (contactUsPosition <= scroll + 100) {
            $('.main-nav .nav-item').removeClass('active');
            $('.contact-us-nav').addClass('active');
        }
        if (tesimonialsPosition <= scroll + 100) {
            $('.main-nav .nav-item').removeClass('active');
            $('.testimonials-nav').addClass('active');
        }
    });
    $('.mob-nav-toggler').click(function () {
        $(this).toggleClass('show')
        $('.header-mob').toggleClass('show');
        $('body').toggleClass('noscroll');
    });
    $('.mob-nav-toggler.show').click(function () {
        $(this).removeClass('show');
        $('.header-mob').removeClass('show');
        $('body').removeClass('noscroll');
    })

});