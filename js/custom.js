// jQuery for ripple click animation
$(function(){
	var ink, d, x, y;
	$(".ripplelink").click(function(e){
		if($(this).find(".ink").length === 0){
			$(this).prepend("<span class='ink'></span>");
		}

		ink = $(this).find(".ink");
		ink.removeClass("animate");

		if(!ink.height() && !ink.width()){
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({height: d, width: d});
		}

		x = e.pageX - $(this).offset().left - ink.width()/2;
		y = e.pageY - $(this).offset().top - ink.height()/2;

		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});
});
// #ripple click animation


// jqeury for Nav Transformicon
/* When user clicks the Icon */
$(".nav-toggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay-nav nav ul li a").click(function() {
  $(".nav-toggle").toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay-nav").click(function() {
  $(".nav-toggle").toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

// Preloader
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('html').delay(350).css({'overflow':'visible'});
})