$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

/*$(document).ready(function(){
  //Take your div into one js variable
  var div = $("#divToShowHide");
  //Take the current position (vertical position from top) of your div in the variable
  var pos = div.position();
  //Now when scroll event trigger do following
  $(window).scroll(function () {
   var windowpos = $(this).scrollTop();
   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
   // I am taking 100px scroll, you can take whatever you need
    if (windowpos >= 200) {
     div.fadeIn(500);
  }
  else {
    div.fadeOut(500);
   }
   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
 });
});*/

$(window).scroll(function() {
    var pxFromBottom = 350;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.divToShowHide').fadeOut('slow');
    } else {
        $('.divToShowHide').fadeIn('slow')
    }
});
