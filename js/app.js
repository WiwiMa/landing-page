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
