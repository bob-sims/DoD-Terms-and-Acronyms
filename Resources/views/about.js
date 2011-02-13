var win = Titanium.UI.currentWindow;
win.backgroundColor = '#dedede';

win.layout = 'vertical';


var l1 = Titanium.UI.createLabel({
	text:'Created By Bob Sims\nUS Army 53A',
	top:30,
	left:10,
	right:10,
	width:280,
	color:'#000',
	textAlign:'center',
	height:'auto',
    width:'auto',
});

win.add(l1);

var b1 = Titanium.UI.createButton({
	title:'Email: bob.sims@gmail.com',
	height:40,
	width:280,
	top:10
});

win.add(b1);

var b2 = Titanium.UI.createButton({
	title:'http://bobsims.tumblr.com',
	height:40,
	width:280,
	top:10,

});

win.add(b2);

b1.addEventListener('click', function()
{
	var emailDialog = Titanium.UI.createEmailDialog();
	emailDialog.subject = "DoD Terms and Acronyms Application";
	emailDialog.toRecipients = ['bob.sims@gmail.com'];
	emailDialog.open();

});

b2.addEventListener('click', function()
{
	Titanium.Platform.openURL('http://bobsims.tumblr.com');
});
