/* Building the Nav */

// Loop nav
const ulNav = document.querySelector('ul');
const sections = document.querySelectorAll('section');

function createNavItem () {
    /* Loop with "for...of" because sections is a node list and NOT an array
    for (let i = 0;...) will NOT work! */
    for (const section of sections) {
        let sectionId = section.getAttribute('id');
        let sectionDataNav = section.getAttribute('data-nav');

        // seems this needs to be created within loop in order not to be overwritten again after
        const liElement = document.createElement('li');

        // seems this needs to be created within loop in order not to be overwritten again after
        const aElement = document.createElement('a');
        aElement.classList.add('menu__link');
        aElement.classList.add(sectionId);
        
        aElement.setAttribute('href', '#' + sectionId);
        aElement.textContent = sectionDataNav;
        liElement.appendChild(aElement);
        ulNav.appendChild(liElement);
    }
}

createNavItem();

/*
// Hide nav when scrolling down, show when scrolling up

var initialOffset = window.pageYOffset;

window.onscroll = function () {
    var currentOffset = window.pageYOffset;
    if (initialOffset > currentOffset) {
        document.querySelector('.page__header').classList.remove('navbar__scroll');
    } else {
        document.querySelector('.page__header').classList.add('navbar__scroll');
    }
    initialOffset = currentOffset;
};

// Display active section in nav
var halfWay = window.innerHeight / 2;

window.onscroll = function () {
    for (const sec of sections) {
        if (sec.getBoundingClientRect().top < halfWay && sec.getBoundingClientRect().top >= 0) {
            var prevActNavItem = document.querySelector('.menu__link.active');
            if (!prevActNavItem) {} else {
                prevActNavItem.classList.remove('active');
                };
            var activeSectionId = sec.getAttribute('id');
            console.log(activeSectionId);
            var activeNavItem = document.querySelector('.menu__link.' + activeSectionId);
            activeNavItem.classList.add('active');
        }
    }
}
*/

var initialOffset = window.pageYOffset;
var halfWay = window.innerHeight / 2;

window.onscroll = function () {
    var currentOffset = window.pageYOffset;
    if (initialOffset > currentOffset) {
        document.querySelector('.page__header').classList.remove('navbar__scroll');
    } else {
        document.querySelector('.page__header').classList.add('navbar__scroll');
    }
    initialOffset = currentOffset;
    for (const sec of sections) {
        if (sec.getBoundingClientRect().top < halfWay && sec.getBoundingClientRect().top >= 0) {
            var prevActNavItem = document.querySelector('.menu__link.active');
            if (!prevActNavItem) {} else {
                prevActNavItem.classList.remove('active');
                };
            var activeSectionId = sec.getAttribute('id');
            console.log(activeSectionId);
            var activeNavItem = document.querySelector('.menu__link.' + activeSectionId);
            activeNavItem.classList.add('active');
        }
    }
};


/* Interactivity of Mobile Menu */

const mobMenuOpener = document.querySelector('.menu__open');
const mobMenuCloser = document.querySelector('.menu__close');

mobMenuOpener.addEventListener('click', function openMobMenu() {
    document.querySelector('.navbar__menu').classList.remove('hide');
    mobMenuCloser.classList.remove('hide');
    mobMenuOpener.classList.add('hide');
});

mobMenuCloser.addEventListener('click', function closeMobMenu() {
    document.querySelector('.navbar__menu').classList.add('hide');
    mobMenuCloser.classList.add('hide');
    mobMenuOpener.classList.remove('hide');
});

const allMenuSections = document.querySelectorAll('.navbar__menu ul li');

for (oneMenuSection of allMenuSections) {
    oneMenuSection.addEventListener('click', function closeMobMenu(){
        document.querySelector('.navbar__menu').classList.add('hide');
        mobMenuCloser.classList.add('hide');
        mobMenuOpener.classList.remove('hide');
    });
}
