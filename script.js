// =============================
// PunarChakra JavaScript
// =============================

// Explore Button
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.querySelector(".features").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// =============================
// Animated Counter
// =============================

const counters = document.querySelectorAll(".card h2");

function animateCounter(counter) {

    const targetText = counter.innerText;

    let target = parseInt(targetText.replace(/\D/g, ""));

    let suffix = targetText.replace(/[0-9]/g, "");

    let current = 0;

    let increment = Math.ceil(target / 80);

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.innerText = target + suffix;

        } else {

            counter.innerText = current + suffix;

            requestAnimationFrame(update);

        }

    };

    update();

}

window.addEventListener("load", () => {

    counters.forEach(counter => {

        animateCounter(counter);

    });

});

// =============================
// Feature Card Animation
// =============================

const features = document.querySelectorAll(".feature");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

features.forEach(feature => {

    feature.style.opacity = "0";

    feature.style.transform = "translateY(50px)";

    feature.style.transition = "0.8s";

    observer.observe(feature);

});

// =============================
// Navbar Active Link
// =============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// =============================
// Random Live Statistics
// =============================

setInterval(() => {

    counters[0].innerHTML = Math.floor(Math.random() * 50 + 120);

    counters[1].innerHTML = Math.floor(Math.random() * 20 + 40);

    counters[2].innerHTML = Math.floor(Math.random() * 20 + 70);

    counters[3].innerHTML = Math.floor(Math.random() * 80 + 250) + " T";

}, 5000);

// =============================
// Welcome Message
// =============================

console.log("🌱 Welcome to PunarChakra");
console.log("Connect • Match • Transform");

// =============================
// End
// =============================
