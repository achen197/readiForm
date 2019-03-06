$('.section-one').hover(function() {
    $('.container').toggleClass('one-is-active');
  });
  
  $('.section-two').hover(function() {
    $('.container').toggleClass('two-is-active');
  });
  
  $('.scroll').click(function() {
    $('html, body').animate({
          scrollTop: $(".container").offset().top
      }, 800);
  });