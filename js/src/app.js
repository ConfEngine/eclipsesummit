'use strict';

(function() {
    $('document').ready(function() {
        var smoothScroll = function(section, speed) {
            $("html, body").animate({
                scrollTop: $("#" + section).offset().top
            }, speed);
            history.pushState(null, null, '#'+section);
            return false;
        };
        $('.navigation li, .mobile-nav-menu li').on('click', function() {
            var id = $(this).find('a').attr('id');
            var section = id.replace('nav-', '').replace('-mobile', '');
            smoothScroll(section, 600);
            document.ontouchmove = function(e) {
                return true;
            };
            $('.mobile-nav-menu').fadeOut(150);
            return false;
        });
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            var $navigation = $('.navigation');
            
            scroll > 535 ? $navigation.addClass('navigation-fixed', 200) : $navigation.removeClass('navigation-fixed', 200);
        });
        $('.mobile-nav').click(function() {
            $('.mobile-nav-menu').fadeIn(150);
            document.ontouchmove = function(e) {
                e.preventDefault();
            };
            return false;
        });
        $('.mobile-nav-menu-close').click(function() {
            document.ontouchmove = function(e) {
                return true;
            };
            $('.mobile-nav-menu').fadeOut(150);
            return false;
        });
    });
})();
