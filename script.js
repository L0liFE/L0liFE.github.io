
const navbarButton = document.getElementById('navbar-button');
const menu = document.getElementById('navbar-menu');
const changer = document.getElementById("name-changer");

const names = [
    "Yukio Hikari~",
    "L✦liFE~",
    "岩食砂~",
    "The Madman Jester 🤡",
];

// Navigation (Navbar) button for mobile interface~ 
navbarButton.addEventListener('click', () => {
    navbarButton.classList.toggle('active');
    menu.classList.toggle('active');
});

// Smooth scrolling when clicking anchor links~
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const yOffset = -80;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    });
});

// Name changing with an interval of 2.5 seconds~
let index = 0;
setInterval(() => {
    changer.classList.remove("glitch-text");
    changer.style.opacity = 0;
    setTimeout(() => {
        index = (index + 1) % names.length;
        changer.textContent = names[index];
        changer.style.opacity = 1;
        void changer.offsetWidth;
        changer.classList.add("glitch-text");
    }, 500);
}, 2500);
