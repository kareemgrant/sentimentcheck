var globals = {};

//create IIFE to create private scope
(function(){
	
	//system message the details platform name
	Ti.API.debug("The platform being used by this app is " + Ti.Platform.name);
	
	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup').ApplicationTabGroup;
	
	//create a new instance of the ApplicationTabGroup and open it
	globals.tabs = new ApplicationTabGroup();
	globals.tabs.open();
})();

