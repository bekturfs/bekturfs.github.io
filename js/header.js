// Navigation toggle

(function(){
    const navToggle = document.querySelector('.hamburger-menu');

    navToggle.addEventListener('click', () => {
        document.querySelector('.hamburger-menu').classList.toggle('change');
        document.querySelector('.nav-list').classList.toggle('nav-list-active');
    })
}())