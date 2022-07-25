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

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";
function showPage(id) {
  hide(activePage);
  show(id);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${id}]`).classList.add("active");
  // document.getElementById("menu-" + activePage).classList.remove("active");
  //   document.getElementById("menu-" + id).classList.add("active");
  activePage = id;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click pe meniu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
