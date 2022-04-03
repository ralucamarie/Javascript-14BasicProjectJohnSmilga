// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   let classes = links.classList;
  //   if (classes.contains("show-links")) {
  //     classes.remove("show-links");
  //   } else {
  //     classes.add("show-links");
  //   }
  links.classList.toggle("show-links");
});


