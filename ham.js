document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.getElementById('menu');
    
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
        if (menu.classList.contains('show')) {
            hamburger.textContent = '✖';
        } else {
            hamburger.textContent = '☰';
        }
    });
    
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('show');
            hamburger.textContent = '☰';
        }
    });
});