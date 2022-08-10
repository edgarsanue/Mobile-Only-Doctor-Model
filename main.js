function onScroll() {
    

    if (scrollY > 0) {
        menuRoll.classList.add('scroll')
    } else {
        menuRoll.classList.remove('scroll');
    }

} 

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 700,
}).reveal(`
#home, 
#home img,
#home .stats, 
#services,
#services header,
#services card,.
#about,
#about header,
#about .content`);



