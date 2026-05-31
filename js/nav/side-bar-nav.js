// nav/side-bar-nav.js
let iSideBarLinks = 0
export function sideBarNav(e){
    const sideBarLinks = [
        ...document.querySelectorAll('.side-bar a')
    ]
    const key = e.key.toLowerCase()
    if(!isNaN(key)){
        const intKey = parseInt(key)
        sideBarLinks[intKey-1].focus()
    }
    if(key === 'f'){
        iSideBarLinks = (iSideBarLinks + 1) % sideBarLinks.length
    }
    if(key === 'a'){
        iSideBarLinks = (iSideBarLinks - 1 + sideBarLinks.length) % sideBarLinks.length
    }
    sideBarLinks[iSideBarLinks].focus()
    return true
}