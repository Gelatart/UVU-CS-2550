/*
Nice. I just added an two functions from my js assignment for the
greeking one. one to remove any lists that I generated, and
another that loads the greeking.json and sends it off to my
function that displayed the json.
ALSO LOOK AT PICTURES OF WHITEBOARD AND NOTES
*/
var isGreek = false;
function toggleGreek() {
  if(isGreek == false) {
    resetResume();
    getJSON(displayFromJson, 'greekedResume.json');
    isGreek = !isGreek;
  }
}
async function getJSON(func, json_path) {
  var response = await fetch(json_path);
  var resume = await response.json();
  func(resume);
  return resume;
}
function resetResume() {
  var b = document.getElementsByTagName("BODY")[0];
  b.innerHTML = '<h1 id="fullName"></h1>';
  b.innerHTML += '<a href="mailto:daniel.f.wood@gmail.com" id="email"></a>';                                             
  b.innerHTML += '<script src=\'resume.js\'>'; 
  b.innerHTML += '</script>';
}
function loadBody() {
  var resume = fetch('./resume.json')
  .then(response => response.json())
  .then(data => displayFromJson(data));
}
summaryHidden = false;
skillsHidden = false;
educationHidden = false;
workHidden = false;
internshipsHidden = false;
awardsHidden = false;
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
  b.innerHTML += '<h1 id="fullName">' + resume.fullName + '<span onClick="toggleGreek()">&nbsp;</span></h1>';
  b.innerHTML += '<a href="mailto:daniel.f.wood@gmail.com" id="email">' + resume.email + '</a>';
  b.innerHTML += '<h2 onclick="hideSection(summary,summaryHidden)" class="categoryName">' + categories[0].name + '</h2>';
  b.innerHTML += '<ul id="summary">' + '<li>' + categories[0].desc + '</li>' + '</ul>';
  var summary = document.getElementById('summary');
  b.innerHTML += '<h2 onclick="hideSection(skills,skillsHidden)" class="categoryName">' + categories[1].name + '</h2>';
  b.innerHTML += '<ul id="skills">';
  b.innerHTML += '</ul>';
  var skills = document.getElementById('skills');
  for(var accomplishment of categories[1].accomplishments) {
    skills.innerHTML += '<li>' + accomplishment + '</li>' ;
  }         
  b.innerHTML += '<h2 onclick="hideSection(education,educationHidden)" class="categoryName">' + categories[2].name + '</h2>';
  b.innerHTML += '<ul id="education">';
  b.innerHTML += '</ul>';
  var education = document.getElementById('education');
  for(var school of categories[2].schools) {
    education.innerHTML += '<li>' + school.school + ' ' + school.duration;
    education.innerHTML += '<ul id ="' + school.code + '">';
    education.innerHTML += '</ul>';
    education.innerHTML += '</li>';
    var code = document.getElementById(school.code);
    if(school.desc != "") {
      code.innerHTML += '<li>' + school.desc + '</li>';
    }
    code.innerHTML += '<li>' + school.gpa + '</li>';      
  }       
  b.innerHTML += '<h2 onclick="hideSection(work,workHidden)" class="categoryName">' + categories[3].name + '</h2>';
  b.innerHTML += '<ul id="work">';
  b.innerHTML += '</ul>';
  var work = document.getElementById('work');
  for(var job of categories[3].jobs) {
    work.innerHTML += '<li>' + job.company + ' ' + job.duration;
    if(job.code != "") {
      work.innerHTML += '<ul id ="' + job.code + '">';
      work.innerHTML += '</ul>';
      var code = document.getElementById(job.code);
      if(job.desc != "") {
        code.innerHTML += '<li>' + job.desc + '</li>';
      } else if (job.accomplishments.length != 0) {
        for(var accomplishment of job.accomplishments) {
          code.innerHTML += '<li>' + accomplishment + '</li>';
        }
      }
    }
    work.innerHTML += '</li>';    
  }  
  b.innerHTML += '<h2 onclick="hideSection(internships,internshipsHidden)" class="categoryName">' + categories[4].name + '</h2>';
  b.innerHTML += '<ul id="internships">';
  b.innerHTML += '</ul>';
  var internships = document.getElementById('internships');
  internships.innerHTML += '<li>' + categories[4].internship + ' ' + categories[4].duration;
  internships.innerHTML += '<ul id ="' + categories[4].code + '">';
  internships.innerHTML += '</ul>';
  internships.innerHTML += '</li>';
  var code = document.getElementById(categories[4].code);
  for(var accomplishment of categories[4].accomplishments) {
    code.innerHTML += '<li>' + accomplishment + '</li>';
  }       
  b.innerHTML += '<h2 onclick="hideSection(awards,awardsHidden)" class="categoryName">' + categories[5].name + '</h2>';
  b.innerHTML += '<ul id="awards">' + '<li>' + categories[5].award + ' ' + categories[5].year + '</li>' + '</ul>';
  var awards = document.getElementById('awards');
}