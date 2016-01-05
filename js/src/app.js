'use strict';

(function() {
    $('document').ready(function() {
        $('#nav-about, #nav-speakers, #nav-schedule, #nav-hack, #nav-contact, #nav-register, #nav-sponsors, #nav-venue, #nav-about-mobile, #nav-speakers-mobile, #nav-schedule-mobile, #nav-contact-mobile, #nav-sponsors-mobile, #nav-hack-mobile, #nav-register-mobile, #nav-venue-mobile').on('click', function() {
            var id = $(this).attr('id');
            var smoothScroll = function(section, speed) {
                $("html, body").animate({
                    scrollTop: $("#" + section).offset().top
                }, speed);
                return false;
            };
            switch (id) {
                case 'nav-about':
                case 'nav-about-mobile':
                    smoothScroll('about', 600);
                    break;
                case 'nav-speakers':
                case 'nav-speakers-mobile':
                    smoothScroll('speakers', 600);
                    break;
                case 'nav-schedule':
                case 'nav-schedule-mobile':
                    smoothScroll('schedule', 600);
                    break;
                case 'nav-contact':
                case 'nav-contact-mobile':
                    smoothScroll('contact', 600);
                    break;
                case 'nav-register':
                case 'nav-register-mobile':
                    smoothScroll('register', 600);
                    break;
                case 'nav-hack':
                case 'nav-hack-mobile':
                    smoothScroll('hack', 600);
                    break;
                case 'nav-sponsors':
                case 'nav-sponsors-mobile':
                    smoothScroll('sponsors', 600);
                    break;
                case 'nav-venue':
                case 'nav-venue-mobile':
                    smoothScroll('venue', 600);
                    break;
            }
            document.ontouchmove = function(e) {
                return true;
            }
            $('.mobile-nav-menu').fadeOut(150);
            return false;
        });
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            scroll > 535 ? $('.navigation').addClass('navigation-fixed', 200) : $('.navigation').removeClass('navigation-fixed', 200);
        });
        $('.mobile-nav').click(function() {
            $('.mobile-nav-menu').fadeIn(150);
            document.ontouchmove = function(e) {
                e.preventDefault();
            }
            return false;
        });
        $('.mobile-nav-menu-close').click(function() {
            document.ontouchmove = function(e) {
                return true;
            }
            $('.mobile-nav-menu').fadeOut(150);
            return false;
        });
    });
})();
