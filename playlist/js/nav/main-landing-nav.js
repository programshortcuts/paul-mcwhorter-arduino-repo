// nav/side-bar-nav.js
let iSideBarLinks = 0;

export function mainLandingNav(e) {
    const key = e.key.toLowerCase();

    // if (key === 'tab') return false;

    if(key === 'p'){
        plusBtn.focus()
    }
    if(key === 'e'){
        editBtn.focus()
    }
    if (key === 'f') {
        // if (e.target === sideBarBtn) {
        //     iSideBarLinks = 0
        // } else {
        //     iSideBarLinks = (iSideBarLinks + 1) % sideBarLinks.length;
        // }
        // sideBarLinks[iSideBarLinks]?.focus();
        return true;
    }
    if (key === 'a') {
        // iSideBarLinks =
        //     (iSideBarLinks - 1 + sideBarLinks.length) % sideBarLinks.length;

        // sideBarLinks[iSideBarLinks]?.focus();
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
