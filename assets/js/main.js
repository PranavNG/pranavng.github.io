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
         "Analysed presence–absence data for 8 reptile species across 641 NSW survey plots, exploring class imbalance and relationships between environmental and spatial predictors.",
         "Built and tuned Regularised Logistic Regression models in Python using Scikit-learn, with class weighting, cross-validation and Optuna. The analysis compared single-species and joint-species modelling approaches to evaluate predictive performance across species."
      ],

      tags: [
         "Python",
         "Pandas",
         "Scikit-learn",
         "Logistic Regression",
         "Optuna"
      ],

      github:
         "https://github.com/PranavNG/species-distribution-model"
   },


   {
      number: "02",

      shortTitle: "F1 Data Platform",

      title: "F1 Data Platform",

      category: "Data Engineering",

      status: "In Progress",

      descriptions: [
         "Built an end-to-end Formula 1 data platform using Python, FastF1, SQL and Tableau, covering ingestion, transformation, modelling and analysis of multi-season race data.",
         "Designed a SQL-based warehouse and custom performance metrics to support race, qualifying, driver and team analysis, including grid dependency, position changes, pace, reliability and consistency."
      ],

      tags: [
         "Python",
         "PostgreSQL",
         "dbt",
         "Airflow",
         "Tableau"
      ],

      github:
         "https://github.com/PranavNG/f1-data-platform"
   },

   {
      number: "03",

      shortTitle: "Beer Portfolio Analytics",

      title: "Beer Portfolio Analytics",

      category: "UNSW Academic Project · Data Science",

      status: "",

      descriptions: [
         "Built an interactive Power BI dashboard to analyse a national beer distribution dataset covering $4.31M in revenue, $1.81M in profit, 561K units sold, 150 SKUs and 3,352 customers.",
         "My primary contribution was designing the analytical data model, building DAX measures and developing the final dashboard to explore performance across products, customer segments, regions, sales channels, ratings and discount levels."
      ],

      tags: [
         "Power BI",
         "Data Modelling",
         "DAX",
         "Business Analytics"
      ],

      github:
         "https://github.com/PranavNG/beer-portfolio-analytics"
   },

   {
      number: "04",

      shortTitle: "Loyalty Program Analytics",

      title: "Customer Loyalty & Segmentation Analysis",

      category: "UNSW Academic Project · Data Science",

      status: "",

      descriptions: [
         "Analysed transaction and loyalty data from 3,200+ customers across a multi-merchant loyalty program to understand spending, engagement, customer value and retention.",
         "Used K-means clustering, logistic regression and statistical testing to identify customer segments and retention drivers. The analysis found stronger retention among multi-merchant customers, with retention increasing from 66.5% for single-merchant customers to 87.5% for customers using all three merchants."
      ],

      tags: [
         "R",
         "Tidyverse",
         "K-means",
         "Customer Segmentation",
         "Statistical Analysis"
      ],

      github:
         "https://github.com/PranavNG/loyalty-program-customer-analysis"
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
      ".home__content, .home__capabilities, .section__subtitle, .section__title"
   );


   sr.reveal(
      ".about__content",
      {
         origin: "left"
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
