$(document).ready(function() {

  console.log('Document has loaded, char counter up and running');

  $('#tweet-text').on('keyup', function() {
    const charsLeft = 140 - $(this).val().length;
    $(this).next().find('output').html(charsLeft);
    if(charsLeft < 0) {
      $(this).next().find('output').addClass('counter-below');
    }
    if(charsLeft >= 0) {
      $(this).next().find('output').removeClass('counter-below');
    }
    console.log(`${charsLeft} chars left`);
  });



});