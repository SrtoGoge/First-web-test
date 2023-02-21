/*

] =========== ( Scroll fade navbar ) =========== []

*/


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});


/*

] =========== ( Fade in effect ) =========== []

*/


const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/*

] =========== ( Dropdown ) =========== []

*/


const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


/*

] =========== ( Img Slider ) =========== []

*/


const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 0;

/* Manual nav */

let manualNav = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    
    slides[currentSlide].classList.add('active');
    btns[currentSlide].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        currentSlide = i;
        manualNav();
    });
});

/* Auto nav */

/* M e s s y   a s   s h i t */

var repeat = function(activeClass) {
    var repeater = () => {
        setTimeout(function () {
            
            if (slides.length == currentSlide + 1) {
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
                currentSlide = 0;
            }
            
            btns.forEach((btn) => {
                btn.classList.remove('active');
            });

            slides[currentSlide].classList.add('active');
            btns[currentSlide].classList.add('active');
            currentSlide++;

            if (currentSlide >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();
