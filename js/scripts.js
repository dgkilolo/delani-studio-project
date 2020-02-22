$(document).ready(function() {
  $('#img1').click(function() {
    $('.p1-showing').show();
    $('#img1').hide();
  })
  $('.p1-showing').click(function() {
    $('.p1-showing').hide();
    $('#img1').show();
  });

});