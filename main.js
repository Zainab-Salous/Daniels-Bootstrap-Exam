
  window.addEventListener("scroll", function () {
    console.log(window.scrollY)
    const navbar = document.getElementById("main-header");
    if (window.scrollY < 333) {
      navbar.classList.remove("scrolled");
        navbar.classList.remove("fixed-top");
        navbar.classList.add("sticky-top");
    } else {
     
 navbar.classList.add("scrolled");
      navbar.classList.add("fixed-top");
        navbar.classList.remove("sticky-top");
    }
  });
