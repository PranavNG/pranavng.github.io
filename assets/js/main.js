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
/*=============== PROJECTS ===============*/

const projects = [

   {
      number: "01",

      shortTitle: "Species Distribution",

      title: "Species Distribution Modelling",

      category: "UNSW Academic Project · Data Science",

      status: "",

      descriptions: [
         "A UNSW group project investigating species distribution using environmental and spatial predictors.",

         "My contribution focused on exploratory data analysis and Regularised Logistic Regression, including model tuning, class balancing and cross-validation."
      ],

      tags: [
         "Python",
         "Pandas",
         "Scikit-learn",
         "Logistic Regression",
         "Optuna"
      ],

      github:
         "https://github.com/PranavNG/species-distribution-model",

      images: [
         {
            src: "assets/img/species-feature-correlation.png",
            alt: "Species Distribution feature correlation heatmap"
         },
         {
            src: "assets/img/species-model-comparison.png",
            alt: "Species Distribution model comparison results"
         }
      ]
   },


   {
      number: "02",

      shortTitle: "F1 Data Platform",

      title: "F1 Data Platform",

      category: "Data Engineering",

      status: "In Progress",

      descriptions: [
         "An end-to-end Formula 1 data platform for collecting, transforming, modelling and analysing racing data across seasons, races, drivers, teams and lap-level performance."
      ],

      tags: [
         "Python",
         "PostgreSQL",
         "dbt",
         "Airflow",
         "Tableau"
      ],

      github:
         "https://github.com/PranavNG/f1-data-platform",

      images: [
         {
            src: "assets/img/Arch_diagram.png",
            alt: "F1 Data Platform architecture"
         }
      ]
   },


   {
      number: "03",

      shortTitle: "Beer Portfolio Analytics",

      title: "Beer Portfolio Analytics",

      category: "Business Intelligence · Data Modelling",

      status: "",

      descriptions: [
         "A Power BI solution for analysing product portfolio performance across revenue, profitability, customers, channels, regions and individual products.",

         "My primary contribution was designing the analytical data model and developing the final interactive dashboard."
      ],

      tags: [
         "Power BI",
         "Data Modelling",
         "DAX",
         "Business Analytics"
      ],

      github:
         "https://github.com/PranavNG/beer-portfolio-analytics",

      images: [
         {
            src: "assets/img/beer-data-model.png",
            alt: "Beer Portfolio Power BI data model"
         },
         {
            src: "assets/img/beer-dashboard-overview.png",
            alt: "Beer Portfolio dashboard overview"
         }
      ]
   }

];


const projectsSelector =
   document.getElementById("projects-selector");

const projectsDetail =
   document.getElementById("projects-detail");


const createProjectTabs = () => {

   if (!projectsSelector) {
      return;
   }


   projectsSelector.innerHTML =
      projects.map((project, index) => {

         return `
            <button
               class="projects__tab ${index === 0 ? "active-project" : ""}"
               type="button"
               data-project="${index}"
               role="tab"
               aria-selected="${index === 0}"
            >
               <span class="projects__tab-number">
                  ${project.number}
               </span>

               <span class="projects__tab-title">
                  ${project.shortTitle}
               </span>
            </button>
         `;

      }).join("");

};


const createProjectImages = project => {

   if (!project.images || project.images.length === 0) {
      return "";
   }


   if (project.images.length === 1) {

      return `
         <div class="projects__preview-single">

            <img
               src="${project.images[0].src}"
               alt="${project.images[0].alt}"
            >

         </div>
      `;

   }


   return `
      <div class="projects__preview-grid">

         ${project.images.map(image => {

            return `
               <img
                  src="${image.src}"
                  alt="${image.alt}"
               >
            `;

         }).join("")}

      </div>
   `;

};


const showProject = index => {

   if (!projectsDetail) {
      return;
   }


   const project = projects[index];


   if (!project) {
      return;
   }


   const statusHTML =
      project.status
         ? `
            <span class="projects__status">
               ${project.status}
            </span>
         `
         : "";


   const descriptionsHTML =
      project.descriptions.map(description => {

         return `
            <p class="projects__description">
               ${description}
            </p>
         `;

      }).join("");


   const tagsHTML =
      project.tags.map(tag => {

         return `<span>${tag}</span>`;

      }).join("");


   projectsDetail.innerHTML = `

      <div class="projects__detail-grid">

         <div class="projects__detail-content">

            <p class="projects__category">
               ${project.category}
            </p>


            <div class="projects__heading">

               <span class="projects__detail-number">
                  ${project.number}
               </span>

               <h3 class="projects__detail-title">
                  ${project.title}
               </h3>

               ${statusHTML}

            </div>


            ${descriptionsHTML}


            <div class="projects__tags">
               ${tagsHTML}
            </div>


            <div class="projects__links">

               <a
                  href="${project.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projects__link"
               >
                  GitHub

                  <i class="ri-arrow-right-up-line"></i>
               </a>

            </div>

         </div>


         <div class="projects__preview">

            ${createProjectImages(project)}

         </div>

      </div>

   `;

};


const setActiveProject = index => {

   const projectTabs =
      document.querySelectorAll(".projects__tab");


   projectTabs.forEach((tab, tabIndex) => {

      const isActive =
         tabIndex === index;


      tab.classList.toggle(
         "active-project",
         isActive
      );


      tab.setAttribute(
         "aria-selected",
         isActive
      );

   });


   showProject(index);

};


createProjectTabs();

showProject(0);


if (projectsSelector) {

   projectsSelector.addEventListener(
      "click",
      event => {

         const tab =
            event.target.closest(".projects__tab");


         if (!tab) {
            return;
         }


         const index =
            Number(tab.dataset.project);


         setActiveProject(index);

      }
   );

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
      ".skills__card, .projects__shell",
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
