// Function to filter videos based on category
function filterVideos(category) {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Smooth scroll to the section when clicking the anchor tag
// Smooth scroll to the section when clicking the anchor tag
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Check if the target section exists
        if (targetSection) {
            // Use scrollIntoView for smooth scrolling
            targetSection.scrollIntoView({
                behavior: 'smooth',  // Smooth scrolling
                block: 'start'       // Align to the top of the section
            });
        }
    });
});

