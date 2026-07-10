/* ==========================================
   ANTCASTLE SCROLL ANIMATIONS
========================================== */

// Scroll Reveal

const reveals = document.querySelectorAll(
".card, .feature, .intro, .products, .why, .cta"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// Hero Parallax
// ================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY = offset * 0.5 + "px";

    }

});


// ================================
// Fade Header Background
// ================================

const nav = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});


// ================================
// Product Card Tilt Effect
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = (x - rect.width/2) / 18;

const rotateX = -(y - rect.height/2) / 18;

card.style.transform =
`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


// ================================
// Animate Numbers
// ================================

const counters = document.querySelectorAll(".counter");

const speed = 80;

const animateCounter = (counter)=>{

const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

const increment = target / speed;

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

};

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// ================================
// Smooth Image Loading
// ================================

const images = document.querySelectorAll("img");

images.forEach(img=>{

img.style.opacity = "0";

img.onload = ()=>{

img.style.transition = ".8s";

img.style.opacity = "1";

};

});


// ================================
// Scroll Progress Bar
// ================================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#d4af37";
progress.style.width = "0%";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progressWidth =
(window.pageYOffset / totalHeight) * 100;

progress.style.width = progressWidth + "%";

});


// ================================
// Console Welcome
// ================================

console.log(
"%cWelcome to AntCastle Agro Commodities",
"color:#0f5132;font-size:18px;font-weight:bold;"
);
