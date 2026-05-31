// nav/side-bar-nav.js
export function sideBarNav(e){
    const sideBarLinks = [
        ...document.querySelectorAll('.side-bar a')
    ]
    const key = e.key.toLowerCase()
    if(!isNaN(key)){
        const intKey = parseInt(key)
        sideBarLinks[intKey-1].focus()
    }

    return true
}