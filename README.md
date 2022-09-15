# Tweeter

Tweeter is a simple, single-page Twitter clone.

I coded Tweeter as part of the [Lighthouse Labs](https://lighthouselabs.ca) web development bootcamp.

This repository contains everything you need to set-up, run, and use a localhost Tweeter.

## Screenshots

### Desktop Homepage
!["Desktop"](https://github.com/michaelbinnick/tweeter/blob/master/screenshots/desktop_main.png?raw=true)

### Mobile Homepage
!["Mobile"](https://github.com/michaelbinnick/tweeter/blob/master/screenshots/mobile_main.png?raw=true)

### Empty Tweet Error
!["Empty Error"](https://github.com/michaelbinnick/tweeter/blob/master/screenshots/desktop_errorempty.png?raw=true)

### Character Counter
!["Character Counter"](https://github.com/michaelbinnick/tweeter/blob/master/screenshots/char_counter.png?raw=true)

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
- Tweets are only saved locally, and will disappear after the server is stopped.

### Responsive Design
-The CSS of this app is crafted with different viewports in mind.
-Scale your browser window or use on a mobile device to see the difference.

### jQuery Usage
-jQuery is used liberally in the coding of this app.
-jQuery handles the AJAX requests involved.
-jQuery, and other pseudo-dependencies are linked in the main html file. (index.html)

