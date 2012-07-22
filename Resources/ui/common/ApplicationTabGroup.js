exports.ApplicationTabGroup = function(){
	
	var AppTabGroup = Ti.UI.createTabGroup();
	var SearchWindow = require('ui/common/SearchWindow');
	var SavedTermsWindow = require('ui/common/SavedTermsWindow');
	var AboutWindow = require('ui/common/AboutWindow');

	
	var searchWin = new SearchWindow();
	var savedTermsWin = new SavedTermsWindow();
	var aboutWin = new AboutWindow();
	
	
	
	var tab1 = Titanium.UI.createTab({  
    	title:'Search',
    	window:searchWin,
    	icon:'images/magnifying_glass.png'
	});
	
	var tab2 = Titanium.UI.createTab({  
    	title:'Saved Searches',
    	window:savedTermsWin,
    	icon:'images/floppy_disc.png'
	});
	
	var tab3 = Titanium.UI.createTab({  
    	title:'About',
    	window:aboutWin,
    	icon:'images/light_info.png'
	});

	AppTabGroup.addTab(tab1);
	AppTabGroup.addTab(tab2);
	AppTabGroup.addTab(tab3);
		
	return AppTabGroup;
};
