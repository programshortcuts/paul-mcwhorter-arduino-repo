export const tutorialLink = document.querySelector('#tutorialLink')
export function changeTutorialLink({e}){
    if(!e.target.dataset.timestamp) return
    let newHref = tutorialLink.href + "&t=" + e.target.dataset.timestamp
    tutorialLink.href = newHref
}