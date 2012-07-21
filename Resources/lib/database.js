
//bootstrap the database
var db = Ti.Database.open('SentimentCheck');
db.execute('CREATE TABLE IF NOT EXISTS searchterms(id INTEGER PRIMARY KEY, name TEXT);');
db.close();

exports.list = function(){
	
	Ti.API.info("inside exports.list function");
	
	var db = Ti.Database.open('SentimentCheck');
	
	var termsRS = db.execute('SELECT id, name FROM searchterms');
	var rowArray = [];
	
	while(termsRS.isValidRow()){
		var termId = termsRS.fieldByName('id');
  		var termName = termsRS.fieldByName('name');
  		Ti.API.info(termId + ' ' + termName);
  		
  		var tableRow = Ti.UI.createTableViewRow({
			title: termName,
			color: '#000',
			id: termId,
			hasChild: true,
			name: termName,
		});
		
		rowArray.push(tableRow);
  		termsRS.next();
	};
	
	termsRS.close();
	db.close();
	
	Ti.API.info("rowArray is " + rowArray);
	
	return rowArray;
};

exports.add = function(name){
	
	var db = Ti.Database.open('SentimentCheck');
	db.execute('INSERT INTO searchterms (name) VALUES (?)', name);
	db.close();
	
	Ti.App.fireEvent('databaseUpdated');
};

exports.del = function(id){
	var db = Ti.Database.open('SentimentCheck'); 
	db.execute('DELETE FROM searchterms WHERE id=?',id);
	db.close();
	
	Ti.App.fireEvent('databaseUpdated');
};