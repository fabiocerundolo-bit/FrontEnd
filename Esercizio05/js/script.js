document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error styles
        nameInput.style.borderColor = '#ddd';
        emailInput.style.borderColor = '#ddd';
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        let hasError = false;
        
        // Validate name
        if (name === '') {
            nameInput.style.borderColor = '#e74c3c';
            showError('Inserisci il tuo nome');
            hasError = true;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            emailInput.style.borderColor = '#e74c3c';
            showError('Inserisci la tua email');
            hasError = true;
        } else if (!emailRegex.test(email)) {
            emailInput.style.borderColor = '#e74c3c';
            showError('Inserisci una email valida');
            hasError = true;
        }
        
        if (!hasError) {
            // Form is valid
            alert('Form inviato con successo!\nNome: ' + name + '\nEmail: ' + email);
            form.reset();
        }
    });
    
    function showError(message) {
        // Remove existing error messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #e74c3c;
            margin-bottom: 15px;
            padding: 10px;
            background: #fdeaea;
            border-radius: 5px;
            font-size: 0.9rem;
        `;
        
        // Insert before the submit button
        const submitBtn = document.querySelector('input[type="submit"]');
        form.insertBefore(errorDiv, submitBtn);
        
        // Remove error message after 3 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
    
    // Clear error styles on input
    nameInput.addEventListener('input', function() {
        this.style.borderColor = '#ddd';
    });
    
    emailInput.addEventListener('input', function() {
        this.style.borderColor = '#ddd';
    });
});