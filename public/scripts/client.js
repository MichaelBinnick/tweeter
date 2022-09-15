/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escapeStr = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweetObject) {
  const element = $(`
    <article class="tweet">
      <header>
        <div id="user-card">
        <img src=${tweetObject.user.avatars} alt="user's avatar" class="avatar">
          <p>${tweetObject.user.name}</p>
        </div>
        <p class="user-tag">${tweetObject.user.handle}</p>
      </header>
      <p>${escapeStr(tweetObject.content.text)}</p>
      <footer>
        <p>${timeago.format(tweetObject.created_at)}</p>
        <div>
          <i class="fas fa-flag fa-xs"></i>
          <i class="fas fa-retweet fa-xs"></i>
          <i class="fas fa-heart fa-xs"></i>
        </div>
      </footer>
    </article>
  `);
  
  return element;
}

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $newTweet = createTweetElement(tweet);
    $('#tweets').prepend($newTweet);
  }
};


// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {

  $('#tweet-error').slideUp();

  const loadTweets = function() {
    $.ajax('/tweets/', { method: 'GET' })
    .then(function (tweetsData) {
      renderTweets(tweetsData);
    });
  };

  loadTweets();


  $('.new-tweet-form').submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    if (serializedData.length <= 5) {
      $('#tweet-error').slideUp(200, 'swing', () => {
        $('#tweet-error').text('Error: The tweet is empty!');
        $('#tweet-error').css('visibility', 'visible');
        $('#tweet-error').slideDown(2300, 'swing', () => {
        });
      })
    }
    if (serializedData.length > 140) {
      $('#tweet-error').slideUp(200, 'swing', () => {
        $('#tweet-error').text('Error: You\'ve entered too many characters! Please reduce your tweet.');
        $('#tweet-error').css('visibility', 'visible');
        $('#tweet-error').slideDown(2300, 'swing', () => {
        }); 
      })   
    }
    if (serializedData.length > 5 && serializedData.length < 141) {
      $('#tweet-error').slideUp(200, 'swing', () => {
        $('#tweet-error').css('visibility', 'hidden');
      })   
      $.post('/tweets/', serializedData, () => {
        loadTweets();
      })
    }
  })
});