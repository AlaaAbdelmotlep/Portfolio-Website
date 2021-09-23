// ************************* MENU SHOW VS HIDDEN ***************************

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav_close");

// ************************ MENU SHOW **********************

// Validate if constant existes

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ************************ MENU HIDDEN **********************

// Validate if constant existes

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ************************ REMOVE MENU MOBILE **********************

// when we click on each navLink we remove show-menu

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ************************ ACCORDION SKILLS **********************

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  // <div class="skills__content skills__close"></div>
  let itemClass = this.parentNode.className;

  // addding class close to all skills__content
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  // toggle between close and open classes
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

// add event listner to each elem to skillsHeader
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// ************************ QUALIFICATION TABS **********************

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");
//
//
// console.log(tabContents);
// NodeList(2) [div#education.qualification__content.qualification__active, div#work.qualification__content]
// console.log(tabs);
// NodeList(2) [div.qualification__button.button--flex.qualification__active, div.qualification__button.button--flex]
//
//

// forEach tab we add event listner
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    //
    // using dataset to access to custom data attributes (data-*) on elements
    const target = document.querySelector(tab.dataset.target);

    // console.log(target);
    // return whole ddiv for clicked item

    //
    //
    // Nested looping
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    // that cause once click on any target the whole content display none

    //
    //
    // After remove active class for all conent , add active class to target content
    target.classList.add("qualification__active");

    //
    //
    //
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// ************************ SERVICES MODEL **********************

// ************************ PROTOFOLIO SWIPER **********************

// ************************ TESTIMONIAL **********************
