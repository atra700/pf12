$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });


});



$(function () {

    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        effect: "fade",
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },     
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
          },
    })
});

// 모바일 메뉴

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('is-active');
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }

    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('is-active');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style')
    });

    $('.header .gnb').on('wheel touchmove', function (e) {
        //e.stopPropagation();
        e.preventDefault();
    })
});

$(function () {
    const mss = new Swiper('.main_content_slide', {
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        autoplay: {
            delay:1500,
            disableOnInteraction: false,
        },  
        breakpoints: {

            769: {
                slidesPerView: 3,
            },

        },
        spaceBetween: 30,
        centeredSlides: true,
                navigation: {
            nextEl: '.main_content .inner .arrows .prev',
            prevEl: '.main_content .inner .arrows .next',
        },
    })
});

$(function () {
    const mst = new Swiper('.main_product_slide', {
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        autoplay: {
            delay:1500,
            disableOnInteraction: false,
        },  
        breakpoints: {

            769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },

        },
        spaceBetween: 0,
        centeredSlides: true,
        navigation: {
            nextEl: '.main_product .inner .arrows .prev',
            prevEl: '.main_product .inner .arrows .next',
        },
    })
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    
});
