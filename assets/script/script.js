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
        // $('body').toggleClass('noscroll');
        $('.overlay').toggleClass('show');
    });
    const closeSidebar = function () {
        $('.mob-nav-toggler').removeClass('show');
        $('.header-mob').removeClass('show');
        $('.overlay').removeClass('show');
    }
    $('.mob-nav-toggler.show').click(function () {
        closeSidebar();
    });
    $('.header-mob .nav-item').click(function () {
        closeSidebar();
    });
    $('.card-action').click(function () {
        const title = $(this).siblings('.card-title').text();
        const desc = $(this).siblings('.card-desc').text();
        const mainImg = $(this).parents('.card-body').siblings('.card__img-box').find('.gal-item-main-img').attr('src');
        var hiddenImageSrcs = [];
        const allimgs = $(this).parents('.card-body').siblings('.card__img-box').find('.gal-hidden-items span');
        allimgs.each(function () {
            hiddenImageSrcs.push($(this).text().trim());
        })

        $('.popup .popup-feature-img-box a').attr('href', mainImg);
        $('.popup .popup-feature-img-box img').attr('src', mainImg);
        $('.popup-title').text(title);
        $('.popup-desc').text(desc);
        var popupGallery = $('.popup-gallery-all-imgs');

        // Loop through the hiddenImageSrcs array and create the HTML structure
        for (var i = 0; i < hiddenImageSrcs.length; i++) {
            var newImageItem = $('<div class="popup-all-imgs-item loading_animation">');
            var newImageLink = $('<a class="gal-img-link" data-lightbox="jb-gal-1">');
            var newImage = $('<img class="example-image" alt="image-' + (i + 1) + '">');

            // Set href and src attributes for the anchor and image elements
            newImageLink.attr('href', hiddenImageSrcs[i]);
            newImage.attr('src', hiddenImageSrcs[i]);

            // Append the image to the link, and the link to the new image item
            newImageLink.append(newImage);
            newImageItem.append(newImageLink);

            // Append the new image item to the popup gallery container
            popupGallery.append(newImageItem);
        }
        $('.popup').addClass('show');
        $('.overlay').addClass('show');
        $('body').addClass('noscroll');
    });
    const closePopup = () => {
        $('.popup').removeClass('show');
        $('body').removeClass('noscroll');
        $('.overlay').removeClass('show');
        $('.popup-title').text('');
        $('.popup-desc').text('');
        $('.popup .popup-feature-img-box a').attr('href', '');
        $('.popup .popup-feature-img-box img').attr('src', '');
        $('.popup .popup-gallery-all-imgs').empty();
    };
    $('.popup-close').click(function () {
        closePopup();
    });
    $('.overlay').click(function () {
        $(this).removeClass('show');
        if ($('.mob-nav-toggler').hasClass('show')) {
            closeSidebar();
        };
        if ($('.popup').hasClass('show')) {
            closePopup();
        };
    });
});