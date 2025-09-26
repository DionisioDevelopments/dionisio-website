document.addEventListener('DOMContentLoaded', () => {
    // Animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 1; // Default visible
        section.style.transform = 'translateY(0)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section); // Animate on scroll
    });

    // Map (Balmy Beach Road)
    const map = L.map('map').setView([44.6346, -80.9337], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([44.6346, -80.9337]).addTo(map)
        .bindPopup('Balmy Beach Road Project<br>10 Premium Lots near Georgian Bay')
        .openPopup();
});