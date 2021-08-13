$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".scroll").addClass("true");
    } else {
        $(".scroll").removeClass("true");
    }
});