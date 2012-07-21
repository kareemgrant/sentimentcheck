function SearchWindow(){
	
	var platform = Ti.Platform.osname;
	var ResultsWindow = require('ui/common/ResultsWindow');
	
	var main = Ti.UI.createWindow({
		navBarHidden: true,	
	});
	
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		title: 'Search',
		exitOnClose: true,
		fullscreen: false,
		
	});
	
	var aboutLabel = Ti.UI.createLabel({
		text: "Enter in a twitter search term and SentimentCheck will instantly provide you with the mood of each tweet",
		font: {fontSize:13,fontFamily:'Helvetica Neue'},
		top: 10
	})
	
	posImage = Ti.UI.createImageView({
		image: 'ui/img/pos.gif',
		bottom: 120,
		left: 20
	});
	
	neuImage = Ti.UI.createImageView({
		image: 'ui/img/neu.gif',
		bottom: 90,
		left: 20
	});
	
	negImage = Ti.UI.createImageView({
		image: 'ui/img/neg.gif',
		bottom: 60,
		left: 20
	});
	
	posLabel = Ti.UI.createLabel({
		text: 'Tweet is positive',
		font: {fontSize:12,fontFamily:'Helvetica Neue'},
		bottom: 120,
		left: 50,
	});
	
	neuLabel = Ti.UI.createLabel({
		text: 'Tweet is neutral',
		font: {fontSize:12,fontFamily:'Helvetica Neue'},
		bottom: 90,
		left: 50,
	});
		
	negLabel = Ti.UI.createLabel({
		text: 'Tweet is negative',
		font: {fontSize:12,fontFamily:'Helvetica Neue'},
		bottom: 60,
		left: 50,
	});
	
	legendLabel = Ti.UI.createLabel({
		text: 'Mood Icons',
		font: {fontSize:14,fontFamily:'Helvetica Neue', fontWeight:'bold'},
		bottom: 140,
		left: 20,
	});

	var button = Ti.UI.createButton({
	 	title: 'Search',
	 	top: 120
	});
	
	var searchBox = Ti.UI.createTextField({
		top: 80,
		width: 250,
		height: 30,
		borderColor: '#000',
		borderRadius: 3,
		paddingLeft: 2
	});
	
	self.add(aboutLabel);
	self.add(button);
	self.add(searchBox);
	self.add(posImage);
	self.add(neuImage);
	self.add(negImage);
	self.add(posLabel);
	self.add(neuLabel);
	self.add(negLabel);
	self.add(legendLabel);
	
	
	button.addEventListener('click', function(e){
		if(searchBox.value != null){
			var query = searchBox.value;
			
			//var newWin = new AddWindow(navGroup);
			var resultsWin = new ResultsWindow(query);
			
			if (platform == 'iphone'){
				navGroup.open(resultsWin);
			}else{
				resultsWin.open();
			};
		};
	});
	
	
	if(platform == 'iphone'){
		
		var navGroup = Ti.UI.iPhone.createNavigationGroup({
			window: self,
		});
		
		main.add(navGroup);
	};
	
	return platform == 'iphone' ? main : self;
}

module.exports = SearchWindow;