var win = Titanium.UI.currentWindow;
win.backgroundColor = '#dedede';

win.layout = 'vertical';

var aboutText = 'This is a simple app that finds definitions for the 10,300+ US Department of Defense-approved acronyms and terms as listed in JP 1.02, '
	aboutText += 'the "DOD Dictionary of Military and Associated Terms", current as of December 2010.\n\n';
	aboutText += 'You may notice there are some common acronyms that are missing from this service (ie "FRG"), however, there is currently no automated way to update the authoritative JP 1.02 acronym dataset.  JP 1.02 includes a tedious, paper-based process to recommend changes.\n\n'
	aboutText += 'Disclaimer:</strong> this app provided as-is, and is in no way endorsed or supported by the US Army, the US Department of Defense, or NATO.\n'
	aboutText += 'Disclaimer:</strong> this app provided as-is, and is in no way endorsed or supported by the US Army, the US Department of Defense, or NATO.\n'
	aboutText += 'Disclaimer:</strong> this app provided as-is, and is in no way endorsed or supported by the US Army, the US Department of Defense, or NATO.\n'
	aboutText += 'Disclaimer:</strong> this app provided as-is, and is in no way endorsed or supported by the US Army, the US Department of Defense, or NATO.\n'


var l1 = Titanium.UI.createLabel({
	text:aboutText,
	top:30,
	left:10,
	right:10,
	width:280,
	color:'#000',
	textAlign:'left',
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
