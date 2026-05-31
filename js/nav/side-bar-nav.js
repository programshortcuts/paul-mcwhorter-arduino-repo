// nav/side-bar-nav.js
import { sideBarBtn } from "../ui/sidebar.js"
let iSideBarLinks = 0;

export function sideBarNav(e) {

    const key = e.key.toLowerCase();

    if (key === 'tab') return false;

    const sideBarLinks = [...document.querySelectorAll('.side-bar a')];
    if (!sideBarLinks.length) return false;


    if (!isNaN(key)) {
        const intKey = parseInt(key)
        sideBarLinks[intKey - 1]?.focus()
        return true
    }
    // 🔥 sync index with actual DOM focus
    const currentIndex = sideBarLinks.indexOf(document.activeElement);
    if (currentIndex !== -1) {
        iSideBarLinks = currentIndex;
    }

    if (key === 'f') {
        if (e.target === sideBarBtn) {
            iSideBarLinks = 0
        } else {
            iSideBarLinks = (iSideBarLinks + 1) % sideBarLinks.length;
        }
        sideBarLinks[iSideBarLinks]?.focus();
        return true;
    }

    if (key === 'a') {
        iSideBarLinks =
            (iSideBarLinks - 1 + sideBarLinks.length) % sideBarLinks.length;

        sideBarLinks[iSideBarLinks]?.focus();
        return true;
    }

    // if (e.target.closest('.side-bar-btns-container')) {
    //     iSideBarLinks = 0
    //     sideBarLinks[iSideBarLinks].focus()
    //     return true
    // }
    if (key == 's') {
        if (e.target != sideBarBtn) {
            console.log(sideBarBtn)
            sideBarBtn.focus()
            return true
        } else {
            // lastClickedSideBarLink
        }
    }
    return false;
}
