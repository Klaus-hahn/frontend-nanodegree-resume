var bio = {
	"name" : "Klaus Hahn",
	"role": "Student",
	"contacts": {
		"mobile": "420 608 857 612",
		"email": "klaus.hahn.work@gmail.com",
		"github": "Klaus-hahn",
		"location": "Prague"
	},
	"welcomeMessage": "Student, looking to work with front-end web development.",
	"skills": ["Javascript", "HTML", "CSS", "Langages"],
	"bioPic": "images/me.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Mom",
			"title": "Car Cleaner",
			"dates": "2016 - 2017",
			"description": "I used to clean the car for 20 reais."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Portfolio using Udacity",
			"dates": "2018",
			"description": "I've made a porfolio to show my skills, education, work experience, projects and hability with web dev."
		}
	]
}

//header (name, role, pic, welcome message)
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);
//contacts
var formMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#topContacts").append(formMobile);
var formEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#topContacts").append(formEmail);
var formGit = HTMLgithub.replace("%data%", bio.contacts["github"]);
$("#topContacts").append(formGit);
var formLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#topContacts").append(formLocation);
//skills
if(bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

//work experience (where i've worked, employer, dates and details)

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};
displayWork();

//projects

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitleP = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDateP = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescriptionP = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitleP);
		$(".project-entry:last").append(formattedDateP);
		$(".project-entry:last").append(formattedDescriptionP);
	}
};
displayProjects();
//click collector
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
//internationalizator
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name [1].toUpperCase();
	name[0] = name [0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);