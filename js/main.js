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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
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

/* About section*/
$(function () {
    $('.lab-banner-btn').on('click', function (e) {
        e.preventDefault(); // prevent default anchor jump
        $('html, body').animate(
            { scrollTop: $('#about').offset().top - 70 }, // adjust -70 px for fixed navbar height
            1500,                                         // duration: 1.5 s
            'easeInOutExpo'                               // same easing curve as back-to-top button
        );
    });
});


/* Activity section*/
document.querySelectorAll('.activity-swiper').forEach(function (el) {
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



/* Publications section*/
document.addEventListener('DOMContentLoaded', function () {
    // Create the lightbox element
    if (!document.getElementById('pub-lightbox-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'pub-lightbox-overlay';
        overlay.id = 'pub-lightbox-overlay';
        overlay.innerHTML = `
      <div class="pub-lightbox-imgbox">
        <button class="pub-lightbox-close" title="Close">&times;</button>
        <img src="" alt="Full Image">
      </div>
    `;
        document.body.appendChild(overlay);
    }
    const overlay = document.getElementById('pub-lightbox-overlay');
    const overlayImg = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.pub-lightbox-close');

    // Bind click event to each pub-thumb image
    document.querySelectorAll('.pub-thumb img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function (e) {
            overlayImg.src = img.src;
            overlayImg.alt = img.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close button
    closeBtn.addEventListener('click', function () {
        overlay.classList.remove('active');
        overlayImg.src = '';
        document.body.style.overflow = '';
    });

    // Click overlay area to close
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            overlayImg.src = '';
            document.body.style.overflow = '';
        }
    });

    // Keyboard ESC to close
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            overlayImg.src = '';
            document.body.style.overflow = '';
        }
    });
});