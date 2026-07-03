// nav/main-landing-nav.js
import { mainLandingPage } from "./keyboard-nav.js";

let iStep = -1;
let steps = [];

function updateSteps() {
    steps = [...mainLandingPage.querySelectorAll(".step")];
}

export function refreshSteps() {
    updateSteps();
    iStep = -1;
}
export function mainLandingNav(e) {
    const key = e.key.toLowerCase();
    // always safe if DOM changed
    if (!steps.length) updateSteps();
    if (!steps.length) return false;
    if(!isNaN(key)){
        const intKey = parseInt(key)
        steps[intKey -1].focus()
    }
    if (key === "f") {
        iStep = (iStep + 1) % steps.length;
        steps[iStep]?.focus();
        return true;
    }
    if (key === "a") {
        iStep = (iStep - 1 + steps.length) % steps.length;
        steps[iStep]?.focus();
        return true;
    }
    if (key == 's') {
        if (e.target != sideBarBtn) {
            sideBarBtn.focus()
            return true
        } else {
            // lastClickedSideBarLink
        }
    }
    if (key == 't') {
        const tutorialLink = document.querySelector('#tutorialLink')
        console.log(tutorialLink)
        tutorialLink.focus()
    }
    return false;
}
