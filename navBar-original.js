// all lines must have an escape character (\) at the end of them
// all ' (single quotation mark) characters must also have the escape character (\) before them

document.write('\
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->\
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
    \
    <!-- Makes navbar responsive to screen width for mobile support -->\
    <script src="assets/navbarResponsiveness.js"></script>\
    \
    <!-- Stylesheet for the navbar -->\
    <link rel="stylesheet" type="text/css" href="assets/navbar.css">\
    \
		<div class="topnav" id="myTopnav">\
      <a href="index.html" class="active">Home</a>\
      <div class="dropdown">\
        <button class="dropbtn">Projects\
        <i class="fa fa-caret-down"></i>\
        </button>\
        <div class="dropdown-content">\
          <a href="coma_prognosis.html">Coma Prognosis</a>\
          <a href="machine_learning.html">Machine Learning</a>\
          <a href="bss.html">Blind Source Separation</a>\
          <a href="blind_dereverberation.html">Blind Dereverberation</a>\
          <a href="image_processing.html">Image Processing</a>\
          <a href="mcm.html">MCMC Techniques</a>\
        </div>\
      </div>\
			<div class="dropdown">\
			  <button class="dropbtn">Publications\
				<i class="fa fa-caret-down"></i>\
			  </button>\
			  <div class="dropdown-content">\
          <a href="papers.html">Full Papers</a>\
          <a href="conf.html">Conference Publications</a>\
          <a href="patents.html">Patents</a>\
			  </div>\
			</div>\
      <a href="people.html">People</a>\
      <a href="funding.html">Funding</a>\
			<a href="https://mcmasteru365-my.sharepoint.com/:f:/g/personal/reillyj_mcmaster_ca/EpZrPVh8liVKnhRfmfBq9MsBeU1o1flFmisKaz4v9SIwog?e=qjnQ69" target="_blank"">Course Notes</a>\
      <a href="http://www.ece.mcmaster.ca" target="_blank">ECE Website</a>\
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>\
		  </div>\
');

            // <ul class = \'dropdown-content\'>\
            //     <li><a href="http://www.iatsl.org/people/narmanfard.html">Narges Armanfard</a> </li>\
            //     <li><a href="https://www.linkedin.com/in/philchrapka/?ppe=1">Phil Chrapka</a> </li>\
            //     <li><a href="https://sites.google.com/site/roberboshra/">Rober Boshra</a> </li>\
            //     <li><a href="#">Omar Nassif</a> </li>\
            //  </ul>\
        // </li>\


{/* <nav>\
    <ul>\
        <li><a href="index.html">Home</a></li>\
        <li class = \'dropdown\'><a href="index.html">Projects ↓</a>\
            <ul class = \'dropdown-content\'>\
                <li><a href="coma_prognosis.html">Coma Prognosis</a> </li>\
				<li><a href="machine_learning.html">Machine Learning</a> </li>\
                <li><a href="bss.html">Blind Source Separation</a> </li>\
                <li><a href="blind_dereverberation.html">Blind Dereverberation</a> </li>\
                <li><a href="image_processing.html">Image Processing</a> </li>\
                <li><a href="mcm.html">MCMC Techniques</a> </li>\
             </ul>\
        </li>\
     <li class = \'dropdown\'><a href="#">Publications ↓</a>\
            <ul class = \'dropdown-content\'>\
                <li><a href="papers.html">Full Papers</a> </li>\
                <li><a href="conf.html">Conference Publications</a> </li>\
                <li><a href="patents.html">Patents</a> </li>\
             </ul>\
        </li>\
        <li><a href="people.html">People</a></li>\
        <li><a href="funding.html">Funding</a></li>\
        <li><a href="https://mcmasteru365-my.sharepoint.com/:f:/g/personal/reillyj_mcmaster_ca/EpZrPVh8liVKnhRfmfBq9MsBeU1o1flFmisKaz4v9SIwog?e=qjnQ69" target="_blank">Course Notes</a></li>\
        <li><a href="http://www.ece.mcmaster.ca" target="_blank">ECE Website</a></li>\
    </ul>\
</nav>\ */}


