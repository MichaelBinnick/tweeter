$(document).ready(function() {

  // add styling when mouse is on tweet
  $('#tweets').on('mouseenter', function() {
    $(this).addClass('tweets-hover');
  });

  // remove styling when mouse goes off tweet
  $('#tweets').on('mouseleave', function() {
    $(this).removeClass('tweets-hover');
  });

  // add styling when mouse is on icon
  $('.fas').on('mouseenter', function() {
    $(this).addClass('icon-hover');
  });

  // remove styling when mouse goes off icon
  $('.fas').on('mouseleave', function() {
    $(this).removeClass('icon-hover');
  });

});