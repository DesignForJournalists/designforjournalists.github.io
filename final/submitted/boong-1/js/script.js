// arghs javascript codes
window.onscroll = function (e) {
  // 1/ when scrolling, if parent X is in view, add class to child Y.
  // 2/ when scrolling, if parent X is below the view, remove class from child Y.
  // 3/ when scrolling, if parent X is above the view, remove class from child Y.
  // for #box1

  $('#panel1:in-viewport').find( "#thing1" ).addClass('appear');
  $('#panel1:below-the-fold').find( "#thing1" ).removeClass('appear');
  $('#panel1:above-the-top').find( "#thing1" ).removeClass('appear');

  $('#panel1:in-viewport').find( "#text1" ).addClass('appear');
  $('#panel1:below-the-fold').find( "#text1" ).removeClass('appear');
  $('#panel1:above-the-top').find( "#text1" ).removeClass('appear');



  $('#panel2:in-viewport').find( "#thing2" ).addClass('appear');
  $('#panel2:below-the-fold').find( "#thing2" ).removeClass('appear');
  $('#panel2:above-the-top').find( "#thing2" ).removeClass('appear');

  $('#panel2:in-viewport').find( "#text2" ).addClass('appear');
  $('#panel2:below-the-fold').find( "#text2" ).removeClass('appear');
  $('#panel2:above-the-top').find( "#text2" ).removeClass('appear');



  $('#panel3:in-viewport').find( "#thing3" ).addClass('appear');
  $('#panel3:below-the-fold').find( "#thing3" ).removeClass('appear');
  $('#panel3:above-the-top').find( "#thing3" ).removeClass('appear');

  $('#panel3:in-viewport').find( "#text3" ).addClass('appear');
  $('#panel3:below-the-fold').find( "#text3" ).removeClass('appear');
  $('#panel3:above-the-top').find( "#text3" ).removeClass('appear');



  $('#panel4:in-viewport').find( "#thing4" ).addClass('appear');
  $('#panel4:below-the-fold').find( "#thing4" ).removeClass('appear');
  $('#panel4:above-the-top').find( "#thing4" ).removeClass('appear');

  $('#panel4:in-viewport').find( "#text4" ).addClass('appear');
  $('#panel4:below-the-fold').find( "#text4" ).removeClass('appear');
  $('#panel4:above-the-top').find( "#text4" ).removeClass('appear');



  $('#panel5:in-viewport').find( "#thing5" ).addClass('appear');
  $('#panel5:below-the-fold').find( "#thing5" ).removeClass('appear');
  $('#panel5:above-the-top').find( "#thing5" ).removeClass('appear');

  $('#panel5:in-viewport').find( "#text5" ).addClass('appear');
  $('#panel5:below-the-fold').find( "#text5" ).removeClass('appear');
  $('#panel5:above-the-top').find( "#text5" ).removeClass('appear');



  // $('#panel6:in-viewport').find( "#thing6" ).addClass('appear');
  // $('#panel6:below-the-fold').find( "#thing6" ).removeClass('appear');
  // $('#panel6:above-the-top').find( "#thing6" ).removeClass('appear');
  //
  // $('#panel6:in-viewport').find( "#text6" ).addClass('appear');
  // $('#panel6:below-the-fold').find( "#text6" ).removeClass('appear');
  // $('#panel6:above-the-top').find( "#text6" ).removeClass('appear');
  //

}
