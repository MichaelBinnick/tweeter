# Tweeter

Tweeter is a simple, single-page Twitter clone.

This repository contains everything you need to set-up, run, and use a localhost Tweeter.

## Getting Started
(ensure you have node)
1. Fork this repository.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- (dev) nodemon

## Tweeter features

### New Tweets
- You can create a new tweet by entering text into the form provided at the top of the tweet list.
- Please ensure that your tweet fits the following criteria:
  - Is over 0 characters long, and isn't exlusively composed of space characters
  - Is under 141 characters long
- If your tweet doesn't meet these specifications, you'll receive an error message and your tweet will not get submitted.
- If your tweet is valid, it will be submitted via a POST request, the form field will empty, and the list of tweets will be refreshed with your new tweet at the top.

### 