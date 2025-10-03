// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar animation on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Hero Section Animations
    gsap.from('.hero-content .section-label', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content .hero-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content .hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
    });
    
    // Hero circle animation
    gsap.from('.hero-circle', {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // Floating cards animation
    gsap.from('.burger-card', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.delivery-card', {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });
    
    // Floating animation for cards
    gsap.to('.burger-card', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.delivery-card', {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5
    });
    
    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 0.1 },
                    ease: 'power1.out',
                    onUpdate: function() {
                        counter.innerText = Math.ceil(this.targets()[0].innerText);
                    }
                });
            },
            once: true
        });
    });
    
    // Stats items animation
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Company History Section
    gsap.from('.history-image', {
        scrollTrigger: {
            trigger: '.company-history',
            start: 'top 70%'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.history-content', {
        scrollTrigger: {
            trigger: '.company-history',
            start: 'top 70%'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Mission Section
    gsap.from('.mission-content', {
        scrollTrigger: {
            trigger: '.mission-section',
            start: 'top 70%'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.mission-image', {
        scrollTrigger: {
            trigger: '.mission-section',
            start: 'top 70%'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Journey Section
    gsap.from('.journey-intro', {
        scrollTrigger: {
            trigger: '.journey-section',
            start: 'top 70%'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Timeline cards stagger animation
    gsap.from('.timeline-card', {
        scrollTrigger: {
            trigger: '.timeline-cards',
            start: 'top 80%'
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Partners Section
    gsap.from('.partners-section .section-label', {
        scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.partners-section .section-title', {
        scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    // Partner cards animation
    gsap.from('.partner-card', {
        scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 60%'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Partner icons bounce on hover
    document.querySelectorAll('.partner-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Press Section
    gsap.from('.press-section .section-label', {
        scrollTrigger: {
            trigger: '.press-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.press-section .section-title', {
        scrollTrigger: {
            trigger: '.press-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    // Press cards stagger animation
    gsap.from('.press-card', {
        scrollTrigger: {
            trigger: '.press-section',
            start: 'top 60%'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // Footer animation
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: 'power3.inOut'
                });
            }
        });
    });
    
    // Add hover animations to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Parallax effect for hero circle
    gsap.to('.hero-circle', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        scale: 0.8,
        opacity: 0.5
    });
    
    console.log('GSAP animations initialized successfully!');
});
