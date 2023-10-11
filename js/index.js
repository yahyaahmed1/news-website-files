// footer year code
document.getElementById("year").innerHTML = new Date().getFullYear()

// navbar edit when scroll
let navbar = document.getElementById("navbar");
document.addEventListener("scroll", () => {
  let pageScroll = document.scrollingElement.scrollTop,
    navbarPos = navbar.offsetTop;
  if (pageScroll > navbarPos + 0.5) {
    navbar.classList.add("scrolled-nav");
  } else {
    navbar.classList.remove("scrolled-nav")
  }
})
