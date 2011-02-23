var win = Titanium.UI.currentWindow;

// install the database
var db = Titanium.Database.install('data/jp102.sqlite','jp102');
db.close();


var search = Titanium.UI.createSearchBar({
//	borderColor:'#000000',
	showCancel:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_SEARCH,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText:'search'
});

// create table view
var tableview = Titanium.UI.createTableView({
//	data:data,
	search:search,
	searchHidden:false
});

function findWord(query, limit)
{
//some code
var db = Titanium.Database.open('jp102');

var rows = db.execute('SELECT WORD, DEFINITION FROM jp1_02 WHERE WORD LIKE ? LIMIT ?', query+'%', limit);

var data = [];

if (rows) {
while (rows.isValidRow())
    {
        //Create row                
           var row = Titanium.UI.createTableViewRow({ 
//		    backgroundColor:'#000000',  
		    backgroundImage:'/images/bgviolet.png',
                    className: 'searchResultsRow',
		    definition:rows.fieldByName('DEFINITION'),
                    word:rows.fieldByName('WORD'),
		      
                   });

           var defRow = Titanium.UI.createTableViewRow({ 
		      backgroundImage:'/images/bgblue.png',
		      borderColor:'#3D3D3D',
		      borderWidth:1,
                      className: 'defResultsRow',
		      definition:rows.fieldByName('DEFINITION'),
                      word:rows.fieldByName('WORD'),
                   });

            //Create row labels
            var rowWord =  Titanium.UI.createLabel({ 
//		color:'#FFCB05',
		color:'#ffffff',
		font:{fontSize:20,fontWeight:'bold', fontFamily:'Arial'},
		textAlign:'center',
		clickName:'word',
                text:rows.fieldByName('WORD'),
                //text style                
            });
            var rowDefinition = Titanium.UI.createLabel({
		color:'#ffffff',
		font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
		left:5,
		right:5,
		clickName:'definition',
		word:rows.fieldByName('WORD'),
              text:rows.fieldByName('DEFINITION'),
                //text style
            });             
            row.add(rowWord);
            defRow.add(rowDefinition);                       
            data.push(row);
	    data.push(defRow);
            tableview.setData(data); 
    rows.next();
    }
rows.close();
db.close(); // close db when you're done to save resources
  }
else {
	Titanium.UI.createAlertDialog({title:'Whoops!',message:'Could not find term: '+query}).show();
  }
}

search.addEventListener('change', function(e)
{
findWord(e.value, 20);
return e.value; // search string as user types

});



search.addEventListener('return', function(e)
{
//Titanium.UI.createAlertDialog({title:'Hello!',message:'return event!'}).show();
search.blur();
});

search.addEventListener('cancel', function(e)
{
search.blur();
});



// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	Titanium.UI.createAlertDialog({title:rowdata.word,message:rowdata.definition,buttonNames:['OK']}).show();
	search.blur();
});

var hide = Titanium.UI.createButtonBar({
	labels:['Hide', 'Show'],
	backgroundColor:'#336699',
	height:25,
	width:120
});


// add table view to the window
win.add(tableview);

/*
// set the focus on the search bar as soon as the window opens
win.addEventListener('open', function(e)
{
    alert('Search window just opened');
    search.focus();
});
*/

hide.addEventListener('click', function(e)
{
	Ti.API.info("search hidden = "+tableview.searchHidden);
	if (e.index == 0)
	{
		tableview.searchHidden = true;
	}
	else if (e.index == 1)
	{
		tableview.scrollToTop(0,{animated:true});
	}
});


//add menu buttons
Ti.include('/includes/menu.js');
menu.init({
    buttons: [
        {
            title: "About",
	    icon: '/images/lightbulb32.png',
            clickevent: function () { 

		var aboutWin = Titanium.UI.createWindow({  
    		title:'About',
		backgroundColor:'#fff',
		url: '/views/about.js'

});
aboutWin.open();
	 }
        }
    ]
});


//if (Ti.Platform.name == 'iPhone OS') {
//	win.setRightNavButton(hide);
//}
