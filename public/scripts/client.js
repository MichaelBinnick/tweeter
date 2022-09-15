/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// function to prevent HTML injection from new tweet submissions
const escapeStr = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// create a new tweet DOM element using data
  // note use of escapeStr to prevent html injection
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

// calls createTweetElement on each tweet in a dataset
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $newTweet = createTweetElement(tweet);
    $('#tweets').prepend($newTweet);
  }
};


// code to run after document is generated in browser
$(document).ready(function() {

  // hides the tweet error element out of view right away
  $('#tweet-error').slideUp();

  // pulls tweets using async AJAX request
  const loadTweets = function() {
    $.ajax('/tweets/', { method: 'GET' })
    .then(function (tweetsData) {
      
      // callback will inject retrieved tweets into render function
      renderTweets(tweetsData);
    });
  };

  // call function to show tweets on page
  loadTweets();

  // listen for submission of new tweet
  $('.new-tweet-form').submit(function(event) {
    event.preventDefault();

    // encode text from form field
    const serializedData = $(this).serialize();
    
    // error for no-characters tweet submission
    if (serializedData.length <= 5) {
      
      // reset error box if it's visible
      $('#tweet-error').slideUp(200, 'swing', () => {
        
        // display error
        $('#tweet-error').text('Error: The tweet is empty!');
        $('#tweet-error').css('visibility', 'visible');
        $('#tweet-error').slideDown(2300, 'swing', () => {
        });
      })
    }

    // see above for error logic comments
    if (serializedData.length > 140) {
      $('#tweet-error').slideUp(200, 'swing', () => {
        $('#tweet-error').text('Error: You\'ve entered too many characters! Please reduce your tweet.');
        $('#tweet-error').css('visibility', 'visible');
        $('#tweet-error').slideDown(2300, 'swing', () => {
        }); 
      })   
    }

    // happy-path for tweet submission
    if (serializedData.length > 5 && serializedData.length < 141) {
      
      // hide error message if it's visible
      $('#tweet-error').slideUp(200, 'swing', () => {
        $('#tweet-error').css('visibility', 'hidden');
      })   

      // make AJAX POST request with new tweet's encoded data
      $.post('/tweets/', serializedData, () => {
        
        // re-load tweets with new one after
        loadTweets();
      })
    }
  })
});