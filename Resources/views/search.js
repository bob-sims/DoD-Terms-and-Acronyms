var win = Titanium.UI.currentWindow;

// install the database
var db = Titanium.Database.install('data/jp102.sqlite','jp102');
db.close();

/*
var backImage = Titanium.UI.createLabel({
	backgroundImage:'/images/app_logo_jp1-02.png',
	height:'auto',
	width:'auto',
});

win.add(backImage);
*/
	
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
	searchHidden:false,
	//backgroundImage:'/images/app_logo_jp1-02.png',
});

var bannerText = 'JP 1.02\n\n';
	bannerText += 'DOD Dictionary of Military and Associated Terms\n';

var l2 = Titanium.UI.createLabel({
	text:bannerText,
	color:'#ffffff',
	font:{fontSize:24, fontWeight:'bold', fontFamily:'Arial'},
	bottom:30,
	left:10,
	right:10,
	width:280,
	textAlign:'center',
	height:'auto',
    width:'auto',
});

win.add(l2);

function findWord(query, limit)
{
//some code
var db = Titanium.Database.open('jp102');

var rows = db.execute('SELECT WORD, DEFINITION FROM jp1_02 WHERE WORD LIKE ? LIMIT ?', query+'%', limit);

var data = [];
//win.remove(b3);
if (rows) {
while (rows.isValidRow())
    {
        //Create row                
           var row = Titanium.UI.createTableViewRow({ 
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

var buttonRow = Titanium.UI.createTableViewRow({ 
      backgroundImage:'/images/bgblue.png',
      borderColor:'#3D3D3D',
      borderWidth:1,
      });

rows.close();
db.close(); // close db when you're done to save resources
  }
else {
	Titanium.UI.createAlertDialog({title:'Whoops!',message:'Could not find term: '+query}).show();
  }
}

search.addEventListener('change', function(e)
{

if(e.value) {
//tableview.backgroundImage = '';
win.remove(l2);
findWord(e.value, 20);
return e.value; // search string as user types
}
else {
search.blur();
}
});



search.addEventListener('return', function(e)
{
search.blur();
});

search.addEventListener('cancel', function(e)
{
tableview.setData([]);
win.add(l2);
search.blur();
});



// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	//var index = e.index;
	//var section = e.section;
	//var row = e.row;
	var rowdata = e.rowData;
	var alertWin = Titanium.UI.createAlertDialog({title:rowdata.word,message:rowdata.definition,buttonNames:['OK','Send'],cancel:0});
	alertWin.addEventListener('click', function(ev) {
	    if (ev.index == 1) { // clicked "Email"
		var emailDialog = Titanium.UI.createEmailDialog();
		emailDialog.subject = "Meaning of term: "+rowdata.word;
		emailDialog.messageBody = rowdata.word+': '+rowdata.definition+'\n';
		emailDialog.open();
	    } 
	  });

	alertWin.show();
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
//win.add(b3);

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

/*
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
		height: 'auto',
		url: '/views/about.js'
	});  

	aboutWin.open({ modal:true});

	 }
        }
    ]
});
*/

//if (Ti.Platform.name == 'iPhone OS') {
//	win.setRightNavButton(hide);
//}
