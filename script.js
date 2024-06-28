document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, nav ul li a, section, h2, footer, button#dark-mode-toggle, .poster-button').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });
});
