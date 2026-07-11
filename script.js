const progress = document.querySelector(".progress");
const loadingScreen = document.getElementById("loading-screen");
const hero = document.getElementById("hero");
const dashboard = document.getElementById("dashboard");
const loadingText = document.getElementById("loading-text");

const loadingMessages = [
    "Initializing Portfolio...",
    "Loading Images...",
    "Loading Certificates...",
    "Preparing Experience...",
    "Launching Portfolio..."
];

// ================================
// OPEN DASHBOARD DIRECTLY
// ================================

if (window.location.search.includes("dashboard")) {

    if (loadingScreen) loadingScreen.style.display = "none";
    if (hero) hero.style.display = "none";

    if (dashboard) {
        dashboard.style.display = "block";
    }

    document.body.style.overflow = "auto";

}

// ================================
// NORMAL HOME PAGE
// ================================

else {

    if (sessionStorage.getItem("portfolioLoaded")) {

        if (loadingScreen) loadingScreen.style.display = "none";
        if (hero) hero.style.display = "flex";

        document.body.style.overflow = "auto";

    } else {

        sessionStorage.setItem("portfolioLoaded","true");

        let width=0;

        const interval=setInterval(()=>{

            width++;

            if(progress)
                progress.style.width=width+"%";

            const percent=document.getElementById("loading-percent");

            if(percent)
                percent.innerHTML=width+"%";

            if(loadingText){

                if(width==20) loadingText.innerHTML=loadingMessages[1];
                if(width==40) loadingText.innerHTML=loadingMessages[2];
                if(width==60) loadingText.innerHTML=loadingMessages[3];
                if(width==80) loadingText.innerHTML=loadingMessages[4];

            }

            if(width>=100){

                clearInterval(interval);

                loadingScreen.style.display="none";
                hero.style.display="flex";

                document.body.style.overflow="auto";

            }

        },30);

    }

}

const exploreBtn=document.getElementById("explore-btn");

if(exploreBtn){

    exploreBtn.onclick=function(){

        hero.style.display="none";
        dashboard.style.display="block";

    };

}