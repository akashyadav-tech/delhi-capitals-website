// Delhi Capitals Website - Common JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    
    // Set active navigation link based on current page
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveNavLink();
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header && window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else if (header) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Initialize tooltips for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const platform = this.querySelector('i').className.split(' ')[1].replace('fa-', '');
            this.setAttribute('title', `Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`);
        });
    });
    
    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address!');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been submitted. We'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Current year in footer copyright
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2025', currentYear);
    }
});