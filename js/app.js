$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
});


$(document).ready(function(){
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    var windowHeight = $(window).height();
    $('.slider').slider({
    	indicators: false,
    	height: (windowHeight - 90)
    });
    $('.slider').mouseenter(function(){
    	$('.slider').slider('pause');
    });
    $('.slider').mouseleave(function(){
    	$('.slider').slider('start');
    });
    $('.carousel').carousel({
        full_width: true
    });
});