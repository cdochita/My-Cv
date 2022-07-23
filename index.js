// console.info(2);
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("started");

var myName = "Catalin";
var age = 34;

// console.info("My name is " + myName + `, I am ` + age + ` years old`);
age = 30;
// console.info("My name is " + myName + `, I am ` + age + ` years old`);
age = 41;
// console.info("My name is " + myName + `, I am ` + age + ` years old`);

var jobtitle = `<span>tehnician</span> mecanic`;
var mottoElement = document.getElementById(`MOTTO`);

// console.info(mottoElement);
// console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + "& " + jobtitle;

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  showPage("home");
}

function showSkillsPage() {
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
  showPage("skills");
}
function showProjectsPage() {
  hidePage("home");
  hidePage("skills");
  hidePage("languages");
  showPage("projects");
}

function showLanguagesPage() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  showPage("languages");
}

showHomePage();
