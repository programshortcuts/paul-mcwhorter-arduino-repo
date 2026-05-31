// keyboard.js
import { getFocusZone } from "./focus-zones.js"
import { sideBarNav } from "./side-bar-nav.js"
const navState = {
    zone: null,
    isLetterNav: false
}
export function initKeyboardNav({e,container}){
    navState.zone = getFocusZone(e)
    // should i query side-bar a elements here?
    routeKey(e)   
}
function routeKey(e){
    // object destructuring
    const {zone,isLetterNav} = navState
    // should i query side-bar a elements here?
    if(zone === 'side-bar'){
        const isHandled = sideBarNav(e)
        console.log(isHandled)
        if(isHandled) return
    }
}