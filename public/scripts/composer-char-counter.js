$(document).ready(function() {

  $('#tweet-text').on('input', function() {
    const charsLeft = 140 - $(this).val().length;
    $(this).next().find('output').html(charsLeft);
    
    // resize textarea to accomodate height of total text
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";

    // apply red text when counter is below zero
    if(charsLeft < 0) {
      $(this).next().find('output').addClass('counter-below');
    }

    // when counter goes above 0 again, make text normal
    if(charsLeft >= 0) {
      $(this).next().find('output').removeClass('counter-below');
    }
  });

});