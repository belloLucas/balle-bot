const btnMobile = document.getElementById('mobile-button');

function toggleMenu(event){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);