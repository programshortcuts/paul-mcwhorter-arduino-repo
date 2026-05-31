// app.js
import { initSidebar } from "./ui/sidebar.js";
import { initKeyboardNav } from "./nav/keyboard-nav.js";
const pageWrapper = document.querySelector('.page-wrapper')
function initApp() {
    initSidebar();
    initGloablListeners()
    const allEls_TEMPORARY = pageWrapper.querySelectorAll('*')
    allEls_TEMPORARY.forEach(el => {
        if(el.hasAttribute('data-autofocus')){
            el.focus()
        }
    })
}

function initGloablListeners(){
    pageWrapper.addEventListener('keydown', e => {
        initKeyboardNav({
            e,
            container: pageWrapper
        })
        
    });
}


initApp();

