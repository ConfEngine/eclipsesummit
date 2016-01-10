'use strict';

(function() {
    $('document').ready(function() {

        // Scroll smoothly across iterface blocks
        var smoothScroll = function(section, speed) {
            $("html, body").animate({
                scrollTop: $(section).offset().top
            }, speed);
            history.pushState(null, null, section);
            return false;
        };

        // Activate smoothscroll and list item selection
        $('.navigation li, .mobile-nav-menu li, a.register-btn').on('click', function() {
            var id = $(this).attr('id');
            if(id) {
                // Add class to selected item and remove class from other items
                $(this).addClass('nav-selected').siblings().removeClass('nav-selected');
                var section = id.replace('nav-', '').replace('-mobile', '');
                smoothScroll('#'+section, 600);
                document.ontouchmove = function(e) {
                    return true;
                };
                $('.mobile-nav-menu').fadeOut(150);
                return false;
            }
            else {
                var href = $(this).attr('href');
                if(href) {
                    href = href.replace('#','');
                    $('#nav-'+href+', #nav-'+href+'-mobile').addClass('nav-selected').siblings().removeClass('nav-selected');
                    smoothScroll($.attr(this, 'href'), 600);
                    return false;
                }
            }
        });

        // Set scrollspy parameters
        var lastId,
        topMenu = $(".navigation"),
        topMenuHeight = topMenu.outerHeight()+15,
        menuItems = topMenu.find("li.scrollspy-item").find('a'),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

        // Scroll event trigger
        $(window).scroll(function(event) {
            var fromTop = $(this).scrollTop()+topMenuHeight;
            // Get id of current scroll item
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop)
                    return this;
            });
           
            // Get the id of the current element
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";
           
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("nav-selected")
                    .end().filter("[href=#"+id+"]").parent().addClass("nav-selected");
            }                   

            // Trigger fixed navigation menu
            var scroll = $(window).scrollTop();
            var $navigation = $('.navigation');
            scroll > 514 ? $navigation.addClass('navigation-fixed', 200) : $navigation.removeClass('navigation-fixed', 200);
        });

        // Mobile navigation touch event disable scroll
        $('.mobile-nav').click(function() {
            $('.mobile-nav-menu').fadeIn(150);
            document.ontouchmove = function(e) {
                e.preventDefault();
            };
            return false;
        });

        // Mobile navigation touch event enable scroll
        $('.mobile-nav-menu-close').click(function() {
            document.ontouchmove = function(e) {
                return true;
            };
            $('.mobile-nav-menu').fadeOut(150);
            return false;
        });

        //
        $('.text-toggle-expand').click(function() {
            $(this).hide();
            $(this).prev('.text-toggle').css('height', 'auto');
        });
    });
})();
