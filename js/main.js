(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

/* Custom js */
/* Activity section*/
document.querySelectorAll('.activity-swiper').forEach(function(el) {
new Swiper(el, {
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
    navigation: {
    nextEl: el.querySelector('.swiper-button-next'),
    prevEl: el.querySelector('.swiper-button-prev'),
    },
    effect: "coverflow",
    coverflowEffect: {
    rotate: 8,
    stretch: 0,
    depth: 70,
    modifier: 2,
    slideShadows: false,
    },
});
});
