$(document).ready(function () {
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });


  $(function() {
    $('nav a[href*="#"]').on('click', function() {
        $("HTML, BODY").animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
  });

  $(function() {
    $("#up").on('click', function() {
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 2000);
    });
  });

  $(function() {
    $("#down").on('click', function() {
        $("HTML, BODY").animate({
            scrollTop: 750
        }, 1000);
    });
  });



  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });

});
