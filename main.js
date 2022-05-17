window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll()
    showGoToTopButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    }
    else {
        navigation.classList.remove('scroll')
    }
}

function showGoToTopButtonOnScroll() {
    if (scrollY > 550) {
        goToTopButton.classList.add('show')
    }
    else {
        goToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top', distance: '30px', duration: 700,
}).reveal('#home, #home .img-mulher, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content');