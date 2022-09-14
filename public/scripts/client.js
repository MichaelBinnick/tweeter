/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const { render } = require("express/lib/response");

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
        <p>${tweetObject.created_at}</p>
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
    $('#tweets').append($newTweet);
  }
};


// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweets(data);
});