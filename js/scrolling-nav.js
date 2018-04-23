//jQuery to collapse the navbar on scroll

// lock scroll position, but retain settings for later
/*
var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);
*/

// Hide the intro words
$("h2").css({opacity : "0.0"});
$(".shrinker").css({opacity: "0.0"});

$(window).load(function() {
    // un-lock scroll position
   /*
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
    */

    // Scroll stuff
//    var previousScrollPosition = 0;

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }

//        var isScrollingDown = true;
//        var windowScrollPos = $(window).scrollTop();
//        var windowHeight = $(window).height();
//
//        // Determine scroll direction
//        if (windowScrollPos > previousScrollPosition) {
//            isScrollingDown = true;
//        } else {
//            isScrollingDown = false;
//        }
//        previousScrollPosition = windowScrollPos;
//
//        // Stars background
//        $("#christine-section").css({backgroundPosition: 'center '+windowScrollPos / 3+'px'});
//        // Bubbles background
//        $("#brownie-section").css({backgroundPosition: 'center '+-(windowScrollPos / 4)+'px'});

    });
});  // End window load

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Hide navbar when you click a menu item
$('.nav a').on('click', function(){
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
});




