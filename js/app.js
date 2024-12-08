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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const nav = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
const halfPageHeight = (window.innerHeight) / 2;


//Start buildding the nav


for (section of sections) {
    newElementList = document.createElement("li");
    newElementList.innerHTML = `<a href="#${section.id}" data-nav="${section.id}"class="menu__link">${section.getAttribute('data-nav')}</a>`;
    navList.appendChild(newElementList);

}

//End buildding the nav


//Start Adding class 'active' to section when near top of viewport and highlighting the active section in the Navbar

document.addEventListener("scroll", function () {
    for (section of sections) {

        let navListTargetId = section.id;
        let navListTarget = document.querySelector(`[data-nav="${navListTargetId}"]`).parentElement;

        if (section.getBoundingClientRect().top > -halfPageHeight &&
            section.getBoundingClientRect().top < halfPageHeight + 20) {
            section.classList.add("your-active-class");
            navListTarget.classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            navListTarget.classList.remove("active");
        }
    }
    if (sections[0].classList.contains("your-active-class")) {
        up.style.display = "none";
    } else { up.style.display = "flex"; }
});

//End Adding class 'active' to section when near top of viewport



//Start Adding Scroll to anchor ID using scrollIntoView event

navList.addEventListener("click", function (e) {
    e.preventDefault();
    let loc = document.getElementById(`${e.target.dataset.nav}`);
    loc.scrollIntoView({ behavior: "smooth" });
});

//End Addind Scroll to anchor ID using scrollIntoView event



// Start Up Buttoon
const up = document.createElement("span");
document.body.appendChild(up);
up.innerText = "Up";

up.style.position = "fixed";
up.style.bottom = "20px";
up.style.right = "10px";
up.style.width = "50px";
up.style.height = "50px";
up.style.borderRadius = "10px";
up.style.backgroundColor = "#eee";
up.style.color = "rgb(6 84 255)";
up.style.fontSize = "20px";
up.style.fontFamily = "Fira Sans", "sans-serif";
up.style.display = "none";
up.style.alignItems = "center";
up.style.justifyContent = "center";
up.style.cursor = "pointer";

up.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// End Up Buttoon
