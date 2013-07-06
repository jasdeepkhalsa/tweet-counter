$(document).ready(function() {
	var tw_feed = '/tweet-counter/tweet-counter.php',
        tw_tweet = $('.tw-tweet'),
        tw_count = $('.tw-count'),
        tw_username_open = '<span class="tw-username">',
        tw_text_delimiter = '<span class="tw-delimiter">: </span>',
        tw_text_open = '<span class="tw-text">',
        tw_elem_close = '</span>',
        tw_tweets = [],
        tw_interval = 10000;

    var tweetCounter = function() {
		$.ajax({
			url : tw_feed,
			success : function(data) {

                var data = $.parseJSON(data); // Lets convert the returned data into a JavaScript object

                // If there's no data
                if(data.statuses.length === 0){
                    tw_tweet.html('Sorry, there are no tweets for this search :(');
                    return console.error('No tweets found');
                }

                // If there is data
                var tw_latest = data.statuses[0];
                var tw_user_name = tw_latest.user.screen_name;
                var tw_text = tw_latest.text;

                // Lets go through each tweet
				for (obj in data.statuses) {

					var tw_result = data.statuses[obj]; // This is the tweet
                    var tw_unique_id = tw_result.id_str; // This is the id of the tweet

                    // Lets add this id into our array, only if it doesn't already exist
					if ($.inArray(tw_unique_id, tw_tweets) === -1) {
						tw_tweets.push(tw_unique_id);
					};

                    // Okay we can update our page now
					tw_count.html(tw_tweets.length);
					tw_tweet.html(tw_username_open + tw_user_name + tw_elem_close + tw_text_delimiter + tw_text_open + tw_text + tw_elem_close);

					// console.log(tw_result); // log each tweet object, for debugging
				}
                // console.log(tw_tweets) // log tweets, for debugging
			}
		});
	};

    tweetCounter(); // Start the counter right away, once
	setInterval(tweetCounter, tw_interval); // Now lets schedule updates for the interval period. By default every 10 seconds.
});
