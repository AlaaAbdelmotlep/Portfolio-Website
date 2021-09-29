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

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

// fun accept index , and add active class to modelView of this index
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

// when enter closse btn , make sure all modelView is closed
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// ************************ SCROLL SECTION ACTIVE LINK **********************

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ************************ CHANGE BACKGROUND HEADER **********************
function scrollHeader() {
  const nav = document.getElementById("header");

  // when scroll greater than 200 viewPort height , add scroll header class to header tag
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// ************************ SHOW SCROLL UP **********************

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  // when scroll greater than 560 viewPort height , add show-scroll class to tag with scrollTop class
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// ************************ DARK LIGHT THEME **********************

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// previously sselected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme , the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// validate if user prev choose topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Toggol themes manually
themeButton.addEventListener("click", () => {
  // add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // save the theme and icon that user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
