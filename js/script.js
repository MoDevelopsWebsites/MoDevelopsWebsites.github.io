// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = menuBtn?.querySelector('i');

    menuBtn?.addEventListener('click', () => {
        mobileNav?.classList.toggle('active');
        const isOpen = mobileNav?.classList.contains('active');
        menuIcon?.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
    });

    // Add checkout redirect to all purchase buttons
    document.querySelectorAll('.purchase-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('h2')?.textContent || '';
                const price = productCard.querySelector('.price')?.textContent.replace(/[^0-9.]/g, '') || '';
                
                // Clear any existing checkout data
                sessionStorage.removeItem('checkoutStep');
                sessionStorage.removeItem('userEmail');
                
                // Redirect to checkout with product details
                window.location.href = `/checkout.html?product=${encodeURIComponent(productName)}&price=${encodeURIComponent(price)}`;
            }
        });
    });

    // Boost duration tabs functionality
    const boostTabs = document.querySelectorAll('.boost-tab');
    const boostPackages = document.querySelectorAll('.boost-packages');

    boostTabs?.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            boostTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all packages
            boostPackages.forEach(pkg => pkg.classList.add('hidden'));
            // Show selected package
            const duration = tab.getAttribute('data-duration');
            const selectedPackage = document.getElementById(duration);
            selectedPackage?.classList.remove('hidden');
        });
    });

    // Testimonials slider functionality
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (track && cards.length > 0) {
        let currentIndex = 0;
        
        // Create dots
        cards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dotsContainer?.appendChild(dot);
            
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });
        
        const dots = document.querySelectorAll('.slider-dot');
        
        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % cards.length;
            goToSlide(currentIndex);
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            goToSlide(currentIndex);
        }
        
        nextBtn?.addEventListener('click', nextSlide);
        prevBtn?.addEventListener('click', prevSlide);
        
        // Auto-advance slides
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-advance on hover
        track?.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        track?.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Form submission (for contact page)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in classes
    document.querySelectorAll('.feature-card, .product-card, .contact-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});