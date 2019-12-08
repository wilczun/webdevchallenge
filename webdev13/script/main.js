window.onscroll = function() {myFunction()};
window.onscroll = function() {changeHeight()};
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-main");
var headerText = document.getElementById("header-content")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var headerMargin = headerText.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    headerText.classList.add("change-height")
  } else {
    navbar.classList.remove("sticky");
    headerText.classList.remove("change-height");
  }
}

