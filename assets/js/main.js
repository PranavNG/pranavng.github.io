/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


if (navToggle) {
   navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
   });
}


if (navClose) {
   navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
   });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");


const linkAction = () => {
   navMenu.classList.remove("show-menu");
};


navLinks.forEach(link => {
   link.addEventListener("click", linkAction);
});


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {

   const header = document.getElementById("header");

   if (window.scrollY >= 50) {
      header.classList.add("blur-header");
   } else {
      header.classList.remove("blur-header");
   }

};


window.addEventListener("scroll", blurHeader);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {

   const scrollUpButton = document.getElementById("scroll-up");

   if (window.scrollY >= 350) {
      scrollUpButton.classList.add("show-scroll");
   } else {
      scrollUpButton.classList.remove("show-scroll");
   }

};


window.addEventListener("scroll", scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");


const scrollActive = () => {

   const scrollY = window.pageYOffset;


   sections.forEach(current => {

      const sectionHeight = current.offsetHeight;

      const sectionTop = current.offsetTop - 100;

      const sectionId = current.getAttribute("id");

      const sectionLink = document.querySelector(
         `.nav__menu a[href*="${sectionId}"]`
      );


      if (!sectionLink) {
         return;
      }


      if (
         scrollY > sectionTop &&
         scrollY <= sectionTop + sectionHeight
      ) {

         sectionLink.classList.add("active-link");

      } else {

         sectionLink.classList.remove("active-link");

      }

   });

};


window.addEventListener("scroll", scrollActive);


/*=============== FOOTER YEAR ===============*/
const footerYear = document.getElementById("footer-year");


if (footerYear) {
   footerYear.textContent = new Date().getFullYear();
}


/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== "undefined") {

   const sr = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 900,
      delay: 100,
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
         interval: 120
      }
   );


   sr.reveal(
      ".experience__item, .contact__container",
      {
         origin: "bottom"
      }
   );

}
