window.addEventListener("scroll", function() {
    let menuArea = document.getElementById('nav-sticky');

    if(window.pageYOffset > 0) {
        menuArea.classList.add("cus-nav");
        
    } else {
        menuArea.classList.remove("cus-nav");
        menuArea.classList.add("cus-menu");
    }
});

const bg = document.getElementById('header');
    window.addEventListener('scroll', function() {
    bg.style.backgroundSize = 160 - +window.pageYOffset/12+'%';
    bg.style.opacity = 1 - +window.pageYOffset/700+'';
    console.log(bg.style.backgroundSize);
})

