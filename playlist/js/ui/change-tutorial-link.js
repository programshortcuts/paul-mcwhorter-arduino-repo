export const tutorialLink = document.querySelector('#tutorialLink')
export function changeTutorialLink({e}){
    if(!e.target.dataset.timestamp) return
    console.log(e.target.closest('.step'))
    // tutorialLink.dataset.timestamp = 
    console.log(e.target.dataset.timestamp)
    console.log()
    let newHref = tutorialLink.href + "&t=" + e.target.dataset.timestamp
    console.log(newHref)
    tutorialLink.href = newHref
}