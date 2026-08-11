// AOS
AOS.init({
    once: true,
    disable: false
});

// For Auto-type
var typed = new Typed('.auto-type', {

    strings: ['Developer', 'Designer'],
    typeSpeed: 130,
    backSpeed: 130,
    loop: true,
});

// Menu-toggle
$(document).ready(function () {
    $('.menubar').click(function () {
        $('.menu').toggleClass("showmenu");
    });
    // Close menu when nav link clicked
    $('.menu a').click(function () {
        $('.menu').removeClass("showmenu");
    });
});