import "./style.css";

const home = document.querySelector("#home-section");
const resume = document.querySelector("#resume-section");
const skills = document.querySelector("#skills-section");
const projects = document.querySelector("#projects-section");
const contact = document.querySelector("#contact-section");
const navBar = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav-link");
const tabGroup = [home, resume, skills, projects, contact];
const navBarList = document.querySelector(".navbar-list");
const navMobileOpen = document.querySelector(".nav-open");
const navMobileClose = document.querySelector(".nav-close");

tabGroup.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
window.innerWidth < 768 &&
  (document.querySelector("#nav").style.transform = "translateX(100%)");

function closeDisplayNavMobile() {
  document.querySelector("#nav").style.transform = "translateX(100%)";
  document.querySelector(".home").style.filter = "blur(0px)";
  document.querySelector("#left-image").style.filter = "blur(0px)";
}

function closeDisplayNavMobile2() {
  if (document.querySelector("#nav").style.transform == "translateX(0%)") {
    closeDisplayNavMobile();
  }
}

navLinks.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const number = event.target.getAttribute("data-number");
    tabGroup.forEach((elem, ind) => {
      elem.style.transform = `translateX(${100 * (ind - number)}%)`;
      window.innerWidth < 768 && setTimeout(closeDisplayNavMobile, 800);
    });
  });
});

navLinks.forEach((e) =>
  e.addEventListener("mouseenter", function (f) {
    f.target.classList.add("hovered");
  })
);

navLinks[0].classList.add("clicked");

navLinks.forEach((e) =>
  e.addEventListener("mouseleave", function (e) {
    e.target.classList.remove("hovered");
  })
);

navBarList.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    navLinks.forEach((i) => {
      i.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  }
});

//Nav menu dropdown
navMobileOpen.addEventListener("click", function (e) {
  const closeNav = function (elem) {
    if (!elem.target.closest("#nav")) {
      closeDisplayNavMobile2();

      document.querySelector("#main").removeEventListener("click", closeNav);
    }
  };

  document.querySelector("#nav").style.transform = "translateX(0%)";

  const viewportWidth = window.innerWidth;
  if (viewportWidth < 768) {
    setTimeout(function () {
      document.querySelector("#main").addEventListener("click", closeNav);
    }, 500);

    document.querySelector(".home").style.filter = "blur(2px)";
    document.querySelector("#left-image").style.filter = "blur(2px)";
  }

  e.stopPropagation();
});

navMobileClose.addEventListener("click", function () {
  closeDisplayNavMobile();
});
