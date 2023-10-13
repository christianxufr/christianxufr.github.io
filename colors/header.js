window.onscroll = function() {onPageScroll()};

var stickyHeader = document.getElementById("stickyHeader");

var headerTopOffset = stickyHeader.offsetTop;

function onPageScroll() {
  if (window.pageYOffset > headerTopOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 