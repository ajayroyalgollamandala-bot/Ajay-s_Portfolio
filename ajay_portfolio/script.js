const progress = document.querySelector(".progress");
const loadingScreen = document.getElementById("loading-screen");
const hero = document.getElementById("hero");

let width = 0;

const interval = setInterval(() => {
    width++;
    progress.style.width = width + "%";

    if (width >= 100) {
        clearInterval(interval);

        setTimeout(() => {
            loadingScreen.style.display = "none";
            hero.style.display = "flex";
            document.body.style.overflow = "auto";
        }, 500);
    }
}, 30);