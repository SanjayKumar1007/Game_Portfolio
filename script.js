// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    let loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.style.display = "none";

    }, 2000);

});




// =========================
// PRESS START SYSTEM
// =========================
// =========================
// SCREEN REFERENCES
// =========================

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start-screen");
const mainMenu = document.getElementById("main-menu");

const gamesScreen = document.getElementById("games-screen");
const projectsScreen = document.getElementById("projects-screen");

const unityScreen = document.getElementById("unity-screen");
const blenderScreen = document.getElementById("blender-screen");
const photoshopScreen = document.getElementById("photoshop-screen");

const aboutScreen = document.getElementById("about-screen");
const skillsScreen = document.getElementById("skills-screen");
const galleryScreen = document.getElementById("gallery-screen");
const contactScreen = document.getElementById("contact-screen");

const digitalScreen = document.getElementById("digital-screen");
const artScreen = document.getElementById("art_deco");
const posterScreen = document.getElementById("poster");
const photoScreen = document.getElementById("photography_poster");
const microScreen = document.getElementById("micro_world");
const brandScreen = document.getElementById("brand_portfolio");

const backMenu = document.getElementById("backMenu");
console.log("JS RUNNING");

console.log(gamesScreen);


startBtn.addEventListener("click", function () {

    console.log("BUTTON CLICKED");

    startScreen.classList.add("hidden");

    mainMenu.classList.remove("hidden");

    clickSound.currentTime = 0;
    clickSound.play();

});


// =========================
// MENU SYSTEM
// =========================


const menuItems = document.querySelectorAll("#main-menu li");


let currentMenu = 0;



function updateMenu() {


    menuItems.forEach((item, index) => {


        if (index === currentMenu) {


            item.classList.add("active");


            item.innerHTML = "▶ " + item.innerText.replace("▶ ", "");


        }

        else {


            item.classList.remove("active");


            item.innerHTML = item.innerText.replace("▶ ", "");


        }


    });


}



updateMenu();




// =========================
// KEYBOARD CONTROL
// =========================


document.addEventListener("keydown", (event) => {


    // MAIN MENU CONTROL

    if (!mainMenu.classList.contains("hidden")) {


        if (event.key === "ArrowDown") {


            currentMenu++;


            if (currentMenu >= menuItems.length)

                currentMenu = 0;



            updateMenu();

        }



        if (event.key === "ArrowUp") {


            currentMenu--;


            if (currentMenu < 0)

                currentMenu = menuItems.length - 1;



            updateMenu();

        }



        if (event.key === "Enter") {


            let selected = menuItems[currentMenu];


            let screen = selected.dataset.screen;



            if (screen === "games") {
                changeScreen(mainMenu, projectsScreen);
            }

        }


    }



    // BACK BUTTON

    if (event.key === "Escape") {


        if (!gamesScreen.classList.contains("hidden")) {


            changeScreen(gamesScreen, mainMenu);


        }


    }


});




// =========================
// MOUSE CLICK MENU
// =========================


menuItems.forEach((item, index) => {


    item.addEventListener("mouseenter", () => {


        currentMenu = index;


        updateMenu();


    });


});// =========================
// GAME DETAILS SYSTEM
// =========================


const gameButtons = document.querySelectorAll(".view-game");


const gameDetails = document.getElementById("game-details");


const gameTitle = document.getElementById("gameTitle");


const gameImage = document.getElementById("gameImage");

const gameVideo = document.getElementById("gameVideo");
const gameVideoSource = document.getElementById("gameVideoSource");


const gameDescription = document.getElementById("gameDescription");


const detailsBack = document.getElementById("detailsBack");




document.getElementById("unityBtn").onclick = () => {
    changeScreen(projectsScreen, unityScreen);
};

document.getElementById("blenderBtn").onclick = () => {
    changeScreen(projectsScreen, blenderScreen);
};

document.getElementById("photoshopBtn").onclick = () => {
    changeScreen(projectsScreen, photoshopScreen);
};

document.getElementById("unityBack").onclick = () => {
    changeScreen(unityScreen, projectsScreen);
};

document.getElementById("blenderBack").onclick = () => {
    changeScreen(blenderScreen, projectsScreen);
};

document.getElementById("photoshopBack").onclick = () => {
    changeScreen(photoshopScreen, projectsScreen);
};

document.getElementById("projectsBack").onclick = () => {
    changeScreen(projectsScreen, mainMenu);
};


// GAME DATABASE


const games = {
    graveyard: {
        title: "THE CURSED GRAVEYARD",
        image: "Pic/graveyard_title.jpg",
        video: "video/graveyard.mp4",

        description:
            `
        Genre: 3D Horror Game

        Engine: Unity

        Platform: PC

        Features:
        - Ghost AI
        - Map System
        - Inventory System
        - Exploration
        - Survival Gameplay
        - Story Mode

        `


    },
    astro: {


        title: "ASTRO RUNNER",


        image: "Pic/astrorunner_title.png",
        video: "video/astro.mp4",

        description:
            `
        Genre: Endless Runner

        Engine: Unity

        Platform: PC

        Features:
        - Fast Movement
        - Score System
        - Obstacle Avoidance
        - Shield & Flying Power-ups
        - Power Upgrade System

        `


    },

    treasure: {


        title: "THE TREASURE HUNTERS",


        image: "Pic/hunter_title.png",
        video: "video/treasure.mp4",

        description:
            `
        Genre: Adventure Action 2D Game

        Engine: Unity

        Platform: PC

        Features:
        - Health Power-ups
        - Exploration
        - Enemy Challenges
        - Dynamic Light & Dark Theme
        - Epic Boss Fight

        `


    },


    temple: {


        title: "TEMPLE OF LUCK",


        image: "Pic/temple.png",
        video: "video/templeofluck.mp4",

        description:
            `
        Genre: Casino Slot Game

        Engine: Unity

        Platform: PC

        Features:
        - 5x4 Slot Machine Reels
        - Adjustable Bet System
        - Spin & Auto Spin
        - Win and Lose Mechanics
        - Wild & Bonus Symbols
        - Credit Balance Management
        - Winning Animations & Sound Effects
        - Randomized Reel Outcomes

        `


    }

};
// OPEN GAME DETAILS

gameButtons.forEach(button => {

    button.addEventListener("click", () => {

        let gameID = button.dataset.game;
        let selectedGame = games[gameID];

        // If coming from Unity Projects
        if (!unityScreen.classList.contains("hidden")) {
            changeScreen(unityScreen, gameDetails);
        }
        // If coming from old Game Screen
        else if (!gamesScreen.classList.contains("hidden")) {
            changeScreen(gamesScreen, gameDetails);
        }

        gameTitle.innerText = selectedGame.title;

        gameVideoSource.src = selectedGame.video;
        gameVideo.poster = selectedGame.image;
        gameVideo.load();

        gameDescription.innerText = selectedGame.description;

    });

});




// BACK TO GAME LIST

detailsBack.addEventListener("click", () => {

    changeScreen(gameDetails, unityScreen);

});


// =========================
// AUDIO SYSTEM
// =========================


const bgMusic = document.getElementById("bgMusic");

const selectSound = document.getElementById("selectSound");

const hoverSound = document.getElementById("hoverSound");

const clickSound = document.getElementById("clickSound");



let musicEnabled = true;




// START MUSIC AFTER USER CLICK


startBtn.addEventListener("click", () => {


    if (musicEnabled && bgMusic) {


        bgMusic.volume = 0.4;


        bgMusic.play()
            .catch(error => {

                console.log("Music waiting for user interaction");

            });


    }


});





// MENU MOVE SOUND

document.addEventListener("keydown", (event) => {


    if (event.key === "ArrowUp" ||
        event.key === "ArrowDown") {


        if (selectSound) {


            selectSound.currentTime = 0;


            selectSound.play()
                .catch(() => { });


        }


    }


});





// BUTTON CLICK SOUND

document.querySelectorAll("button")
    .forEach(button => {


        button.addEventListener("click", () => {


            if (clickSound) {


                clickSound.currentTime = 0;


                clickSound.play()
                    .catch(() => { });


            }


        });


    });





// MENU HOVER SOUND



document.querySelectorAll("li")
    .forEach(item => {


        item.addEventListener("mouseenter", () => {


            if (hoverSound) {


                hoverSound.currentTime = 0;


                hoverSound.play()
                    .catch(() => { });


            }


        });


    });

;// =========================
// SCREEN TRANSITION SYSTEM
// =========================


function changeScreen(hideScreen, showScreen) {

    hideScreen.classList.add("hidden");

    showScreen.classList.remove("hidden");

}
backMenu.addEventListener("click", () => {

    changeScreen(gamesScreen, mainMenu);

});


// =========================
// SETTINGS SYSTEM
// =========================


const exitBtn = document.getElementById("exitBtn");


let soundEnabled = true;



// SETTINGS MENU


menuItems.forEach(item => {


    item.addEventListener("click", () => {



        clickSound.currentTime = 0;
        clickSound.play();

        if (item.dataset.screen === "settings") {


            soundEnabled = !soundEnabled;


            if (bgMusic) {


                if (soundEnabled) {


                    bgMusic.play();


                }

                else {


                    bgMusic.pause();


                }


            }


            alert(
                "Sound : " +
                (soundEnabled ? "ON" : "OFF")
            );


        }


    });


});





// =========================
// EXIT SCREEN
// =========================


exitBtn.addEventListener("click", () => {


    mainMenu.classList.add("hidden");


    document.body.innerHTML = `

    <div class="exit-screen">

        <h1>

        THANK YOU FOR VISITING

        </h1>


        <p>

        SANJAY KUMAR
        <br>
        UNITY GAME DEVELOPER

        </p>


    </div>

    `;


});





// =========================
// MOBILE TOUCH CONTROL
// =========================


let touchStartY = 0;


document.addEventListener("touchstart", (event) => {


    touchStartY = event.changedTouches[0].screenY;


});



document.addEventListener("touchend", (event) => {


    let touchEndY =
        event.changedTouches[0].screenY;



    if (touchStartY - touchEndY > 50) {


        currentMenu++;


        if (currentMenu >= menuItems.length)

            currentMenu = 0;



        updateMenu();


    }



    if (touchEndY - touchStartY > 50) {


        currentMenu--;


        if (currentMenu < 0)

            currentMenu = menuItems.length - 1;



        updateMenu();


    }



});





// =========================
// GAMEPAD SUPPORT
// =========================


let gamepadConnected = false;



window.addEventListener(
    "gamepadconnected",
    () => {


        gamepadConnected = true;


        console.log(
            "Gamepad Connected"
        );


    });




function checkGamepad() {


    if (!gamepadConnected)

        return;



    let gamepads =
        navigator.getGamepads();



    let gp = gamepads[0];



    if (!gp)

        return;



    if (gp.buttons[0].pressed) {


        console.log(
            "Gamepad Select"
        );


    }


}



setInterval(checkGamepad, 100);// =========================
// ALL SCREEN CONNECTIONS
// =========================


// BACK BUTTONS

const aboutBack = document.getElementById("aboutBack");

const skillsBack = document.getElementById("skillsBack");

const galleryBack = document.getElementById("galleryBack");

const contactBack = document.getElementById("contactBack");





// MAIN MENU SCREEN OPENING


menuItems.forEach(item => {

    item.addEventListener("click", () => {

        let screen = item.dataset.screen;

        switch (screen) {

            case "home":
                changeScreen(mainMenu, startScreen);
                break;

            case "games":
                changeScreen(mainMenu, projectsScreen);
                break;
                break;;

            case "about":
                changeScreen(mainMenu, aboutScreen);
                break;

            case "skills":
                changeScreen(mainMenu, skillsScreen);
                break;

            case "gallery":
                changeScreen(mainMenu, galleryScreen);
                break;

            case "contact":
                changeScreen(mainMenu, contactScreen);
                break;
        }

    });

});





// =========================
// BACK TO MAIN MENU
// =========================



aboutBack.addEventListener("click", () => {


    changeScreen(aboutScreen, mainMenu);


});




skillsBack.addEventListener("click", () => {


    changeScreen(skillsScreen, mainMenu);


});




galleryBack.addEventListener("click", () => {


    changeScreen(galleryScreen, mainMenu);


});




contactBack.addEventListener("click", () => {


    changeScreen(contactScreen, mainMenu);


});

document.getElementById("digitalBtn").onclick = () => {
    changeScreen(photoshopScreen, digitalScreen);
};

document.getElementById("artBtn").onclick = () => {
    changeScreen(photoshopScreen, artScreen);
};

document.getElementById("posterBtn").onclick = () => {
    changeScreen(photoshopScreen, posterScreen);
};

document.getElementById("photoBtn").onclick = () => {
    changeScreen(photoshopScreen, photoScreen);
};

document.getElementById("microBtn").onclick = () => {
    changeScreen(photoshopScreen, microScreen);
};

document.getElementById("brandBtn").onclick = () => {
    changeScreen(photoshopScreen, brandScreen);
};

// =========================
// IMAGE POPUP
// =========================

const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".gallery-container img").forEach(img => {

    img.addEventListener("click", () => {
        popup.classList.remove("hidden");
        popupImg.src = img.src;
    });

});

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {
        popup.classList.add("hidden");
    }

});
const digitalBack = document.getElementById("digitalBack");
const artBack = document.getElementById("artBack");
const posterBack = document.getElementById("posterBack");
const photoBack = document.getElementById("photoBack");
const microBack = document.getElementById("microBack");
const brandBack = document.getElementById("brandBack");

digitalBack.onclick = () => {
    changeScreen(digitalScreen, photoshopScreen);
};

artBack.onclick = () => {
    changeScreen(artScreen, photoshopScreen);
};

posterBack.onclick = () => {
    changeScreen(posterScreen, photoshopScreen);
};

photoBack.onclick = () => {
    changeScreen(photoScreen, photoshopScreen);
};

microBack.onclick = () => {
    changeScreen(microScreen, photoshopScreen);
};

brandBack.onclick = () => {
    changeScreen(brandScreen, photoshopScreen);
};
