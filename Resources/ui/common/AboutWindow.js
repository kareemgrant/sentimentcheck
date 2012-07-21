function AboutWindow(query){
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		title: 'About'
	});
	
	var appLabel = Ti.UI.createLabel({
		text: 'App Name:',
		left: 10,
		top: 30,
		font: {fontSize:13,fontFamily:'Helvetica Neue', fontWeight:'bold'},
	});
	
	var appLabelText = Ti.UI.createLabel({
		text: 'SentimentCheck',
		left: 100,
		top: 30,
		font: {fontSize:13,fontFamily:'Helvetica Neue'},
	});
	
	var createdByLabel = Ti.UI.createLabel({
		text: 'Created by:',
		left: 10,
		top: 50,
		font: {fontSize:13,fontFamily:'Helvetica Neue', fontWeight:'bold'},
	});
	
	var createdByLabelText = Ti.UI.createLabel({
		text: 'Kareem Grant',
		left: 100,
		top: 50,
		font: {fontSize:13,fontFamily:'Helvetica Neue'},
	});
	
	var apiLabel = Ti.UI.createLabel({
		text: 'APIs Used:',
		left: 10,
		top: 70,
		font: {fontSize:13,fontFamily:'Helvetica Neue', fontWeight:'bold'},
	});
	
	var apiLabelText = Ti.UI.createLabel({
		text: 'Twitter Search API & AlchemyAPI (Sentiment)',
		left: 100,
		top: 70,
		font: {fontSize:13,fontFamily:'Helvetica Neue'},
	});
	
	self.add(appLabel);
	self.add(appLabelText);
	self.add(createdByLabel);
	self.add(createdByLabelText);
	self.add(apiLabel);
	self.add(apiLabelText);
	
	
	return self;
};

module.exports = AboutWindow;