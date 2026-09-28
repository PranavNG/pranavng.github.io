/*=============== ELEMENTS ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav__link");

const header = document.getElementById("header");

const scrollUpButton = document.getElementById("scroll-up");

const footerYear = document.getElementById("footer-year");

const sections = document.querySelectorAll("section[id]");


/*=============== MOBILE MENU ===============*/

const openMenu = () => {

   if (!navMenu) {
      return;
   }

   navMenu.classList.add("show-menu");

   document.body.classList.add("menu-open");

};


const closeMenu = () => {

   if (!navMenu) {
      return;
   }

   navMenu.classList.remove("show-menu");

   document.body.classList.remove("menu-open");

};


if (navToggle) {

   navToggle.addEventListener("click", openMenu);

}


if (navClose) {

   navClose.addEventListener("click", closeMenu);

}


/* Close mobile menu after selecting navigation item */
navLinks.forEach(link => {

   link.addEventListener("click", () => {

      closeMenu();

      /*
         Immediately make the clicked link active.
         Scroll logic will take over afterwards.
      */
      navLinks.forEach(item => {
         item.classList.remove("active-link");
      });

      link.classList.add("active-link");

   });

});


/*
   If the user changes from mobile to desktop
   while the menu is open, reset the mobile menu.
*/
window.addEventListener("resize", () => {

   if (window.innerWidth >= 768) {

      closeMenu();

   }

});


/*=============== HEADER BACKGROUND ===============*/

const updateHeader = () => {

   if (!header) {
      return;
   }

   if (window.scrollY >= 40) {

      header.classList.add("blur-header");

   } else {

      header.classList.remove("blur-header");

   }

};


/*=============== SCROLL UP BUTTON ===============*/

const updateScrollUp = () => {

   if (!scrollUpButton) {
      return;
   }

   if (window.scrollY >= 350) {

      scrollUpButton.classList.add("show-scroll");

   } else {

      scrollUpButton.classList.remove("show-scroll");

   }

};


/*=============== ACTIVE NAV LINK ===============*/

const updateActiveLink = () => {

   if (!sections.length) {
      return;
   }


   /*
      Use a point about 35% down the screen.
      This gives more natural section highlighting.
   */
   const marker =
      window.scrollY +
      window.innerHeight * 0.35;


   let currentSection = "home";


   sections.forEach(section => {

      const sectionTop = section.offsetTop;

      const sectionBottom =
         sectionTop +
         section.offsetHeight;


      if (
         marker >= sectionTop &&
         marker < sectionBottom
      ) {

         currentSection =
            section.getAttribute("id");

      }

   });


   /*
      Contact is the final section.

      Browsers often cannot scroll far enough
      for its top to reach the normal marker,
      so force Contact active at the page bottom.
   */
   const atBottom =
      Math.ceil(
         window.innerHeight +
         window.scrollY
      )
      >=
      document.documentElement.scrollHeight - 3;


   if (atBottom) {

      currentSection = "contact";

   }


   navLinks.forEach(link => {

      const linkTarget =
         link.getAttribute("href");


      if (
         linkTarget ===
         `#${currentSection}`
      ) {

         link.classList.add("active-link");

      } else {

         link.classList.remove("active-link");

      }

   });

};


/*=============== MAIN SCROLL HANDLER ===============*/

const handleScroll = () => {

   updateHeader();

   updateScrollUp();

   updateActiveLink();

};


window.addEventListener(
   "scroll",
   handleScroll,
   {
      passive: true
   }
);


/* Run immediately after page loads */
window.addEventListener(
   "load",
   handleScroll
);


/*=============== FOOTER YEAR ===============*/

if (footerYear) {

   footerYear.textContent =
      new Date().getFullYear();

}


/*=============== SCROLL REVEAL ===============*/

if (typeof ScrollReveal !== "undefined") {

   const sr = ScrollReveal({

      origin: "top",

      distance: "32px",

      duration: 750,

      delay: 80,

      reset: false

   });


   sr.reveal(
      ".home__content, .section__subtitle, .section__title"
   );


   sr.reveal(
      ".about__content",
      {
         origin: "left"
      }
   );


   sr.reveal(
      ".about__info",
      {
         origin: "right"
      }
   );


   sr.reveal(
      ".skills__card, .projects__card",
      {
         interval: 100
      }
   );


   sr.reveal(
      ".experience__item, .contact__container",
      {
         origin: "bottom"
      }
   );

}
