function SavedTermsTable(navGroup){
	
	var platform = Ti.Platform.osname;
	var appDb = require('/lib/database');
	var TermDetailWindow = require('ui/common/TermDetailWindow');
	
	
	var table = Ti.UI.createTableView({
		backgroundColor: 'transparent',
	});
	
	var updateTermsTable = function(){
		table.setData(appDb.list());
	};
	
	Ti.App.addEventListener('databaseUpdated', updateTermsTable);
	
	table.setData(appDb.list());
	
	
	table.addEventListener('click', function(e){
		
		var termWin = new TermDetailWindow(e.rowData, navGroup);
		
		if(platform === 'iphone'){
			navGroup.open(termWin);
		}else{
			termWin.open();	
		}
		
	});
	
	return table;
	
};

module.exports = SavedTermsTable;


