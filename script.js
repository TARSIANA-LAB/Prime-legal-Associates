/* ========================================
   PRIME LEGAL ASSOCIATES - MAIN JAVASCRIPT
   Complete script for all pages
   ======================================== */

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.right = '20px';
        nav.style.background = '#0f172a';
        nav.style.padding = '1rem';
        nav.style.borderRadius = '8px';
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
}

// ========================================
// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// ========================================
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const menuButton = document.querySelector('.mobile-menu');
    
    if (nav && menuButton) {
        if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        }
    }
});

// ========================================
// HANDLE WINDOW RESIZE
// ========================================
window.addEventListener('resize', function() {
    const nav = document.getElementById('mainNav');
    
    if (window.innerWidth > 768 && nav) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.position = 'static';
        nav.style.background = 'none';
        nav.style.padding = '0';
        nav.style.boxShadow = 'none';
    } else if (nav) {
        nav.style.display = 'none';
    }
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// ADD ACTIVE CLASS TO CURRENT PAGE LINK
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
function handleFormSubmit() {
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    if (!fullName || !email || !message) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactFormContainer').style.display = 'none';

    // Optional: Send form data via WhatsApp
    // This will open WhatsApp with pre-filled message
    const whatsappMessage = encodeURIComponent(
        `Hello Prime Legal Associates,\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n\n` +
        `Message:\n${message}`
    );
    
    // Uncomment the line below to automatically open WhatsApp after form submission
    // window.open(`https://wa.me/254742643710?text=${whatsappMessage}`, '_blank');

    // Reset form after 5 seconds
    setTimeout(() => {
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('contactFormContainer').style.display = 'block';
    }, 5000);
}

// ========================================
// SEND MESSAGE DIRECTLY TO WHATSAPP
// Alternative function to send directly to WhatsApp
// ========================================
function sendWhatsAppMessage(name, message) {
    const whatsappNumber = '254742643710'; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(
        `Hello Prime Legal Associates,\n\nName: ${name}\n\n${message}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ========================================
// HANDLE ENTER KEY IN FORM FIELDS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && input.tagName !== 'TEXTAREA') {
                e.preventDefault();
                handleFormSubmit();
            }
        });
    });
});

// ========================================
// SCROLL TO TOP FUNCTION (Optional)
// ========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// ADD FADE-IN ANIMATION ON SCROLL (Optional)
// ========================================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .stat-card, .team-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof IntersectionObserver !== 'undefined') {
        handleScrollAnimations();
    }
});

// ========================================
// FORM VALIDATION HELPERS
// ========================================
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    // Kenyan phone number validation (basic)
    const regex = /^(\+254|254|0)[17]\d{8}$/;
    return regex.test(phone.replace(/\s/g, ''));
}

// ========================================
// CONSOLE MESSAGE (Optional - can remove)
// ========================================
console.log('%cPrime Legal Associates', 'color: #d97706; font-size: 20px; font-weight: bold;');
console.log('%cWebsite by Your Name', 'color: #64748b; font-size: 12px;');