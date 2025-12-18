// Delhi Capitals Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const newsletter = document.getElementById('newsletter').checked;
            
            // Validation
            if (!name || !email || !subject || !message) {
                showAlert('Please fill in all required fields!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Please enter a valid email address!', 'error');
                return;
            }
            
            // Phone validation (if provided)
            if (phone && !/^[\d\s\-\+\(\)]{10,15}$/.test(phone)) {
                showAlert('Please enter a valid phone number!', 'error');
                return;
            }
            
            // Simulate form submission
            showAlert('Sending your message...', 'info');
            
            // Simulate API call delay
            setTimeout(() => {
                // Save form data (in a real app, this would be sent to a server)
                const formData = {
                    name,
                    email,
                    phone: phone || 'Not provided',
                    subject,
                    message,
                    newsletter,
                    timestamp: new Date().toISOString()
                };
                
                // Save to localStorage for demonstration
                const submissions = JSON.parse(localStorage.getItem('dcContactSubmissions') || '[]');
                submissions.push(formData);
                localStorage.setItem('dcContactSubmissions', JSON.stringify(submissions));
                
                // Show success message
                showAlert(`Thank you, ${name}! Your message has been submitted successfully. We'll get back to you at ${email} within 48 hours.`, 'success');
                
                // Reset form
                contactForm.reset();
                document.getElementById('newsletter').checked = true;
                
                // Log to console (for demonstration)
                console.log('Form submitted:', formData);
                
            }, 1500);
        });
    }
    
    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle active class on question
            question.parentElement.classList.toggle('active');
            
            // Toggle answer visibility
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.className = 'fas fa-chevron-down';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.className = 'fas fa-chevron-up';
            }
            
            // Close other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('i');
                    otherQuestion.parentElement.classList.remove('active');
                    otherAnswer.style.maxHeight = null;
                    otherIcon.className = 'fas fa-chevron-down';
                }
            });
        });
    });
    
    // Open first FAQ by default
    if (faqQuestions.length > 0) {
        faqQuestions[0].click();
    }
    
    // Show alert function
    function showAlert(message, type) {
        // Remove any existing alert
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `form-alert form-alert-${type}`;
        alert.textContent = message;
        
        // Style the alert
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        // Set background color based on type
        if (type === 'success') {
            alert.style.backgroundColor = '#2E7D32'; // Green
        } else if (type === 'error') {
            alert.style.backgroundColor = '#D32F2F'; // Red
        } else if (type === 'info') {
            alert.style.backgroundColor = var(--dc-blue); // Blue
        }
        
        // Add to page
        document.body.appendChild(alert);
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.parentNode.removeChild(alert);
                    }
                }, 300);
            }
        }, 5000);
        
        // Add animation styles if not already present
        if (!document.querySelector('#alert-animations')) {
            const style = document.createElement('style');
            style.id = 'alert-animations';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Add CSS for FAQ and office grid
    const contactStyles = document.createElement('style');
    contactStyles.textContent = `
        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .faq-item {
            background-color: white;
            border-radius: 8px;
            margin-bottom: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }
        
        .faq-question {
            padding: 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            transition: background-color 0.3s;
        }
        
        .faq-question:hover {
            background-color: var(--dc-light-gray);
        }
        
        .faq-question h4 {
            margin: 0;
            flex: 1;
        }
        
        .faq-answer {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background-color: white;
        }
        
        .faq-item.active .faq-answer {
            padding: 0 20px 20px;
        }
        
        .office-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .office-card {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            box-shadow: var(--shadow);
        }
        
        .office-icon {
            font-size: 2.5rem;
            color: var(--dc-red);
            margin-bottom: 15px;
        }
        
        .office-card h3 {
            margin-bottom: 15px;
            color: var(--dc-dark-blue);
        }
        
        .office-card p {
            margin-bottom: 8px;
            color: var(--dc-dark-gray);
        }
        
        .map-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }
        
        .map-instructions {
            background-color: white;
            padding: 25px;
            border-radius: 10px;
        }
        
        .map-instructions h3 {
            margin-bottom: 20px;
            color: var(--dc-dark-blue);
        }
        
        .map-instructions p {
            margin-bottom: 15px;
        }
        
        @media (max-width: 768px) {
            .map-container {
                grid-template-columns: 1fr;
            }
            
            .office-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dc-dark-blue);
        }
        
        .form-group input[type="checkbox"] {
            margin-right: 8px;
        }
    `;
    document.head.appendChild(contactStyles);
    
    // Initialize phone input formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            
            if (value.length > 6) {
                value = value.substring(0, 6) + '-' + value.substring(6);
            }
            if (value.length > 3) {
                value = value.substring(0, 3) + '-' + value.substring(3);
            }
            
            this.value = value;
        });
    }
    
    // Form field validation styling
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    
    formInputs.forEach(input => {
        // Add validation styling on blur
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#D32F2F';
                this.style.boxShadow = '0 0 0 2px rgba(211, 47, 47, 0.1)';
            } else {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            }
        });
        
        // Remove validation styling on input
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
});