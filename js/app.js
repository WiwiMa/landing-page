/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// loop nav
const ulNav = document.querySelector('ul');
const sections = document.querySelectorAll('section');

function createNavItem () {
    // loop with "for...of" because sections is a node list and NOT an array
    // for (let i = 0;...) will NOT work!
    for (const section of sections) {
        let sectionId = section.getAttribute('id');
        let sectionDataNav = section.getAttribute('data-nav');

        // seems this needs to be created within loop in order not to be overwritten again after
        const liElement = document.createElement('li');

        // seems this needs to be created within loop in order not to be overwritten again after
        const aElement = document.createElement('a');
        aElement.classList.add('menu__link');
        
        aElement.setAttribute('href', '#' + sectionId);
        aElement.textContent = sectionDataNav;
        liElement.appendChild(aElement);
        ulNav.appendChild(liElement);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


