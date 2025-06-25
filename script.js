document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLL-IN ANIMATION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // --- 1. FALLING PETALS ---
    const petalsContainer = document.querySelector('.petals-container');
    if (petalsContainer) {
        for (let i = 0; i < 20; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.width = `${Math.random() * 8 + 7}px`;
            petal.style.height = `${Math.random() * 8 + 7}px`;
            petal.style.animationDelay = `${Math.random() * 10}s`;
            petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
            petalsContainer.appendChild(petal);
        }
    }

    // --- 2. "WHY YOU'RE SPECIAL" CARD FLIP ---
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // --- 5. TYPEWRITER FOR THE LETTER ---
    const letterElement = document.getElementById('typed-letter');
    if (letterElement) {
        const text = letterElement.getAttribute('data-text');
        letterElement.innerHTML = ""; // Clear existing text
        let i = 0;

        const typeWriter = () => {
            if (i < text.length) {
                letterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Adjust typing speed here
            }
        };

        const letterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target); // Stop observing once started
                }
            });
        }, { threshold: 0.6 });

        letterObserver.observe(document.getElementById('letter'));
    }

    // --- 8. FUTURE MESSAGES CALENDAR ---
    document.querySelectorAll('.calendar-day').forEach(day => {
        day.addEventListener('click', () => {
            day.classList.toggle('opened');
        });
    });

    // --- ✨ NEW: MAGICAL CURSOR TRAIL ✨ ---
    document.addEventListener('mousemove', (e) => {
        // We only want to run this on devices with a mouse, not on touch screens
        if (window.matchMedia("(pointer: fine)").matches) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
    
            // Position the sparkle at the cursor's coordinates
            sparkle.style.left = `${e.clientX}px`;
            sparkle.style.top = `${e.clientY}px`;
    
            document.body.appendChild(sparkle);
    
            // Remove the sparkle after its animation is done (1000ms = 1s)
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });

});