function ResultsTable(query){
	
	var network = require('/lib/network');
	var tweetResults = [];
	var rowArray = [];
	
	var table = Ti.UI.createTableView({
		backgroundColor: 'transparent',
	});
	
	
	var processTweets = function(data){
		
		Ti.API.info("In processTweets function");

		var resultsArray = [];
		for(var i = 0; i < data.results.length; i++){
				var result = {};
				result.text = data.results[i].text;
				result.created_at = data.results[i].created_at;
				result.user = data.results[i].from_user;
			
				resultsArray.push(result);	
		};
		
		tweetResults = resultsArray;
		extractTweetText();	
	};
	
	var extractTweetText = function(){
		
		Ti.API.info("In extractTweetText function");
		
		for(var i = 0; i < tweetResults.length; i++){
			network.getSentiment(tweetResults[i].text, i, processSentiment);
		}
	}; 
	
	var processSentiment = function(data, index){
		
		Ti.API.info("In processSentiment function");
		
		tweetResults[index]["mood"] = data.docSentiment.type;
		tweetResults[index]["score"] = data.docSentiment.score;
		addDataToRow(tweetResults[index]);
	};
	
	
	
	var populate = function(){
		Ti.API.info("In populate function");
		table.setData(rowArray);
	};
	
	var addDataToRow = function(data){
		
		Ti.API.info("In addDataToRow function");
		
		var img = '';
		
		if(data.mood == 'positive'){
			img = '/images/pos.gif';
		}else if(data.mood == 'negative') {
			img = '/images/neg.gif';
		}else{
			img = '/images/neu.gif';
		}
		
		var resultsRow = Ti.UI.createTableViewRow({
			backgroundColor: 'white',
			leftImage: img
		});
		
		var textLabel = Ti.UI.createLabel({
			text: data.text,
			font: {fontSize:14,fontFamily:'Helvetica Neue'},
			top: 20,
			color: '#000',
			left: 40,
		});
		
		var nameLabel = Ti.UI.createLabel({
			text: data.user,
			font: {fontSize:14,fontFamily:'Helvetica Neue', fontWeight:'bold'},
			top: 2,
			left: 40,
			color: '#000'
		});
		
		var dateLabel = Ti.UI.createLabel({
			text: parseTwitterDate(data.created_at),
			font: {fontSize:12,fontFamily:'Helvetica Neue'},
			top: 2,
			right: 20,
			color: '#000'
		}); 
		
		
		resultsRow.add(textLabel);
		resultsRow.add(nameLabel);
		resultsRow.add(dateLabel);
		rowArray.push(resultsRow);
		Ti.App.fireEvent('updateTable');
	};
	
	Ti.App.addEventListener('updateTable', populate);
	
	
	// found this code here: http://darklaunch.com/2010/05/21/parse-twitter-created-at-value-into-friendly-time-format-relative-time-time-ago
	var parseTwitterDate = function (a) {
	    var b = new Date();
	    var c = new Date(a);
	    var d = b - c;
	    var e = 1000,
	        minute = e * 60,
	        hour = minute * 60,
	        day = hour * 24,
	        week = day * 7;
	    if (isNaN(d) || d < 0) {
	        return ""
	    }
	    if (d < e * 7) {
	        return "right now"
	    }
	    if (d < minute) {
	        return Math.floor(d / e) + " seconds ago"
	    }
	    if (d < minute * 2) {
	        return "about 1 minute ago"
	    }
	    if (d < hour) {
	        return Math.floor(d / minute) + " minutes ago"
	    }
	    if (d < hour * 2) {
	        return "about 1 hour ago"
	    }
	    if (d < day) {
	        return Math.floor(d / hour) + " hours ago"
	    }
	    if (d > day && d < day * 2) {
	        return "yesterday"
	    }
	    if (d < day * 365) {
	        return Math.floor(d / day) + " days ago"
	    } else {
	        return "over a year ago"
	    }
	};
	
	network.getTweets(query, processTweets);
	table.setData(rowArray);
	
	return table;
	
};

module.exports = ResultsTable;
