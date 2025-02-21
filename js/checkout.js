// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Get product details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const productPrice = urlParams.get('price');

    // Update order summary if product details are present
    if (productName && productPrice) {
        const itemName = document.querySelector('.item-name');
        const itemPrice = document.querySelector('.item-price');
        const subtotalPrice = document.querySelector('.summary-row:first-child span:last-child');
        const totalPrice = document.querySelector('.summary-row.total span:last-child');
        
        if (itemName) itemName.textContent = productName;
        if (itemPrice) itemPrice.textContent = `$${productPrice}`;
        if (subtotalPrice) subtotalPrice.textContent = `$${productPrice}`;
        if (totalPrice) totalPrice.textContent = `$${productPrice}`;
    }

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

    // Email validation
    const emailInput = document.getElementById('email');
    const continueButton = document.querySelector('.continue-button');
    const errorMessage = document.querySelector('.error-message');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    emailInput?.addEventListener('input', (e) => {
        const email = e.target.value;
        const isValid = validateEmail(email);
        
        if (email && !isValid) {
            errorMessage.textContent = 'Please enter a valid email address';
            errorMessage.style.display = 'block';
            continueButton.disabled = true;
        } else {
            errorMessage.style.display = 'none';
            continueButton.disabled = !isValid;
        }
    });

    // Progress tracking
    let currentStep = 'email';
    
    function updateProgress(step) {
        const steps = document.querySelectorAll('.progress-step');
        const forms = document.querySelectorAll('.checkout-form');
        
        steps.forEach((s, index) => {
            if (index < getStepIndex(step)) {
                s.classList.add('completed');
                s.classList.remove('active');
            } else if (index === getStepIndex(step)) {
                s.classList.add('active');
                s.classList.remove('completed');
            } else {
                s.classList.remove('completed', 'active');
            }
        });

        forms.forEach(f => f.classList.remove('active'));
        document.getElementById(`${step}-step`)?.classList.add('active');
        
        // Save progress
        sessionStorage.setItem('checkoutStep', step);
        sessionStorage.setItem('userEmail', emailInput?.value || '');
    }

    function getStepIndex(step) {
        const steps = ['email', 'payment', 'confirmation'];
        return steps.indexOf(step);
    }

    // Continue button handler
    continueButton?.addEventListener('click', () => {
        if (currentStep === 'email') {
            currentStep = 'payment';
            updateProgress(currentStep);
            initializePaymentOptions();
        }
    });

    // Order summary toggle
    const summaryToggle = document.querySelector('.summary-toggle');
    const summaryContent = document.querySelector('.summary-content');

    summaryToggle?.addEventListener('click', () => {
        summaryContent?.classList.toggle('active');
        const icon = summaryToggle.querySelector('i');
        icon.setAttribute('data-lucide', 
            summaryContent?.classList.contains('active') ? 'chevron-up' : 'chevron-down'
        );
        lucide.createIcons();
    });

    // Initialize payment options
    function initializePaymentOptions() {
        // Map of product names to their Stripe links
        const stripeLinks = {
            'Premium Tweaks Bundle': 'https://buy.stripe.com/aEUaHBcHYdbD8RW5kk',
            'Input Delay Tweaks': 'https://buy.stripe.com/7sI4jd7nEefH7NS5kn',
            'FPS Tweaks': 'https://buy.stripe.com/bIY9Dx4bs2wZ4BG5kl',
            'Ping Tweaks': 'https://buy.stripe.com/fZebLF5fw4F70lq5ko',
            // Add other products here
        };

        // Add pay button to card section
        const cardSection = document.querySelector('.payment-option.card');
        const payButton = document.createElement('button');
        payButton.className = 'continue-button';
        payButton.style.marginTop = '1rem';
        payButton.innerHTML = `
            <span>Pay with Card</span>
            <i data-lucide="credit-card"></i>
        `;
        cardSection.appendChild(payButton);
        lucide.createIcons();

        // Handle Stripe redirect
        payButton.addEventListener('click', () => {
            const stripeLink = stripeLinks[productName];
            if (stripeLink) {
                window.location.href = stripeLink;
            } else {
                const errorElement = document.getElementById('card-errors');
                errorElement.textContent = 'Product not found. Please try again.';
            }
        });
    }

    // PayPal integration
    const paypalButton = document.querySelector('.payment-option.paypal');
    paypalButton?.addEventListener('click', () => {
        const amount = getTotal();
        window.location.href = `https://paypal.me/AshirHassan629/${amount}?country.x=GB&locale.x=en_GB`;
    });

    function getTotal() {
        const totalElement = document.querySelector('.summary-row.total span:last-child');
        return totalElement?.textContent.replace(/[^0-9.]/g, '');
    }

    // Restore progress if available
    const savedStep = sessionStorage.getItem('checkoutStep');
    const savedEmail = sessionStorage.getItem('userEmail');
    if (savedStep && savedEmail) {
        currentStep = savedStep;
        if (emailInput) emailInput.value = savedEmail;
        updateProgress(currentStep);
        if (currentStep === 'payment') {
            initializePaymentOptions();
        }
    }
});