/* --- NAV --- */
// drop nav appears after scroll down
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if ( (y > 800) && (!$( '.mini-promo' ).hasClass('appear')) ) {
        $('nav').addClass( 'appear' );
    } else {
        $('nav').removeClass( 'appear' );
    }
});

/* --- MINI PROMO --- */
function miniPromoAppear() {
    $( '.mini-promo' ).addClass( 'appear' );
    $( 'article' ).addClass( 'slide' );
    $('nav').removeClass( 'appear' );
}
function miniPromoHide() {
    $( '.mini-promo' ).removeClass( 'appear' );
    $( 'article' ).removeClass( 'slide' );
    if ( (y > 800) ) {
        $('nav').addClass( 'appear' );
    }
}

/* --- SECTIONS NAV --- */
function sectionsAppear() {
    $( '.sections-nav' ).addClass( 'appear' );
}
function sectionsHide() {
    $( '.sections-nav' ).removeClass( 'appear' );
}

/* --- MEDIA OVERLAY --- */
// media overlay appears
function mediaOverlayAppear( mediaId ) {
    $( mediaId ).addClass( 'appear' );
    // disable scrolling
        //    $('html, body').on({
        //        'mousewheel': function(e) {
        //            e.preventDefault();
        //        }
        //    })
    // lazyload any image in overlay
    lazyloadOverlayImg( mediaId );
}
// media overlay fades
function mediaOverlayFade() {   
    // applied only if clicks outside video
    $( '.panel-close' ).on('click', ':not(.youtube-container)', function (e) {
         // media panel loses appear class
         $( '.media-panel-overlay' ).removeClass( 'tranzero appear' );
        // re-enable scrolling
            // $('html, body').unbind('mousewheel');
        // pause video on closing overlay
        $( '.media-panel-overlay' ).find('iframe').attr('src','');
    }); 
} 
// next panel
function mediaNextPanel(clicked, media) {
    // out with the old panel
    $( '.media-panel-overlay' ).removeClass( 'appear' );
    // in with the new panel
    $(document).on('click', clicked, function () {
        $( this ).closest(".media-panel-overlay").nextAll(media + ".media-panel-overlay").first().addClass('tranzero appear');
        // lalo-3/4
        $( this ).closest(".media-panel-overlay").nextAll(media + ".media-panel-overlay").first().find('img.lazy').lazyload({
            // include images outside regular flow sequence
            failure_limit : 20
        });
        // reset variables
        clicked = undefined;
        media = undefined;
    });
    // pause video on closing overlay
    $( '.media-panel-overlay' ).find('iframe').attr('src','');
}
// prev panel
function mediaPrevPanel(clicked, media) {
    // out with the old panel
    $( '.media-panel-overlay' ).removeClass( 'appear' );
    // in with the new panel
    $(document).on('click', clicked, function () {
        $( this ).closest(".media-panel-overlay").prevAll(media + ".media-panel-overlay").first().addClass('tranzero appear');
        // lalo-4/4
        $( this ).closest(".media-panel-overlay").prevAll(media + ".media-panel-overlay").first().find('img.lazy').lazyload({
            // include images outside regular flow sequence
            failure_limit : 20
        });
        // reset variables
        clicked = undefined;
        media = undefined;
    });
    // pause video on closing overlay
    $( '.media-panel-overlay' ).find('iframe').attr('src','');
}

/* --- SOURCE APPEAR --- */
// media overlay appears
function sourceAppear( srcId ) {
    $( srcId ).addClass( 'appear' );
}
// media overlay fades
function sourceFade( srcId ) {
    $( srcId ).removeClass( 'appear' );
}

/* --- LAZY LOAD (lalo) --- */
/* there are 4 cases of enabling lalo: 
1/4 – on doc load for all images in regular flow sequence. 
2/4 - when clicking to an overlay from the regular flow sequence. 
3/4 - when clicking to next panel from current panel
4/4 - when clicking to prev panel from current panel */
// lalo-1/4
$(function() {
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });
});
// lalo-2/4 – called under the function: mediaOverlayAppear( mediaId ) 
function lazyloadOverlayImg( mediaId ) {
    // note: variable applies this function to selected panel, only
    $( mediaId ).find('img.lazy').lazyload({
        // include images outside regular flow sequence
        failure_limit : 20
    });
}

/* --- SMOOTH SCROLL --- */
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

/* --- ON SCROLL JS --- */
// http://www.appelsiini.net/projects/viewport
window.onscroll = function (e) {  
    // section icon animates
    $('#s-adversity:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-strategies:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-skills:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-stress:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-parents:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-trauma:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-neglect:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-intervention:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-attachment:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-visiting:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-beyond:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-blocks:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-discipline:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-incentives:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-motivation:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-assessment:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-messages:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-mindsets:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-relationships:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-pedagogy:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-challenge:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-learning:in-viewport').find( ".section-icon" ).addClass('anim');
    $('#s-solutions:in-viewport').find( ".section-icon" ).addClass('anim');
}