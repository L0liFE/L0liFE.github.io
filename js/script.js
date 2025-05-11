
// 🎭 Fixed list of names~
const names = [
    "L✦liFE~",
    "岩食砂~",
    "Yukio Hikari~",
    "The Madman Jester 🤡",
];

// 🎨 List of possible suffixes for the title~
const titleSuffixes = [
    "Website",
    "Domain",
    "Portfolio",
    "Workshop",
    "Playground",
    "Wonderland",
    "Madhouse",
    "Chaos Dungeon",
    "Digital Circus",
    "Dream Archive",
];

// ==============================
// 🎩 Dynamic Page Title Madness
// ==============================

// Every 2.5 seconds, this script randomly picks a new name (without the tail)
// a whimsical title suffix from the titleSuffixes array,
// and the last item in the names array is skipped to avoid unneeded name~
// then updates the browser tab title accordingly.

// 🔁 Interval to update the <title> every 2.5 seconds~
setInterval(() => {
    // 🎲 Pick a random name index (excluding last name which might contain tails)
    const nameIndex = Math.floor(Math.random() * (names.length - 1));

    // ✂️ Remove any tail characters like "~" or emojis
    const titleText = removeTailCharacters(names[nameIndex]);

    // 🎰 Randomly choose a fancy suffix
    const suffix = titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)];

    // 📝 Update the document title in the browser tab
    document.title = `${titleText} ${suffix}`;
}, 2500);



// ==============================
// 🌐 Navigation Toggle (Mobile)
// ==============================

// When the mobile navbar button is clicked,
// toggle the "active" class on both the button and the menu.
// This will show or hide the menu with CSS styling.
const navbarButton = document.getElementById('navbar-button'); // Get the ID of "navbar-button" in the HTML document
const menu = document.getElementById('navbar-menu'); // Get the ID of "navbar-menu" in the HTML document

navbarButton.addEventListener('click', () => {
    navbarButton.classList.toggle('active');
    menu.classList.toggle('active');
});

// ======================================
// 🔗 Smooth Anchor Scrolling on Click
// ======================================

// For every link that starts with a "#" (an anchor),
// this smoothly scrolls the page to the target section
// instead of jumping instantly.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default jump behavior

        // Get the target element from the href attribute
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const yOffset = -80; // Adjust scroll position (e.g., for sticky header)
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            // Smooth scroll to the calculated position
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    });
});

// =============================================
// ✨ Glitch Animation for Hero Name (With Tail)
// =============================================

// Changes the hero title (e.g., "Yukio Hikari~") every few seconds,
// including its stylish tail character like "~" or "🤡".
animateNameChange({
    elements: [document.getElementById('titleChanger')],
    withTail: true // Keep the tail
});

// ====================================================
// ✨ Glitch Animation for Other Names (No Tail Emoji)
// ====================================================

// Changes any element with the class "nameChanger" periodically,
// but removes the final tail character to keep things neat.
animateNameChange({
    elements: Array.from(document.querySelectorAll(".nameChanger")),
    withTail: false // Remove the tail
});

// ===================================
// 🔧 Helper: Remove Tail Characters
// ===================================

// Removes the last `count` characters from a string safely,
// accounting for emojis or characters that use more than 1 byte.
function removeTailCharacters(text, count = 1) {
    const graphemes = Array.from(text); // Split string into visible characters
    return graphemes.slice(0, -count).join(""); // Remove and rejoin
}

// ==========================================
// 🔁 Name Changer with Optional Tail
// ==========================================

/**
 * Animates a text change loop for one or more elements,
 * creating a "glitchy" flicker effect while cycling through names.
 *
 * @param {HTMLElement[]} elements - The elements to apply the animation to
 * @param {boolean} withTail - Whether to keep the final character (e.g., "~")
 * @param {number} interval - Time in milliseconds between changes
 * @param {string} animationClass - CSS class to trigger animation styles
 */
function animateNameChange({
    elements,
    withTail = true,
    interval = 2500,
    animationClass = 'glitch-text-highlight'
}) {
    let index = 0; // Tracks which name we're on

    setInterval(() => {
        // First phase: Fade out and remove animation
        elements.forEach(el => {
            el.classList.remove(animationClass);
            el.style.opacity = 0;
        });

        // After a short delay, update the text and animate it back in
        setTimeout(() => {
            // Limit the index based on whether we want to include the last name
            const maxIndex = withTail ? names.length : names.length - 1;

            // Move to the next index, looping if needed
            index = (index + 1) % maxIndex;

            // Either use the full name or strip the last character(s)
            const text = withTail ? names[index] : removeTailCharacters(names[index]);

            // Apply the new text and fade it in with the animation
            elements.forEach(el => {
                el.textContent = text;
                el.style.opacity = 1;
                void el.offsetWidth; // Force reflow to restart animation
                el.classList.add(animationClass);
            });
        }, 500); // Delay before fading in again
    }, interval); // How often the name changes
}
