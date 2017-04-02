$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<style type='text/css'>  body{width:100% !important;max-width:100% !important;}  </style>"));
});