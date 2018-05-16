//$(function() {
//    $("p").click(function(){
//        alert("The paragraph was clicked.");
//    });
//});
//
//$(function() {
//    $("#id-of-element-interacted-upon").click(function(){
//        $( '#id-of-changed-element' ).addClass( 'class-of-added-style' );
//    });
//});
//
//$(function() {
//    $("#id-of-element-interacted-upon").click(function(){
//        if (  $( '#id-of-changed-element' ).hasClass( 'class-of-added-style' ) ) {
//                $( '#id-of-changed-element' ).removeClass( 'class-of-added-style' );
//            } else {
//                $( '#id-of-changed-element' ).addClass( 'class-of-added-style' );
//            }
//    });
//});

$(function() {
    $(".about-link").click(function(){
        $( '.about-section' ).toggleClass( 'expand' );
        $( '.about-link' ).toggleClass( 'expand' );
    });
});
