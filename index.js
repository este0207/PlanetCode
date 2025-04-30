const nextBtn = document.querySelector("#Next");
const nextBtn2 = document.querySelector("#Next2");
const aboutUsWindow = document.querySelector(".aboutUs");
const arrow = document.querySelector(".fa-arrow-left");
const africaArrow = document.querySelector(".africaArrow");
const Gatewaybtn = document.querySelector("#Gatewaybtn");
const GatewayWindow = document.querySelector(".Gateway");
const titleDiv = document.querySelector(".title");
const africaCase = document.querySelector(".africa");
const franceCase = document.querySelector(".france");
const USACase = document.querySelector(".USA");
const ChinaCase = document.querySelector(".China");
const RussiaCase = document.querySelector(".Russia");
const VietnamCase = document.querySelector(".Vietnam");
const africaBtn1 = document.querySelector("#africaBtn1");
const africaBtn2 = document.querySelector("#africaBtn2");
const africaCaseSenegal = document.querySelector(".africaCaseSenegal");
const africaCaseNamibia = document.querySelector(".africaCaseNamibia");
const africaOpen = document.querySelector("#africaOpen");
const fullAfrica = document.querySelector(".fullAfrica");

function handleNextButtonClick(button) {
    button.style.right = "100px";
    button.style.opacity = "0";
    setTimeout(() => {
        button.style.display = "none";
        console.log("ok");
    }, 1000);
    aboutUsWindow.style.left = "0";
}

nextBtn.addEventListener("click", () => handleNextButtonClick(nextBtn));
nextBtn2.addEventListener("click", () => handleNextButtonClick(nextBtn));

if (arrow) {
    arrow.addEventListener("click", () => {
        nextBtn.style.display = "flex";
        setTimeout(() => {
            nextBtn.style.opacity = "1";
            nextBtn.style.right = "50%";
        }, 100);
        aboutUsWindow.style.left = "-100%";
    });
}

if (africaArrow) {
    africaArrow.addEventListener("click", () => {
       fullAfrica.classList.add("scale-down");
    });
}

if (Gatewaybtn) {
    Gatewaybtn.addEventListener("click", () => {
        titleDiv.classList.add("scale-down");
        setTimeout(() => {
            GatewayWindow.classList.add("scale-up");
        }, 500);
    });
}

if (africaOpen) {
    africaOpen.addEventListener("click", () => {
        fullAfrica.classList.toggle("scale-up");
    });
} else {
    console.log("africaOpen not work")
}

africaCase.addEventListener("click", () => {
    console.log("click africa");
})

franceCase.addEventListener("click", () => {
    console.log("click france");
});

USACase.addEventListener("click", () => {
    console.log("click USA");
});

ChinaCase.addEventListener("click", () => {
    console.log("click China");
});

RussiaCase.addEventListener("click", () => {
    console.log("click Russia");
});

VietnamCase.addEventListener("click", () => {
    console.log("click Vietnam");
});

africaBtn1.addEventListener("click", () => {
    africaCaseSenegal.classList.toggle("active");
})

africaBtn2.addEventListener("click", () => {
    africaCaseNamibia.classList.toggle("active");
});