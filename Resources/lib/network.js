exports.getTweets = function(query, callback_func){
	
	var url = "https://search.twitter.com/search.json?q=" + query + "&lang=en&result_type=mixed&rpp=10&show_user=false"; //twitter api call with query included
	
	var xhr = Ti.Network.createHTTPClient({
				
		onload: function(e){
			Ti.API.info("The status code for onload is " + this.status);
			Ti.API.info(this.responseText);
					
			var data = JSON.parse(this.responseText);
			//alert(data);
			callback_func(data);
		}, 	
				
		onerror: function(e){
	 		Ti.API.debug(e.error);
	 		alert("error");
		}, 
		timeout: 5000
	});
		
	xhr.open("GET", url);
	xhr.send();	
};

exports.getSentiment = function(tweet, index, callback_func){
		
	var jsonTweet = JSON.stringify(tweet);
	var url = "http://access.alchemyapi.com/calls/text/TextGetTextSentiment?apikey=3b916d1cca20a905533474a1960046dc8b27cd5c&text="+encodeURIComponent(jsonTweet)+"&outputMode=json&showSourceText=1";
		
	var xhr = Ti.Network.createHTTPClient({
				
		onload: function(e){
			Ti.API.info("The status code for onload is " + this.status);
			Ti.API.info(this.responseText);
			var sentimentResult = JSON.parse(this.responseText);
			callback_func(sentimentResult, index);
		}, 	
				
		onerror: function(e){
			Ti.API.debug(e.error);
			alert("error");
		}, 
		timeout: 5000
	});
		
	xhr.open("GET", url);
	xhr.send();	
};





