# Tweet Counter #
Tweet counter counts in real-time the number of tweets occuring for a given search in the twittersphere.

_5th July 2013: Updated for Twitter API 1.1_

It is ideal for:
* Keeping tabs on what is being said about a given person, topic or keyword in real-time
* Usage in events with #hashtags to display the number of tweets using that #hashtag
* Better understanding what actions cause things to go viral on Twitter
* Tracking trending searches in real-time

![Tweet Counter Rocks!](http://simplyspiritdesign.com/img/tweet-counter.png "Tweet Counter Rocks!")

## Pre-requisites ##
You will need to have the following in order for the PHP library to work which brings back tweets:
* PHP >= 5.3.0
* [PHP cURL Extension](http://www.php.net/manual/en/curl.installation.php) - On linux this should be something like `sudo apt-get install curl libcurl3 libcurl3-dev php5-curl`

## Installation ##
There are three main steps to installing Tweet Counter, so let's take it one step at a time ;)

### 1. Download Tweet Counter ###
_Do the following installation in the folder accessible by your local webserver at http://localhost/_

Just use `git` to clone the ssh version:

    git clone git@github.com:jasdeepkhalsa/tweet-counter.git

**Or** use `git` to clone the https version:

	git clone https://github.com/jasdeepkhalsa/tweet-counter.git

**Or** download the .zip archive and unzip it to the folder `tweet-counter`:

	https://github.com/jasdeepkhalsa/tweet-counter/archive/master.zip

_Now you should have a folder called "tweet-counter" accessible from http://localhost/tweet-counter/_

### 2. Install Packages ###
On your terminal/command-line now run the following commands:

    php composer.phar self-update
    php composer.phar install

You should see something like:

    Loading composer repositories with package information
    Updating dependencies (including require-dev)
      - Installing mynetx/codebird-php (2.4.1)
        Downloading: 100%

    Writing lock file
    Generating autoload files

### 3. Configure ###
Nearly there! ;)

Now inside the `tweet-counter` folder create the file `config.json` with the following data. `config.json` is read by `tweet-counter.php`:

    {
        "consumer_key":"Your consumer key from Twitter",
        "consumer_secret":"Your consumer secret from Twitter",
        "access_token":"Your access token from Twitter",
        "access_token_secret":"Your access token secret from Twitter",
        "search_query":"q=search terms here&result_type=recent&count=100&include_entities=false"
    }
    
You can get the consumer and access tokens by registering an application at https://dev.twitter.com, and using their `OAuth tool` on any of their API end points.

Edit the `q=` value in the `"search_query"` key with your search terms. You will probably want to leave the rest of the settings the same:

    search_query":"q=I like burgers&result_type=recent&count=100&include_entities=false"

You can also add a `#hashtag` if you prefer:

    search_query":"q=#love&result_type=recent&count=100&include_entities=false"

Then simply fire up `index.html` and just wait a moment for the first results to start showing!

From then on, so long as you don't close the window or have any internet connectivity problems, the counter should continue to update indefinitely (I have tested it for 48 hours continuously without any issues).

## Customize ##

### Modify the theme ###
Edit `tweet-counter.css`. Here is a description of the main classes for styling:
* `.tw-count` - This is the main counter style
* `.tw-username` -  The username of the person who made the latest tweet
* `.tw-delimiter` - The delimeter between the username and the twitter text. Currently a colon `:`
* `.tw-text` - This is the actual text of the latest tweet

### Rename the tweet-counter.php file ###
This is pretty straightforward, just update the `tw_feed` variable in `tweet-counter.js` if you change the name of `tweet-counter.php`:

    tw_feed = '/new-folder/new-name.php'

### Update the delay interval ###
In `tweet-counter.js` the `tw_interval` sets the delay interval in milliseconds. By default this is 10 seconds just to be on the safe side, but can be set to 5 seconds - although the consequences of doing this are unknown. Change it at your own risk.

### How can I get back tweets only in the last hour, or within a specified time-frame? ###
Please replace the `for (obj in data.statuses)` loop in `tweet-counter.js` with the one in the following gist: https://gist.github.com/jasdeepkhalsa/5939630.

By default this will bring back tweets occuring in the last hour as a rolling time-frame (i.e. each time Tweet Counter runs it will reset the current time and bring back tweets from one hour behind this).

You can also set a fixed time-frame in which you would like to analyse tweets or have tweets occuring only in the last hour, but **not** as a rolling time-frame. All these settings are explained in the extensive comments in the file.

## How it works... (with magic obviously!) ##
Tweet counter polls the Twitter API using jQuery's `$.ajax` method and loops through the data each time to find any new tweets to add into a list (more technically called an `array`), which is then counted and displayed on screen.

## To Do ##
* Move to using Twitter Streaming API, after forking and updating the CodeBird library (which currently does not support all Twitter 1.1 endpoints)
* Add the new results after each request into a separate list to show multiple new tweets per update, along with some flashy jQuery effects
* Add support for plotting the tweets on a graph by their timestamp using the `D3.js` data libary (http://d3js.org/)
* Write unit and integration tests to ensure all API scenarios have fallbacks

## Change logs ##
* 0.0.2 - Added support for Twitter API 1.1 which uses OAuth using the CodeBird library. Updated tweet-counter.js code to work with new API and added comments for clarity. Removed 30 second delay, now initializes straight away. HTML updated to include HTML5 Boilerplate best practice. No changes to tweet-counter.css. Updated documentation.
* 0.0.1 - Initial commit

## Author & Version ##
v0.0.2 by Jasdeep Khalsa

## Contact ##
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)
