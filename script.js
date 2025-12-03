// =============================================
// PART 1: EVENT HANDLING
// =============================================

// Event Listeners for basic event handling demonstration
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 TechGadget Store loaded successfully!');
    
    // Click event demo
    const clickDemo = document.getElementById('clickDemo');
    const hoverDemo = document.getElementById('hoverDemo');
    const keyboardDemo = document.getElementById('keyboardDemo');
    const eventOutput = document.getElementById('eventOutput');
    
    // Click event
    clickDemo.addEventListener('click', function() {
        eventOutput.innerHTML = '🎉 Button was clicked!';
        eventOutput.style.backgroundColor = '#e8f5e8';
        eventOutput.style.borderLeftColor = '#51cf66';
    });
    
    // Mouseover and mouseout events
    hoverDemo.addEventListener('mouseover', function() {
        eventOutput.innerHTML = '🐭 Mouse is hovering over the button!';
        eventOutput.style.backgroundColor = '#e3f2fd';
        eventOutput.style.borderLeftColor = '#4a6fa5';
        this.style.transform = 'scale(1.1)';
    });
    
    hoverDemo.addEventListener('mouseout', function() {
        eventOutput.innerHTML = '👋 Mouse left the button!';
        eventOutput.style.backgroundColor = '#fff3e0';
        eventOutput.style.borderLeftColor = '#ffb142';
        this.style.transform = 'scale(1)';
    });
    
    // Keyboard events
    keyboardDemo.addEventListener('keydown', function(e) {
        eventOutput.innerHTML = `⌨️ Key pressed: ${e.key} (KeyCode: ${e.keyCode})`;
        eventOutput.style.backgroundColor = '#f3e5f5';
        eventOutput.style.borderLeftColor = '#9b59b6';
    });
    
    keyboardDemo.addEventListener('input', function(e) {
        const charCount = e.target.value.length;
        eventOutput.innerHTML += `<br>📝 Character count: ${charCount}`;
    });
});

// =============================================
// PART 2: INTERACTIVE ELEMENTS
// =============================================

// Feature 1: Theme Switcher
const themeSwitch = document.getElementById('themeSwitch');
const themeToggle = document.getElementById('themeToggle');

themeSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️ Light';
        this.textContent = 'Switch to Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark';
        this.textContent = 'Switch to Dark Mode';
    }
});

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = '☀️ Light';
    } else {
        this.textContent = '🌙 Dark';
    }
});

// Feature 2: Counter Game
let counterValue = 0;
const counterElement = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const resetCounter = document.getElementById('resetCounter');

incrementBtn.addEventListener('click', function() {
    counterValue++;
    counterElement.textContent = counterValue;
    
    // Visual feedback
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 200);
    
    // Change color based on count
    if (counterValue >= 10) {
        counterElement.style.color = '#ff6b6b';
    } else if (counterValue >= 5) {
        counterElement.style.color = '#ffb142';
    }
});

resetCounter.addEventListener('click', function() {
    counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = '#ff6b6b';
    counterElement.style.transform = 'scale(1.5)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 300);
});

// Feature 3: FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Update all arrows
        document.querySelectorAll('.faq-question').forEach(q => {
            q.textContent = q.textContent.replace('▼', '▶');
        });
        
        // Toggle current answer
        if (!isActive) {
            answer.classList.add('active');
            this.textContent = this.textContent.replace('▶', '▼');
        } else {
            this.textContent = this.textContent.replace('▼', '▶');
        }
    });
});

// Feature 4: Tab System
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to current button and corresponding pane
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Additional Interactive Feature: Cart Counter
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const shopNowBtn = document.getElementById('shopNow');

let cartItems = 0;

cartBtn.addEventListener('click', function() {
    alert(`🛒 You have ${cartItems} items in your cart!`);
});

shopNowBtn.addEventListener('click', function() {
    cartItems++;
    cartCount.textContent = cartItems;
    
    // Visual feedback
    cartBtn.style.backgroundColor = '#ff6b6b';
    setTimeout(() => {
        cartBtn.style.backgroundColor = '';
    }, 300);
    
    alert('✅ Product added to cart!');
});

// =============================================
// PART 3: FORM VALIDATION
// =============================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Real-time validation functions
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name.trim());
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validatePhone(phone) {
    if (phone === '') return true; // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateMessage(message) {
    return message.length <= 500; // Optional but has max length
}

// Display error function
function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = message;
    document.getElementById(inputId).style.borderColor = '#ff6b6b';
}

function clearError(inputId) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = '';
    document.getElementById(inputId).style.borderColor = '';
}

// Real-time validation
document.getElementById('name').addEventListener('input', function(e) {
    if (!validateName(e.target.value)) {
        showError('name', 'Name must be 2-50 characters and contain only letters');
    } else {
        clearError('name');
    }
});

document.getElementById('email').addEventListener('input', function(e) {
    if (!validateEmail(e.target.value)) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearError('email');
    }
});

document.getElementById('phone').addEventListener('input', function(e) {
    if (!validatePhone(e.target.value)) {
        showError('phone', 'Please enter a valid phone number');
    } else {
        clearError('phone');
    }
});

document.getElementById('password').addEventListener('input', function(e) {
    if (!validatePassword(e.target.value)) {
        showError('password', 'Password must be at least 6 characters long');
    } else {
        clearError('password');
    }
});

document.getElementById('message').addEventListener('input', function(e) {
    if (!validateMessage(e.target.value)) {
        showError('message', 'Message must be less than 500 characters');
    } else {
        clearError('message');
    }
});

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    
    // Validate all fields
    let isValid = true;
    
    if (!validateName(name)) {
        showError('name', 'Name is required (2-50 characters)');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'Valid email is required');
        isValid = false;
    }
    
    if (!validatePhone(phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    if (!validatePassword(password)) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (!validateMessage(message)) {
        showError('message', 'Message must be less than 500 characters');
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        formSuccess.textContent = '✅ Thank you! Your message has been sent successfully.';
        formSuccess.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Clear all errors
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
        
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
            input.style.borderColor = '';
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }
});

// Additional form enhancement: Character counter for message
const messageInput = document.getElementById('message');
const messageError = document.getElementById('messageError');

messageInput.addEventListener('input', function() {
    const length = this.value.length;
    const maxLength = 500;
    
    if (length > maxLength) {
        messageError.textContent = `Message too long (${length}/${maxLength} characters)`;
        messageError.style.color = '#ff6b6b';
    } else {
        messageError.textContent = `${length}/${maxLength} characters`;
        messageError.style.color = '#6c757d';
    }
});

console.log('🎯 All JavaScript features loaded:');
console.log('✅ Event Handling: Click, hover, keyboard events');
console.log('✅ Interactive Elements: Theme switcher, counter game, FAQ, tabs');
console.log('✅ Form Validation: Real-time validation with regex patterns');
