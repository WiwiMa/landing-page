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


/* Create additional section */

function createAddSection () {
	let newSection = document.createElement('section');
	newSection.setAttribute('id', 'section4');
	newSection.setAttribute('data-nav', 'Section 4');

	let newSecDiv = document.createElement('div');
	newSecDiv.classList.add('landing__container');

	let newSecH2 = document.createElement('h2');
	newSecH2.textContent = "Section 4";

	let newSecPFirst = document.createElement('p');
	newSecPFirst.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";

	let newSecPSec = document.createElement('p');
	newSecPSec.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

	newSecDiv.appendChild(newSecH2);
	newSecDiv.appendChild(newSecPFirst);
	newSecDiv.appendChild(newSecPSec);
	newSection.appendChild(newSecDiv);

	document.querySelector('main').appendChild(newSection);
}


function createAddNavItem () {
    let newLiElement = document.createElement('li');
    let newAElement = document.createElement('a');
    newAElement.classList.add('menu__link');
    newAElement.classList.add('section4');
    newAElement.setAttribute('href', '#section4');
    newAElement.textContent = "Section 4";

    newLiElement.appendChild(newAElement);  
    document.querySelector('#navbar__list').appendChild(newLiElement);
}


/* Re-organise active sections */

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
    let incNewSections = document.querySelectorAll('section');
    for (const sec of incNewSections) {
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
