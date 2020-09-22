$(document).ready(function(){
    // $(function(){
    //     $('.button-menu').click(function(event) {
    //         event.preventDefault();
    //         $('.button-menu__line').toggleClass('button-menu__line_active');
    //         $('.header-menu').toggleClass('header-menu_active');
    //     });
    //     $('.section-footer__item').click(function(event) {
    //         $(this).toggleClass('section-footer__item_active');
    //         $(this).children('.footer-title').toggleClass("footer-title_active");
    //     });
    // });

    $('.button-menu').click(function(event) {
        event.preventDefault();
        $('.button-menu__line').toggleClass('button-menu__line_active');
        $('.header-menu').toggleClass('header-menu_active');
    });
    $('.section-footer__item').click(function(event) {
        $(this).toggleClass('section-footer__item_active');
        $(this).children('.footer-title').toggleClass("footer-title_active");
    });


    //SLICK HEAD SLIDER
    $('.header-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});