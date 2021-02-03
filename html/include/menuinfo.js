/*	(c) Ger Versluis 2000 version 5 9 October 2001	*
*	You may remove all comments for faster loading	*/		


	var NoOffFirstLineMenus=6;			// Number of first level items
	var LowBgColor='#00008c';			// Background color when mouse is not over '#FF8822'
	var LowSubBgColor='#008ADA';			// Background color when mouse is not over on subs
	var HighBgColor='#008ADA';			// Background color when mouse is over '#EE7711'
	var HighSubBgColor='#008ADA';			// Background color when mouse is over on subs
	var FontLowColor='white';			// Font color when mouse is not over
	var FontSubLowColor='#FAD85C';			// Font color subs when mouse is not over
	var FontHighColor='#FAD85C';			// Font color when mouse is over
	var FontSubHighColor='black';			// Font color subs when mouse is over
	var BorderColor='white';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="Verdana, Arial, sans-serif"
	var FontSize=10;
	var FontBold=1;
	var FontItalic=0;
	var MenuTextCentered='center';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='center';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle' or 'bottom'
	var ChildOverlap=.1;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=155;				//set vertical offset
	var StartLeft=0;				//set horizontal offset
	var VerCorrect=0;
	var HorCorrect=0;
	var LeftPaddng=3;
	var TopPaddng=2;
	var FirstLineHorizontal=1;			// First level items layout horizontal 1 or 0
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var bName = navigator.appName;  		// Broswer name
    var bVer = parseFloat(navigator.appVersion);   // Broswer version

	



	
function BeforeStart(){;
	}

function AfterBuild(){;
	}

// Menu tree
//	MenuX=new Array(ItemText, Link, background image, number of sub elements, height, width);
//	For rollover images ItemText format is:  "rollover:Image1.jpg:Image2.jpg"


Menu1=new Array("Home","http://www.ece.mcmaster.ca/~reilly/","",0,21,110);

Menu2=new Array("People","http://www.ece.mcmaster.ca/~reilly/html/people.html","",2);
	Menu2_1=new Array("Dr. J.P. Reilly","http://www.ece.mcmaster.ca/~reilly/html/people.html#top","",0,21,150);
	Menu2_2=new Array("Graduate Student","http://www.ece.mcmaster.ca/~reilly/html/people.html#student","",5);
	  Menu2_2_1 = new Array("Siamak Salari", "http://www.ece.mcmaster.ca/~reilly/html/people.html#Siamak","",0,21,150);
	  Menu2_2_2 = new Array("Maryam Ravan", "http://www.ece.mcmaster.ca/~reilly/html/people.html#maryam","",0);
	  Menu2_2_3 = new Array("Ahmad Khodayari", "http://www.ece.mcmaster.ca/~reilly/html/people.html#ahmad","",0);
	  Menu2_2_4 = new Array("Amin Zia", "http://www.ece.mcmaster.ca/~reilly/html/people.html#amin","",0);
	  Menu2_2_5 = new Array("Derek Yee", "http://www.ece.mcmaster.ca/~reilly/html/people.html#derek","",0);
	  

Menu3=new Array("Projects","","",5);
	Menu3_1=new Array("Machine Learning","http://www.ece.mcmaster.ca/~reilly/html/projects/machine_learning.html","",0,21,210);
	Menu3_2=new Array("Blind Source Separation","http://www.ece.mcmaster.ca/~reilly/kamran/","",0,21,210);
	Menu3_3=new Array("Blind Dereverberation","http://www.ece.mcmaster.ca/~reilly/html/projects/blindder.html","",1);
	  Menu3_3_1 = new Array("Marginalized Particle Filtering","http://www.ece.mcmaster.ca/~reilly/html/projects/dereverb1.htm","",0, 21, 360);
	Menu3_4=new Array("Image Processing","http://www.ece.mcmaster.ca/~reilly/html/projects/imageprocess.html","",2);
	  Menu3_4_1 = new Array("High Bit Rate Compression of Sensor-Generated Images","http://www.ece.mcmaster.ca/~reilly/html/projects/image_yash1.htm","",0,21, 410);
  	  Menu3_4_2 = new Array("Signal Processing for Enhanced Pipeline Inspection","http://www.ece.mcmaster.ca/~reilly/html/projects/image_jim1.htm","",0);
	Menu3_5=new Array("MCMC Techniques","http://www.ece.mcmaster.ca/~reilly/html/projects/mcmc.html","",1);
	  Menu3_5_1 = new Array("Application of Monte Carlo Methods in Array Signal Processing","http://www.ece.mcmaster.ca/~reilly/html/projects/monte_carlo1.htm","",0,21,470);

Menu4=new Array("Group Publications","","",3,21,179);
	Menu4_1=new Array("Recent full papers","http://www.ece.mcmaster.ca/~reilly/html/publications/recent_papers.html","",0,21,260);
	Menu4_2=new Array("Recent Conference Publications","http://www.ece.mcmaster.ca/~reilly/html/publications/recent_conference_publications.html","",0);
	Menu4_3=new Array("Patents","http://www.ece.mcmaster.ca/~reilly/html/publications/patents.html","",0);
	

Menu5=new Array("Funding","http://www.ece.mcmaster.ca/~reilly/html/funding/funding.html","",0,21,110);

Menu6=new Array("ECE Page","http://www.ece.mcmaster.ca","",0,21,110);


/* Set the top and left offset of the menu when browser is different 
if (bName == "Netscape") {
  StartTop = 155;
  StartLeft = 110;
} else {
  StartTop = 161;
  StartLeft = 112;
}
*/