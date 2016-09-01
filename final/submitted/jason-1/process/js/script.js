
function makeIndiPink() {
    $( '#indi-box-id' ).addClass( 'make-pink' );
}

function makeIndiBrown() {
    $( '#indi-box-id' ).removeClass( 'make-pink' );
}

function makeSpamRed() {
  $( '#spam-id' ).addClass( 'make-red' );
}

function makeSpamPink() {
  $( '#spam-id' ).removeClass( 'make-red')
}


function makeIndiPink() {
  if (  $( '#indi-box-id' ).hasClass( 'make-pink') ) {
    $( '#indi-box-id' ).removeClass( 'make-pink' );
  } else {
    $( '#indi-box-id' ).addClass( 'make-pink' );
  }
}

function meatlessBurger() {
  if (  $( '#nav-id' ).hasClass( 'appear' ) ) {
    $( '#nav-id' ).removeClass( 'appear' );
    } else {
      $( '#nav-id' ).addClass( 'appear' );
    }
}

function newYC() {
  if (  $( '#nav-id' ).hasClass( 'appear' ) ) {
    $( '#nav-id' ).removeClass( 'appear' );
    } else {
      $( '#nav-id' ).addClass( 'appear' );
    }
}
