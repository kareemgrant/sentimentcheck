function ResultsWindow(query){
	
	var ResultsTable = require('ui/common/ResultsTable');
	var platform = Ti.Platform.osname;
	
	var main = Ti.UI.createWindow({
		navBarHidden: true,	
	});

	
	var self = Ti.UI.createWindow({
		title: query,
		modal: true,
		exitOnClose: false,
		
		activity : {
			onCreateOptionsMenu : function(e) {
				var menu = e.menu;
				var menuItem = menu.add({ title : 'Save Search Term' });
				menuItem.setIcon("ui/img/floppy_disc.png");
				
				menuItem.addEventListener('click', function(e) {
					
					var appDb = require('/lib/database');
					var name = query;
			
					appDb.add(name);
			
		     		var dialog = Ti.UI.createAlertDialog({
		     			message: query + ' was saved',
		       			ok: 'ok',
		       			title: 'Save Confirmation'
		     		}).show();
				});
			}
		} 
	});
	
	if(platform === 'iphone'){
		
		var btnSave = Ti.UI.createButton({
			title: 'Save Search Term',
		});
		
		self.rightNavButton = btnSave;
		
		btnSave.addEventListener('click', function(e){
			
			var appDb = require('/lib/database');
			var name = query;
			
			appDb.add(name);
			
		     var dialog = Ti.UI.createAlertDialog({
		     	message: query + ' was saved',
		       	ok: 'ok',
		       	title: 'Save Confirmation'
		     }).show();
	      
		});
	};
	
	var table = new ResultsTable(query);
	self.add(table);
	
	return self;
};

module.exports = ResultsWindow;