$(function() {
	var tw_search = encodeURIComponent('search terms here'),
	tw_tweet = $('.tw-tweet'),
	tw_count = $('.tw-count'),
	tw_username_open = '<span class="tw-username">',
	tw_text_delimiter = '<span class="tw-delimiter">: </span>',
	tw_text_open = '<span class="tw-text">',
	tw_elem_close = '</span>',
	tw_tweets = [],
	tw_feed_results = 100,
	tw_feed = 'http://search.twitter.com/search.json?q=' + tw_search + '&rpp=' + tw_feed_results + '&result_type=recent',
	tw_interval = 30000;

	function tweetCounter() {
		$.ajax({
			url : tw_feed,
			dataType : 'jsonp',
			crossDomain : true,
			xhrFields : {
				withCredentials : true
			},
			success : function(data) {
				for (obj in data.results) {
					var tw_results = data.results[obj];
					var tw_latest = data.results[0];
					if ($.inArray(tw_results.id_str, tw_tweets) === -1) {
						tw_tweets.push(tw_results.id_str);
					};
					tw_count.html(tw_tweets.length);
					tw_tweet.html(tw_username_open + tw_latest.from_user_name + tw_elem_close + tw_text_delimiter + tw_text_open + tw_latest.text + tw_elem_close);
					// console.log(data.results); // log results, for debugging
				}
			}
		});
		// console.log(tw_tweets); // log results, for debugging
	}

	setInterval(tweetCounter, tw_interval);
	//setTimeout(tweetCounter, tw_interval); // Used for testing one off
});
