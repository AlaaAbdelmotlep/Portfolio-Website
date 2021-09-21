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

// ************ QUALIFICATION TABS **********

// ************ SERVICES MODEL **********

// ************ PROTOFOLIO SWIPER **********

// ************ TESTIMONIAL **********
