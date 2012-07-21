function SavedTermsWindow(){
	
	var SavedTermsTable = require('ui/common/SavedTermsTable');
	var platform = Ti.Platform.osname;
	
	var mainTermWin = Ti.UI.createWindow({
		navBarHidden: true,	
	});
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white', 
		title: 'Saved Search Terms',
		exitOnClose: true,
		fullscreen: false
	});
	
	
	if(platform == 'iphone'){
		
		var navGroupB = Ti.UI.iPhone.createNavigationGroup({
			window: self,
		});
		
		mainTermWin.add(navGroupB);
	};
	
	var table = new SavedTermsTable(navGroupB);
	self.add(table);
	
	return platform == 'iphone' ? mainTermWin : self;	
	
};

module.exports = SavedTermsWindow;