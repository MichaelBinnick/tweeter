/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObject) {
  const element = $(`
    <article class="tweet">
      <header>
        <div>
          <i class="fas fa-user"></i>
          <p>${tweetObject.user.name}</p>
        </div>
        <p class="user-tag">${tweetObject.user.handle}</p>
      </header>
      <p>${tweetObject.content.text}</p>
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
      return alert('The tweet is empty!');
    }
    if (serializedData.length > 140) {
      return alert("You've entered too many characters! Please reduce your tweet.");
    }
    $.post('/tweets/', serializedData, () => {
      loadTweets();
    })
  })
});