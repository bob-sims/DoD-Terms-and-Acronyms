// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#002d4f');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var homeWin = Titanium.UI.createWindow({  
    title:'Term Search',
    //backgroundImage:'/images/background.png',
    backgroundColor:'#002d4f',
    url: 'views/search.js'
});

var homeTab = Titanium.UI.createTab({  
    icon:'images/search32.png',
    title:'Search',
//    backgroundColor:'#000000',
//    backgroundColor:'#002d4f',
    barColor:'#002d4f',
    font:{fontFamily:'Trebuchet MS',fontSize:10,fontWeight:'bold'},
    shadowColor:'#eee',shadowOffset:{x:0,y:1},
    window:homeWin
});

/*

// create the label
var titleLabel = Titanium.UI.createLabel({
    color:'#000',
    height:18,
    width:210,
    top:10,
    text:'A Trebuchet TItle',
    textAlign:'center',
    font:{fontFamily:'Trebuchet MS',fontSize:10,fontWeight:'bold'},
    shadowColor:'#eee',shadowOffset:{x:0,y:1}
});
 
// associate label to title
homeWin.setTitleControl(titleLabel);


//
// create controls tab and root window
//

var aboutWin = Titanium.UI.createWindow({  
    title:'About',
    backgroundColor:'#fff',
    url: 'views/about.js'

});

var aboutTab = Titanium.UI.createTab({  
    icon:'images/lightbulb32.png',
    title:'About',
    backgroundColor:'#002d4f',
    window:aboutWin
});
*/



//
//  add tabs
//
tabGroup.addTab(homeTab);  
//tabGroup.addTab(aboutTab);  


// open tab group
tabGroup.open();



