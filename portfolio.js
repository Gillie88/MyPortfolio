/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

/* ========= Smooth Scrolling ========= */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ========= Sticky Header ========= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* ========= Active Navigation ========= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ========= Scroll Reveal ========= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ========= Technology Carousel ========= */

const slideTrack = document.querySelector(".slide-track");

if (slideTrack) {

    slideTrack.addEventListener("mouseenter", () => {

        slideTrack.style.animationPlayState = "paused";

    });

    slideTrack.addEventListener("mouseleave", () => {

        slideTrack.style.animationPlayState = "running";

    });

}


/* ========= Project Cards ========= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.cursor = "pointer";

    });

});

/* ===============================
   ABOUT SECTION SCROLL ANIMATION
================================= */

const aboutSection = document.querySelector(".about");

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-about");

        }

    });

}, {

    threshold: 0.2

});

aboutObserver.observe(aboutSection);


/* ================= CONTACT ANIMATION ================= */

const contactSection = document.querySelector(".contact");

const contactObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

footerObserver.observe(footer);

contactObserver.observe(contactSection);

/* ========= Console ========= */

console.log("Portfolio Loaded Successfully");