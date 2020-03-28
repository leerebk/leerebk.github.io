$(window).resize(scroll_nav);
$(document).ready(scroll_nav)
$(window).scroll(scroll_nav)
$(".see-more").click(function(e) {
  var offset = 50;
  e.preventDefault();
  $('html,body').animate({
      scrollTop: $("#about").offset().top - offset}, 1000);
});
var scrollLink = $('.scroll');

// Smooth scrolling
scrollLink.click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 50
    }, 1000);
});
function scroll_nav() {
    var scrollTop = 0
    scrollTop = $(window).scrollTop();
    
    if (scrollTop > 100) {
      $('#navbar').addClass('scroll_nav')
      $('#navbar').addClass('navbar-dark')
      $('#navbar').removeClass('navbar-light')
      $('.scroll').css({
        "color": "#474547"
      })
      $('.navbar').css({
        "padding-top": "20px",
        "padding-bottom": "20px",
        "color": "#ffffff"
      })
    } else if (scrollTop < 100) {
      $('#navbar').removeClass('scroll_nav')
      $('#navbar').removeClass('navbar-dark')
      $('#navbar').addClass('navbar-light')
      $('.scroll').css({
        "color": "white",
        "padding-top": "0px",
        "padding-bottom": "0px",
      })
      $('.navbar').css({
        "padding-top": "40px"
      })
    }
}