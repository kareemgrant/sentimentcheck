function TermDetailWindow(term, navGroup){
	
	var platform = Ti.Platform.osname;
	var ResultsWindow = require('ui/common/ResultsWindow');
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		color: '#000',
		//exitOnClose: false,
		modal: true,
		navBarHidden: false
	});
	
	var termLabel = Ti.UI.createLabel({
		text: "Saved Term: " +term.name,
		font: {fontSize:22,fontFamily:'Helvetica Neue', fontWeight:'bold'},
		top: 10,
		color: '#000' 
	});
	
	var searchBtn = Ti.UI.createButton({
		title: 'Run Search',
		top: 80
	});
	
	searchBtn.addEventListener('click', function(e){
		var query = term.name;
		
		var resultsWin = new ResultsWindow(query);
			
		if (platform == 'iphone'){
			navGroup.open(resultsWin);
		}else{
			resultsWin.open();
		};
	});
	
	var deleteBtn = Ti.UI.createButton({
		title: 'Delete Term',
		top: 150
	});
	
	deleteBtn.addEventListener('click', function(e){
		var appDb = require('/lib/database');
		
		appDb.del(term.id);
		
		if(platform === 'iphone'){
			navGroup.close(self);
		}else{
			self.close();	
		}
	});
	
	self.add(termLabel);
	self.add(searchBtn);
	self.add(deleteBtn);
	
	return self;
	
};

module.exports = TermDetailWindow;

