$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$(window).scroll(function() {
    var pxFromBottom = 4400;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.menu').fadeIn('slow');
    } else {
        $('.menu').fadeOut('slow')
    }
});



$(window).scroll(function() {
    var pxFromBottom = 100;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.credit-box').fadeIn('slow');
    } else {
        $('.credit-box').fadeOut('slow')
    }
});



// $(window).scroll(function() {
//     var pxFromBottom = 3000;
//     if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
//         $('.team-js').css("color":"#535F5C");
//     } else {
//         $('.team-js').css("color":"#00FFDA")
//     }
// });
