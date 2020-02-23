$(document).ready(function() {
  $('#img1').click(function() {
    $('.p1-showing').show();
    $('#img1').hide();
  });
  $('.p1-showing').click(function() {
    $('.p1-showing').hide();
    $('#img1').show();
  });
  $('#img2').click(function() {
    $('.p2-showing').show();
    $('#img2').hide();
  });
  $('.p2-showing').click(function() {
    $('.p2-showing').hide();
    $('#img2').show();
  });
  $('#img3').click(function() {
    $('.p3-showing').show();
    $('#img3').hide();
  });
  $('.p3-showing').click(function() {
    $('.p3-showing').hide();
    $('#img3').show();
  });
  $('#port1').hover(function() {
    $('.port1').toggle()
  });
  $('#port2, #port3').hover(function() {
    $('.port2, .port3').toggle()
  });


});