// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#002d4f');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var homeWin = Titanium.UI.createWindow({  
    title:'Term Search',
    //backgroundImage:'/images/app_logo_jp1-02.png',
    backgroundColor:'#002d4f',
    url: 'views/search.js'
});

var homeTab = Titanium.UI.createTab({  
    icon:'images/search32.png',
    title:'Find DoD Terms',
//    backgroundColor:'#000000',
//    backgroundColor:'#002d4f',
    barColor:'#002d4f',
    font:{fontFamily:'Trebuchet MS',fontSize:10,fontWeight:'bold'},
    shadowColor:'#eee',shadowOffset:{x:0,y:1},
    window:homeWin
});

var aboutWin = Titanium.UI.createWindow({  
    title:'About',
    //backgroundImage:'/images/background.png',
    backgroundColor:'#002d4f',
    url: 'views/about.js'
});

var aboutTab = Titanium.UI.createTab({  
    icon:'images/lightbulb32.png',
    title:'About This App',
//    backgroundColor:'#000000',
//    backgroundColor:'#002d4f',
    barColor:'#002d4f',
    font:{fontFamily:'Trebuchet MS',fontSize:10,fontWeight:'bold'},
    shadowColor:'#eee',shadowOffset:{x:0,y:1},
    window:aboutWin
});


//
//  add tabs
//
tabGroup.addTab(homeTab);  
tabGroup.addTab(aboutTab);  


// open tab group
tabGroup.open();


