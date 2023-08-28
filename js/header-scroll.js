var prevScrollpos = window.pageYOffset;

var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {

  var currentScrollPos = window.scrollY;

  if (prevScrollpos <= currentScrollPos || currentScrollPos <= 300) {
      headerDiv.classList.remove("show-scroll");
  }

  else{  
      headerDiv.classList.add("show-scroll");
  }

  prevScrollpos = currentScrollPos;
}