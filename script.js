// Enhanced JavaScript with animations and smooth scrolling
$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling for all links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            800,
            'swing'
        );
    });

    // Scroll reveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    sr.reveal('.game-card', { interval: 200 });
    sr.reveal('.job-card', { interval: 200 });
    sr.reveal('.contact-method', { interval: 200 });

    // Tooltip initialization
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Scroll down button
    $('.scroll-down').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#games').offset().top - 70
        }, 800);
    });
});

// Initialize ScrollReveal if not already loaded
if (typeof ScrollReveal !== 'function') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/scrollreveal@4.0.7/dist/scrollreveal.min.js';
    document.head.appendChild(script);
}