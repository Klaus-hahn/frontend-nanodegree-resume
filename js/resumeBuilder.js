var bio = {
	"name" : "Klaus Arruda Hahn",
	"role": "Student",
	"contacts": {
		"mobile": "420 608 857 612",
		"email": "klaus.hahn.work@gmail.com",
		"github": "Klaus-hahn",
		"location": "Prague"
	},
	"welcomeMessage": "hello, you are on my résumé",
	"skills": ["Javascript", "HTML", "CSS", "Langages"],
	"bioPic": "images/me.jpg"
}

var education = {
    "schools": [
		{
	  		"name": "Leonardo Da Vinci",
	  		"city": "Brasília",
	  		"degree": "middle school",
	  		"dates": 2013
	  	},
	  	{
	  		"name": "Bom Jesus da Nossa Senhora do Rosário",
	  		"city": "Paranaguá",
	  		"degree": "middle school",
	  		"dates": [ 2014, 2015, 2016 ]  		
	  	},
	  	{
	  		"name": "Colégio Ideal",
	  		"city": "Brasília",
	  		"degree": "middle school",
	  		"dates": 2017
	  	}
	],
	"onlineCourses": [
		{
			"title": "Init to Javascript",
			"school": "Udacity",
			"dates": 2018
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2018
		}
	]
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
			"title": "résumé",
			"dates": "2018",
			"description": "the résumé that you're currently in"
		}
	]
}
//header (name, role, pic, welcome message)
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);
//contacts
$("#header").append(HTMLcontactGeneric);
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
//projects