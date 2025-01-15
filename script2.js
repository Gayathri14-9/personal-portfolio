// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element, centering it in the viewport
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // Change this to 'center' for centering
            inline: 'nearest' // Optional: adjust horizontal alignment if needed
        });
    });
});