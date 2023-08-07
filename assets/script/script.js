$(document).ready(function () {
    $('.destination-cards .card.trending').each(function () {
        $(this).prepend(`<div class="card-badge">
                            <p>Trending</p>
                        </div>`);
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
    });

});