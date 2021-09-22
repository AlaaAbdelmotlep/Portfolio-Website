// ************* MENU SHOW VS HIDDEN ***************

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav_close");

// ************ MENU SHOW **********
// Validate if constant existes

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ************ MENU HIDDEN **********
// Validate if constant existes

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ************ REMOVE MENU MOBILE **********
// when we click on each navLink we remove show-menu

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ************ ACCORDION SKILLS **********
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
// ************ QUALIFICATION TABS **********

// ************ SERVICES MODEL **********

// ************ PROTOFOLIO SWIPER **********

// ************ TESTIMONIAL **********