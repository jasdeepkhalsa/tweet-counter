# Tweet Counter #
Tweet counter counts in real-time\* the number of tweets occuring for a given search in the twittersphere.

It is ideal for:
* Keeping tabs on what is being said about a given person, topic or keyword in real-time*
* Usage in events with #hashtags to display the number of tweets using that #hashtag
* Better understanding what actions cause things to go viral on Twitter
* Tracking trending searches in real-time\*

![Tweet Counter Rocks!](http://simplyspiritdesign.com/img/tweet-counter.png "Tweet Counter Rocks!")

## Installation ##
Just use `git` to clone:

    git clone git://github.com/jasdeepkhalsa/tweet-counter.git

Or download a zip, extract it and view the `index.html` in your local browser/web server:

    https://github.com/jasdeepkhalsa/tweet-counter/archive/master.zip

## Usage ##
### Change the search terms ###
Edit `tweet-counter.js` and add your twitter search terms into the `tw_search` variable:

	var tw_search = encodeURIComponent('search terms here')
	
You can also add a `#hashtag` if you prefer:

	var tw_search = encodeURIComponent('#hashtag')
	
Or even `#multiple #hashtags`:

	var tw_search = encodeURIComponent('#multiple #hashtags')
	
Then simply fire up `index.html` and just wait 30 seconds for the first results to start showing!

From then on, so long as you don't close the window or have any internet connectivity problems, the counter should continue to update indefinitely (I have tested it for 48 hours continuously without any issues). 

### Modify the theme ###
Edit `tweet-counter.css`. Here is a description of the main classes for styling:
* `.tw-count` - This is the main counter style
* `.tw-username` -  The username of the person who made the latest tweet
* `.tw-delimiter` - The delimeter between the username and the twitter text. Currently a colon `:`
* `.tw-text` - This is the actual text of the latest tweet

## How it works... (with magic obviously!) ##
Tweet counter polls the Twitter API (a JSONP service) using JQuery's `$.ajax` method and loops through the data each time to find any new tweets to add into a list (more technically called an `array`), which is then counted and displayed on screen.

\*Tweet counter will only poll the Twitter API every 30 seconds (due to API usage limitations). If you try to poll more frequently your IP address may get blocked by Twitter. Ouch.

## To Do ##
* Add better error handling since JSONP has no error handling and JQuery's JSONP support is also limited
* Add the new results after each request into a separate list to show multiple new tweets per update, along with some flashy jQuery effects
* Add support for plotting the tweets on a graph by their timestamp using the `D3.js` data libary (http://d3js.org/)

## Author & Version ##
v0.0.1 by Jasdeep Khalsa

## Contact ##
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)