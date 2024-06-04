function updateMenuDisplay() {
    var navLinks = document.getElementById('nav-links');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');

    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'block';
        if (navLinks.classList.contains('show')) {
            closeIcon.style.display = 'block';
        } else {
            closeIcon.style.display = 'none';
        }
    }
}

function closeMenu() {
    var navLinks = document.getElementById('nav-links');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');

    if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    var closeIcon = document.getElementById('close-icon');
    navLinks.classList.toggle('show');
    closeIcon.style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('close-icon').addEventListener('click', closeMenu);

document.querySelectorAll('#nav-links a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', updateMenuDisplay);
window.addEventListener('load', updateMenuDisplay);
