// Gallery interactions
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});

function initGallery() {
    const cards = document.querySelectorAll('.gui-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking the link directly
            if (e.target.tagName === 'A') return;
            
            const link = this.querySelector('.gui-link');
            if (link) {
                link.click();
            }
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

