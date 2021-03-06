var bio = {
	"name": "SHRUTI",
	"secondname": "UPRETI",
	"role": "FRONT-END WEB DEVELOPER",
	"contacts": {
		"mobile": "  +91-9545795896",
		"email": "  shrutiupreti730@gmail.com",
		"linkedin": "  shruti-upreti-64223878",
		"facebook": "  shruti.upreti.5",
		"location": "  Ahmedabad"
	},
	"biopic": "images/shruti1.png",
	"welcomeMessage": "Hi.",
	"skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Sublime Text", "Windows OS","Web Content Writing"]
};

var work = {
	"jobs": [
	{
		"employer": "Institute of Reservoir Studies",
		"title": "JAVA Developer",
		"location": "Ahmedabad",
		"dates": "May 2012-July 2014",
		"description": "Developed a JAVA-based command-line application that enlists the orders placed for the IT Departement in the IRS organisation and maintains a record in seperate file automatically."
	},
	{
		"employer": "Gridle",
		"title": "Web Content Writer",
		"location": "Ahmedabad",
		"dates": "May 2015-July 2015",
		"description": "Developed and managed the Gridle web blog, thus posting about recent Technology trends and how to make use of various automated tools more efficiently."
	}
	]
};

var projects = {
	"project": [
	
	{
		"title": "Udacity Resume",
		"dates": "2016",
		"description": "This web page is my resume page created as a part of Udacity Front-end Web Departement Program. It is created using HTML, CSS, JavaScript and JSON",
		"images": ['http://shruti2908.github.io/ShrutiUpreti/images/resume.jpg'],
		"url":"index.html"
	},
	{
		"title": "Udacity Portfolio",
		"dates": "2015",
		"description": "This is my Personal Portfolio created as a part of Udacity's Nanodegree Program using HTML, CSS, JSON and JavaScript. The Portfolio shows my Work as a Developer.",
		"images": ['images/portfolio.JPG'],
		"url":"Portfolio Site/portfolio.html"
	},
	{
		"title": "The Arcade Game",
		"dates": "2016",
		"description": "An intereactive game based on JavaScript. To know more, click on the link for live demo.",
		"images": ['images/arcade.JPG'],
		"url":"The Arcade Game/The Arcade Game/index.html"
	},
	{
		"title": "Article",
		"dates": "2016",
		"description": "An Article developed using basic structuring elements of HTML and uses some of CSS.",
		"images": ['images/article.gif'],
		"url":"Portfolio Site/mockup-to-article/index.html"
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Mukesh Patel School of Technology Management and Engineering, NMIMS",
		"location": "Shirpur",
		"degree": "",
		"majors": ["Bachelors of Technology(Computer Engineering)"],
		"dates": "2012-2016",
		"url": "http://engineering.nmims.edu/"
	}],
	"onlineCourses": [
	{
		"title": "Front-end Web Developer",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://in.udacity.com/"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderSecond.replace("%data%", bio.secondname));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

	$("#topContacts").append(HTMLfacebook.replace("%data%", bio.contacts.facebook));

	$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

	$("#footerContacts").append(HTMLfacebook.replace("%data%", bio.contacts.facebook));

	$("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	var polarData = [
  	{
    	value: 10,
    	color:"#F7464A",
    	highlight: "#FF5A5E",
    	label: "HTML",
    	labelcolor: "red"
  	},
  	{
    	value: 8,
    	color:"#F06613",
    	highlight: "#FF5A5E",
    	label: "CSS",
    	labelcolor: "orangelabel"
  	},
  	{
    	value: 7,
    	color: "#46BFBD",
    	highlight: "#5AD3D1",
    	label: "Javascript",
   	 	labelcolor: "green"
  	},
  	{
    	value: 4,
    	color: "#FDB45C",
    	highlight: "#FFC870",
    	label: "jQuery",
    	labelcolor: "yellow"
  	},
  	{
   		value: 8,
    	color: "#949FB1",
    	highlight: "#A8B3C5",
   	 	label: "Bootstrap",
    	labelcolor: "graylabel"
  	},
  	{
    	value: 7,
    	color: "#23582b",
    	highlight: "#A8B3C5",
    	label: "Sublime Text",
    	labelcolor: "darker-green"
  	},
  	{
   	 	value: 7,
    	color: "#4D5360",
   	 	highlight: "#616774",
    	label: "Web Content Writing",
    	labelcolor: "darker-gray"
  	}
	];
// Display a list of skill labels
	var skillsChartLabels = function(){
		for (skill = 0; skill <  polarData.length; skill++){
	  	var skillLabel = polarData[skill].label;
	  	var skillLabelColor = polarData[skill].labelcolor;
	  	var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  	$("#skills-list").append(skillHTML);
	}
};

// Call functions
	window.onload = function(){
		var ctx = document.getElementById("skills-chart").getContext("2d");
		window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  			responsive:false
		});
	// Call skillsChartLabels function defined
		skillsChartLabels();
	};
};

work.display = function() {
	for (job = 0; job < work.jobs.length; job++) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		 $(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (i = 0; i < projects.project.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title).replace("#", projects.project[i].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.project[i].images.length > 0) {
			for (image = 0; image < projects.project[image].images.length; image++ ) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
};

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school = 0; school < education.schools.length; school++){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++){
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url).replace("#", education.onlineCourses[onlineClass].url);
		
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates));
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

bio.display();
work.display();
projects.display();
education.display();

 
$("#mapDiv").append(googleMap);
