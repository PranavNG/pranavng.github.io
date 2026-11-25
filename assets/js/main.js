/*=============== ELEMENTS ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav_link");

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


navLinks.forEach(link => {
   link.addEventListener("click", () => {
      closeMenu();

      navLinks.forEach(item => {
         item.classList.remove("active-link");
      });

      link.classList.add("active-link");
   });
});

window.addEventListener("resize", () => {
   if (window.innerWidth >= 768) {
      closeMenu();
   }
});

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

window.addEventListener(
   "load",
   handleScroll
);


if (footerYear) {
   footerYear.textContent =
      new Date().getFullYear();
}

const projects = [

   {
      number: "01",

      shortTitle: "EqualPlay AI",

      title: "EqualPlay AI",

      category: "Applied AI · Backend Engineering",

      status: "",

      image: "assets/img/projects/equalplay-ai.png",

      descriptions: [
         "Built an AI-powered football match intelligence platform that transforms structured match events and statistics into contextual, natural-language match narratives.",
         "Engineered Python data pipelines for event validation, processing and aggregation, then integrated generative AI workflows with FastAPI REST endpoints to automate match summarisation and deliver accessible football insights."
      ],

      tags: [
         "Python",
         "FastAPI",
         "Azure AI",
         "Generative AI",
         "REST API"
      ],

      github:
         "https://github.com/PranavNG/equalplay-ai",

      live:
         "https://pranavng.github.io/equalplay-ai/"
   },
   {
      number: "02",

      shortTitle: "F1 Data Platform",

      title: "F1 Data Platform",

      category: "Data Engineering",

      status: "",

      image:
         "assets/img/projects/f1-data-platform.png",

      descriptions: [
         "Built an end-to-end Formula 1 data platform using Python, FastF1, SQL and Tableau, covering ingestion, transformation, modelling and analysis of multi-season race data.",
         "Designed a SQL-based warehouse and custom performance metrics to analyse race, qualifying, driver and team performance, including grid dependency, position changes, pace, reliability and consistency."
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

      image:
         "assets/img/projects/beer-portfolio.png",

      descriptions: [
         "Built an interactive Power BI dashboard to analyse a national beer distribution dataset covering $4.31M in revenue, $1.81M in profit, 561K units sold, 150 SKUs and 3,352 customers.",
         "My primary contribution was designing the analytical data model, building DAX measures and developing the dashboard to analyse performance across products, customer segments, regions, sales channels, ratings and discount levels."
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

      title: "Customer Loyalty & Retention Analytics",

      category: "UNSW Academic Project · Data Science",

      status: "",

      image:
         "assets/img/projects/loyalty-program.png",

      descriptions: [
         "Analysed transaction and loyalty data from 3,200+ customers across a multi-merchant loyalty program to understand spending, engagement, customer value and retention.",
         "Used K-means clustering, logistic regression and statistical testing to identify customer segments and retention drivers, finding retention increased from 66.5% for single-merchant customers to 87.5% for customers engaging with all three merchants."
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
   },
   {
      number: "05",

      shortTitle: "Species Distribution",

      title: "Species Distribution Modelling",

      category: "UNSW Academic Project · Data Science",

      status: "",

      image:
         "assets/img/projects/species-distribution.png",

      descriptions: [
         "Analysed presence–absence data for 8 reptile species across 641 NSW survey plots, exploring class imbalance and relationships between environmental and spatial predictors.",
         "Built and tuned Regularised Logistic Regression models in Python using Scikit-learn, class weighting, cross-validation and Optuna, comparing single-species and joint-species approaches across multiple evaluation metrics."
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
               class="projects_tab ${index === 0 ? "active-project" : ""}"
               type="button"
               data-project="${index}"
               role="tab"
               aria-selected="${index === 0}"
            >
               <span class="projects_tab-number">
                  ${project.number}
               </span>

               <span class="projects_tab-title">
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
            <span class="projects_status">
               ${project.status}
            </span>
         `
         : "";


   const descriptionsHTML =
      project.descriptions.map(description => {
         return `
            <p class="projects_description">
               ${description}
            </p>
         `;
      }).join("");


   const tagsHTML =
      project.tags.map(tag => {
         return `<span>${tag}</span>`;
      }).join("");


   projectsDetail.innerHTML = `

      <div class="projects_detail-grid">

         <div class="projects_detail-content">

            <p class="projects_category">
               ${project.category}
            </p>


            <div class="projects_heading">

               <span class="projects_detail-number">
                  ${project.number}
               </span>

               <h3 class="projects_detail-title">
                  ${project.title}
               </h3>

               ${statusHTML}

            </div>


            ${descriptionsHTML}


            <div class="projects_tags">
               ${tagsHTML}
            </div>


            <div class="projects_links">

               <a
                  href="${project.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projects_link"
               >
                  GitHub

                  <i class="ri-arrow-right-up-line"></i>
               </a>
               ${project.live
         ? `
                        <a
                           href="${project.live}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="projects_link"
                        >
                           Live Demo
                           <i class="ri-arrow-right-up-line"></i>
                        </a>
                     `
         : ""
      }

            </div>

         </div>


         <div class="projects_visual">

            <img
               src="${project.image}"
               alt="${project.title} project preview"
               class="projects_image"
               loading="lazy"
            >

         </div>

      </div>

   `;
};

const setActiveProject = index => {
   const projectTabs =
      document.querySelectorAll(".projects_tab");


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
            event.target.closest(".projects_tab");


         if (!tab) {
            return;
         }


         const index =
            Number(tab.dataset.project);


         setActiveProject(index);
      }
   );
}

if (typeof ScrollReveal !== "undefined") {

   const sr = ScrollReveal({
      origin: "top",
      distance: "32px",
      duration: 750,
      delay: 80,
      reset: false
   });


   sr.reveal(
      ".home_content, .home_capabilities, .section_subtitle, .section_title"
   );


   sr.reveal(
      ".about_content",
      {
         origin: "left"
      }
   );


   sr.reveal(
      ".skills_card, .projects_shell",
      {
         interval: 100
      }
   );


   sr.reveal(
      ".experience_item, .contact_container",
      {
         origin: "bottom"
      }
   );

}
