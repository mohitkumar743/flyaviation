






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


function paymentpage() {
    // for  instalment purpose 15000

    window.open("https://rzp.io/l/eHGz92wh");

}
function registrationpaymentpage() {
    // for  registratin purpose 1000
    window.open("https://rzp.io/l/eHGz92wh");
}

// generate reference no
let refrence = document.getElementById("refrence");
function generate() {
    if(refrence){
        document.getElementById("desible").disabled = false;
    
    }
    
    // alert("jgdkgndf dgnvdkj") if(!!console){
    // your code
    let minm = 10000;
    let maxm = 99999;
    repis = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    alert(" please note the refrence number for future use :-" + repis);
    refrence.innerHTML = (repis);

}

if(!!refrence){
    document.getElementById("desible").disabled = true;
}


