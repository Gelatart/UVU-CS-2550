/*jshint esversion: 6 */
/*jshint unused:false*/

function loadBody() {
    fetch('./resume.json')
    .then(response => response.json())
    .then(data => displayFromJson(data));
  }
  var summaryHidden = false;
  var skillsHidden = false;
  var educationHidden = false;
  var workHidden = false;
  var internshipsHidden = false;
  var awardsHidden = false;
  function hideSection(obj,hiddenValue) {
    if(obj.style.display == 'none') {
      //used to check for hiddenValue
      obj.style.display = 'block';
      hiddenValue = !hiddenValue;
    } else {
      obj.style.display = 'none';
      hiddenValue = !hiddenValue;
    }
  } 
  function displayFromJson(resume)  {
    var categories = resume.categories;
    var b = document.getElementsByTagName("BODY")[0];
    b.innerHTML += '<h1 title="Full Name" id="fullName">' + resume.fullName + '</h1>';
    b.innerHTML += '<a title="Email Address" href="mailto:daniel.f.wood@gmail.com" id="email">' + resume.email + '</a>';
    b.innerHTML += '<h2 title="Brief summary of traits" onclick="hideSection(summary,summaryHidden)" class="categoryName">' + categories[0].name + '</h2>';
    b.innerHTML += '<ul id="summary">' + '<li>' + categories[0].desc + '</li>' + '</ul>';
    //var summary = document.getElementById('summary');
    b.innerHTML += '<h2 title="Some of my skills" onclick="hideSection(skills,skillsHidden)" class="categoryName">' + categories[1].name + '</h2>';
    b.innerHTML += '<ul id="skills">';
    b.innerHTML += '</ul>';
    var skills = document.getElementById('skills');
    for(var skillAccomplishment of categories[1].accomplishments) {
      skills.innerHTML += '<li>' + skillAccomplishment + '</li>' ;
    }         
    b.innerHTML += '<h2 title="High school and colleges attended" onclick="hideSection(education,educationHidden)" class="categoryName">' + categories[2].name + '</h2>';
    b.innerHTML += '<ul id="education">';
    b.innerHTML += '</ul>';
    var education = document.getElementById('education');
    for(var school of categories[2].schools) {
      education.innerHTML += '<li>' + school.school + ' ' + school.duration;
      education.innerHTML += '<ul id ="' + school.code + '">';
      education.innerHTML += '</ul>';
      education.innerHTML += '</li>';
      var schoolCode = document.getElementById(school.code);
      if(school.desc !== "") {
        schoolCode.innerHTML += '<li>' + school.desc + '</li>';
      }
      schoolCode.innerHTML += '<li>' + school.gpa + '</li>';      
    }       
    b.innerHTML += '<h2 title="Companies I have worked for" onclick="hideSection(work,workHidden)" class="categoryName">' + categories[3].name + '</h2>';
    b.innerHTML += '<ul id="work">';
    b.innerHTML += '</ul>';
    var work = document.getElementById('work');
    for(var job of categories[3].jobs) {
      work.innerHTML += '<li>' + job.company + ' ' + job.duration;
      if(job.code !== "") {
         work.innerHTML += '<ul id ="' + job.code + '">';
         work.innerHTML += '</ul>';
         var workCode = document.getElementById(job.code);
         if(job.desc !== "") {
           workCode.innerHTML += '<li>' + job.desc + '</li>';
         } else if (job.accomplishments.length !== 0) {
           for(var jobAccomplishment of job.accomplishments) {
             workCode.innerHTML += '<li>' + jobAccomplishment + '</li>';
           }
         }
      }
      work.innerHTML += '</li>';    
    }  
    b.innerHTML += '<h2 title="My internship with OPNoobs" onclick="hideSection(internships,internshipsHidden)" class="categoryName">' + categories[4].name + '</h2>';
    b.innerHTML += '<ul id="internships">';
    b.innerHTML += '</ul>';
    var internships = document.getElementById('internships');
    internships.innerHTML += '<li>' + categories[4].internship + ' ' + categories[4].duration;
    internships.innerHTML += '<ul id ="' + categories[4].code + '">';
    internships.innerHTML += '</ul>';
    internships.innerHTML += '</li>';
    var internshipCode = document.getElementById(categories[4].code);
    for(var internshipAccomplishment of categories[4].accomplishments) {
      internshipCode.innerHTML += '<li>' + internshipAccomplishment + '</li>';
    }       
    b.innerHTML += '<h2 title="My Eagle Scout award" onclick="hideSection(awards,awardsHidden)" class="categoryName">' + categories[5].name + '</h2>';
    b.innerHTML += '<ul id="awards">' + '<li>' + categories[5].award + ' ' + categories[5].year + '</li>' + '</ul>';
    //var awards = document.getElementById('awards');
  }