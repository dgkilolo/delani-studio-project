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
  $('#port2').hover(function() {
    $('.port2').toggle()
  });
  $('#port3').hover(function() {
    $('.port3').toggle()
  });
  $('#port4').hover(function() {
    $('.port4').toggle()
  });
  $('#port5').hover(function() {
    $('.port5').toggle()
  });
  $('#port6').hover(function() {
    $('.port6').toggle()
  });
  $('#port7').hover(function() {
    $('.port7').toggle()
  });
  $('#port8').hover(function() {
    $('.port8').toggle()
  }); 
});
function feedback() {
  var name = document.getElementById('name').value
  var message = document.getElementById('message').value
  
  if (name == "") {
    alert("You have not entered your name.")
  } else if (message == "") {
    alert('You have not entered anything into the dialog box.')
  } else   {
    alert("Thank you " +name+ ", we have received you message.")
  }
}