// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = menuBtn?.querySelector('i');

    menuBtn?.addEventListener('click', () => {
        mobileNav?.classList.toggle('active');
        const isOpen = mobileNav?.classList.contains('active');
        menuIcon?.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
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

    // Form submission functionality
    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
    });
});