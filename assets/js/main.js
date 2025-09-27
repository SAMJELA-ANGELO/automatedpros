// Dropdown arrow rotation for Pages menu
document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('navbarDropdown');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('show.bs.dropdown', function() {
            dropdownToggle.classList.add('dropdown-open');
        });
        dropdownToggle.addEventListener('hide.bs.dropdown', function() {
            dropdownToggle.classList.remove('dropdown-open');
        });
    }
});

// --- Mobile-specific GSAP Animations ---
document.addEventListener('DOMContentLoaded', function() {
    if (window.gsap && window.ScrollTrigger && window.matchMedia('(max-width: 991.98px)').matches) {
        // Footer fade-in and pop for logo, description, and buttons
        gsap.from('#footer-section .footer-logo', {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#footer-section .footer-logo',
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        gsap.from('#footer-section .footer-desc', {
            opacity: 0,
            y: 30,
            duration: 0.7,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#footer-section .footer-desc',
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        gsap.from('#footer-section .footer-btn', {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            delay: 0.4,
            ease: 'back.out(1.7)',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '#footer-section .footer-btn',
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        // Menu and utility fade-in
        gsap.from('#footer-section .footer-menu li, #footer-section .footer-utility li', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
                trigger: '#footer-section .footer-menu',
                start: 'top 98%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        // City icons staggered fade-in
        gsap.from('#footer-section .footer-locations .location-item', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
                trigger: '#footer-section .footer-locations',
                start: 'top 98%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        // Copyright fade-in
        gsap.from('#footer-section .footer-copyright', {
            opacity: 0,
            y: 15,
            duration: 0.5,
            delay: 0.2,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '#footer-section .footer-copyright',
                start: 'top 99%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    }
});
// GSAP Animation for Floating Help Box Card Swap
document.addEventListener('DOMContentLoaded', function() {
    if (window.gsap) {
        const card1 = document.querySelector('.floating-help-box .card1');
        const card2 = document.querySelector('.floating-help-box .card2');
        if (card1 && card2) {
            gsap.set(card1, {y: 0, opacity: 1, zIndex: 2});
            gsap.set(card2, {y: 40, opacity: 0, zIndex: 1});
            let showingFirst = true;
            setInterval(() => {
                if (showingFirst) {
                    gsap.to(card1, {y: -40, opacity: 0, duration: 0.7, ease: 'power2.inOut', zIndex: 1});
                    gsap.to(card2, {y: 0, opacity: 1, duration: 0.7, ease: 'power2.inOut', zIndex: 2});
                } else {
                    gsap.to(card2, {y: 40, opacity: 0, duration: 0.7, ease: 'power2.inOut', zIndex: 1});
                    gsap.to(card1, {y: 0, opacity: 1, duration: 0.7, ease: 'power2.inOut', zIndex: 2});
                }
                showingFirst = !showingFirst;
            }, 3000);
        }
    }
});
// Dynamic Navbar Hide/Show on Scroll
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('main-header');
    if (navbar) {
        window.addEventListener('scroll', function() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop && st > 80) {
                // Scroll Down
                navbar.style.transform = 'translateY(-100%)';
                navbar.style.transition = 'transform 0.3s';
            } else {
                // Scroll Up
                navbar.style.transform = 'translateY(0)';
                navbar.style.transition = 'transform 0.3s';
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }
});
// GSAP Animation for Partners Section Icons
document.addEventListener('DOMContentLoaded', function() {
    if (window.gsap && window.ScrollTrigger) {
        // Partners section float-in
        const partnerCols = document.querySelectorAll('#partners-section .col-md-4');
        partnerCols.forEach((col, i) => {
            gsap.to(col.querySelector('img'), {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.2,
                scrollTrigger: {
                    trigger: col,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
            col.classList.add('float-in');
        });
    }
});
// GSAP Timeline Animation for Our Journey Section
document.addEventListener('DOMContentLoaded', function() {
    if (window.gsap && window.ScrollTrigger) {
        const cards = document.querySelectorAll('#timeline-section .timeline-card-wrapper');
        gsap.set(cards, {opacity: 0, y: 60});
        cards.forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        });
        // Make right side scrollable if needed
        const timelineCol = document.getElementById('timeline-cards-col');
        if (timelineCol) {
            timelineCol.style.maxHeight = '80vh';
            timelineCol.style.overflowY = 'auto';
        }
    }
});
// Utility function to format large numbers
// function formatNumber(num) {
//     if (num >= 1000000) {
//         return (num / 1000000).toFixed(0) + 'M+';
//     } else if (num >= 1000) {
//         return (num / 1000).toFixed(0) + 'K+';
//     } else {
//         return num.toFixed(1) + '%';
//     }
// }

// Initialize GSAP Animation
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. Page Load Animation (Hero Section) ---
    gsap.from("#hero-text-content", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        delay: 0.2
    });

    gsap.from("#hero-graphic", {
        duration: 1.2,
        opacity: 0,
        scale: 0.95,
        ease: "power2.out",
        delay: 0.4
    });

    gsap.from(".card-custom-shadow", {
        duration: 0.8,
        opacity: 0,
        x: 20,
        ease: "power1.out",
        delay: 0.8,
        stagger: 0.2
    });

    // --- 2. Stats Counter Animation (Scroll Triggered) ---
    // Animate number counting effect
    gsap.from(".counter-value", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: "textContent",
        stagger: 0.2,
        modifiers: {
            textContent: (value, target) => {
                const targetValue = parseFloat(target.getAttribute("data-target"));
                // Special handling for the 99.9% value (keep one decimal place)
                if (targetValue < 100) {
                    return (value * targetValue / 10).toFixed(1) + '%';
                }
                // Format large numbers with M+ or K+
                return formatNumber(value * targetValue / 10);
            }
        },
        scrollTrigger: {
            trigger: ".row.text-center",
            start: "top 85%", 
            toggleActions: "play none none none",
        }
    });

    // Animate stats cards
    gsap.from(["#stat1", "#stat2", "#stat3", "#stat4"], {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".row.text-center",
            start: "top 85%", 
            toggleActions: "play none none none",
        }
    });


    // --- 3. Section Fade-In Animation (Re-usable for two-column layouts) ---
    const sectionAnimation = (triggerId, imageId, textId) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerId,
                start: "top 75%", 
                toggleActions: "play none none none",
            }
        });

        tl.from(imageId, {
            x: (imageId.includes('order-lg-1') ? -50 : 50), 
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, 0); 

        tl.from(textId, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power1.out"
        }, 0.2); 
    };

    sectionAnimation("#about-text", "#about-image", "#about-text");
    sectionAnimation("#mission-text", "#mission-image", "#mission-text");

    // --- 4. Timeline Animation ---
    gsap.from(".timeline-item", {
        y: 50,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: "#timeline-section",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none none",
        }
    });
    
    // --- 5. Partners and Press Animation (Generic Fade Up) ---
    gsap.from("#partners-section .partner-logo, #press-section .news-card", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#partners-section",
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });

});