/*=========================================
        BARAKAH GROUP OF ACADEMIES
              script.js
=========================================*/

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";
        header.style.background = "rgba(255,255,255,.96)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";
        header.style.background = "rgba(255,255,255,.85)";

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".title,.about-grid,.course-card,.facility,.gallery-grid img,.contact-box,.stats .card"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".stats h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const section = document.querySelector(".stats");

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let current = 0;

            const speed = target / 80;

            const update = () => {

                current += speed;

                if (current < target) {

                    counter.innerText = Math.floor(current) + "+";

                    requestAnimationFrame(update);

                } else {

                    if (counter.innerText.includes("%")) {

                        counter.innerText = target + "%";

                    } else {

                        counter.innerText = target + "+";

                    }

                }

            };

            if (counter.innerText.includes("%")) {

                const percentTarget = parseInt(counter.innerText);

                let value = 0;

                const animatePercent = () => {

                    value++;

                    counter.innerText = value + "%";

                    if (value < percentTarget) {

                        requestAnimationFrame(animatePercent);

                    }

                };

                animatePercent();

            } else {

                update();

            }

        });

    }

}

window.addEventListener("scroll", startCounter);

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Scroll Offset
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Hero Floating Effect
// ===============================

const heroLogo = document.querySelector(".circle");

// window.addEventListener("mousemove", (e)=>{

//     const x = (window.innerWidth / 2 - e.clientX) / 40;
//     const y = (window.innerHeight / 2 - e.clientY) / 40;

//     heroLogo.style.transform =
//     `translate(${x}px, ${y}px)`;

// });

// ===============================
// Fade In on Page Load
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// ===============================
// Console Message
// ===============================

console.log(
"%cBarakah Group of Academies",
"color:#1F3C88;font-size:20px;font-weight:bold;"
);

console.log(
"Pakistan Mint Campus Website Loaded Successfully."
);