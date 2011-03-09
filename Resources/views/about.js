var win = Titanium.UI.currentWindow;
win.backgroundColor = '#002d4f';

win.layout = 'vertical';

var aboutText = 'This simple app finds definitions for 10,300+ US Department of Defense-approved acronyms and terms as listed in JP 1.02, ';
	aboutText += 'the "DOD Dictionary of Military and Associated Terms", current as of December 2010.\n\n';
	aboutText += 'Developer: Bob Sims, with help and inspiration from several others.\n';
	aboutText += 'Disclaimer: this app provided as-is, not officially endorsed or supported by the US Army, the US Department of Defense, or NATO.\n';



var l1 = Titanium.UI.createLabel({
	text:aboutText,
	color:'#ffffff',
	font:{fontSize:14, fontWeight:'normal', fontFamily:'Arial'},
	top:10,
	left:10,
	right:10,
	width:280,
	textAlign:'left',
	height:'auto',
    width:'auto',
});

win.add(l1);

var b1 = Titanium.UI.createButton({
	title:'Email Developer',
	height:40,
	width:280,
	top:10
});

win.add(b1);

var b2 = Titanium.UI.createButton({
	title:'Developer Website',
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

