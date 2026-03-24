/**
 * Esercizio05 - Modern Website JavaScript
 * Complete functionality with smooth animations and interactions
 */

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

// Error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

/**
 * Initialize application
 */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initFormValidation();
    initSmoothScroll();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Scroll effects
 */
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.feature-card, .about-content, .contact-info').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form validation and submission
 */
function initFormValidation() {
    if (!contactForm) return;
    
    // Real-time validation
    nameInput?.addEventListener('input', () => validateField(nameInput, nameError, validateName));
    nameInput?.addEventListener('blur', () => validateField(nameInput, nameError, validateName));
    
    emailInput?.addEventListener('input', () => validateField(emailInput, emailError, validateEmail));
    emailInput?.addEventListener('blur', () => validateField(emailInput, emailError, validateEmail));
    
    messageInput?.addEventListener('input', () => validateField(messageInput, messageError, validateMessage));
    messageInput?.addEventListener('blur', () => validateField(messageInput, messageError, validateMessage));
    
    // Form submission
    contactForm.addEventListener('submit', handleSubmit);
}

/**
 * Validate individual field
 */
function validateField(input, errorElement, validator) {
    const result = validator(input.value.trim());
    
    if (result.isValid) {
        input.classList.remove('error');
        errorElement.textContent = '';
        return true;
    } else {
        input.classList.add('error');
        errorElement.textContent = result.message;
        return false;
    }
}

/**
 * Validation functions
 */
function validateName(name) {
    if (!name) {
        return { isValid: false, message: 'Il nome è obbligatorio' };
    }
    if (name.length < 2) {
        return { isValid: false, message: 'Il nome deve essere di almeno 2 caratteri' };
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
        return { isValid: false, message: 'Il nome contiene caratteri non validi' };
    }
    return { isValid: true, message: '' };
}

function validateEmail(email) {
    if (!email) {
        return { isValid: false, message: 'L\'email è obbligatoria' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Inserisci un indirizzo email valido' };
    }
    return { isValid: true, message: '' };
}

function validateMessage(message) {
    if (!message) {
        return { isValid: false, message: 'Il messaggio è obbligatorio' };
    }
    if (message.length < 10) {
        return { isValid: false, message: 'Il messaggio deve essere di almeno 10 caratteri' };
    }
    return { isValid: true, message: '' };
}

/**
 * Handle form submission
 */
async function handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField(nameInput, nameError, validateName);
    const isEmailValid = validateField(emailInput, emailError, validateEmail);
    const isMessageValid = validateField(messageInput, messageError, validateMessage);
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        // Focus first invalid field
        const firstInvalid = document.querySelector('.error');
        firstInvalid?.focus();
        return;
    }
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate API call
    try {
        await simulateSubmit({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        });
        
        // Show success
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        
        showToast('Messaggio inviato con successo! Ti risponderemo presto.');
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitBtn.classList.remove('success');
            submitBtn.disabled = false;
            
            // Clear error states
            [nameInput, emailInput, messageInput].forEach(input => {
                input.classList.remove('error');
            });
            [nameError, emailError, messageError].forEach(error => {
                error.textContent = '';
            });
        }, 2000);
        
    } catch (error) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        showToast('Si è verificato un errore. Riprova più tardi.', 'error');
    }
}

/**
 * Simulate API submission
 */
function simulateSubmit(data) {
    return new Promise((resolve) => {
        console.log('Form data submitted:', data);
        setTimeout(resolve, 1500);
    });
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toast.style.background = '#ef4444';
    } else {
        toast.style.background = '#10b981';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Expose functions globally for debugging
window.Esercizio05 = {
    validateForm: () => {
        const results = {
            name: validateName(nameInput?.value || ''),
            email: validateEmail(emailInput?.value || ''),
            message: validateMessage(messageInput?.value || '')
        };
        console.log('Validation results:', results);
        return results;
    },
    showToast,
    resetForm: () => contactForm?.reset()
};
