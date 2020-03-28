const menuSelector = document.querySelector('[data-line-container]');
const navSelector = document.querySelector('nav');
const mainBodySelector = document.querySelector('main');
menuSelector.addEventListener('click', showOrHideNav);

function showOrHideNav(){
    if(navSelector.classList.contains('menu-open')){
        navSelector.classList.remove('menu-open');
        mainBodySelector.style.height = `${100-16}vh`;
        menuButtonBackToNormal();
    }
    else{
         navSelector.classList.add('menu-open');
         mainBodySelector.style.height = `${100-56}vh`;
         menuButtonModified();
    }

}
function menuButtonBackToNormal(){
    menuSelector.classList.add('menu-open');

}
function menuButtonModified(){
    menuSelector.classList.remove('menu-open');
}