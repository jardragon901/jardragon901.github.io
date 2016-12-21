//jQuery to collapse the navbar on scroll and fade in and out navbar
$('document').ready(function(){
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    });
});
var navOffset = $(".navbar-fixed-top").offset().top;

$(document).scroll(function() {

	var scrollPos = $(window).scrollTop();
	$(".navbar-fixed-top").stop(true);

	if (scrollPos > navOffset) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
				$(".navbar-fixed-top").removeClass("top-nav-default");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
				$(".navbar-fixed-top").addClass("top-nav-default");
    }
});


// smooth scrolling from links
$(".navbar-ex1-collapse a, .navbar-brand, #aboutbtn").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    }
});
