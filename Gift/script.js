
       

        // FAQ Toggle Function
        function toggleFAQ(questionElement) {
            const faqItem = questionElement.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = questionElement.querySelector('.faq-toggle');
            
            // Close other open FAQs
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').classList.remove('active');
                    item.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle current FAQ
            if (faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
                answer.classList.remove('active');
                toggle.textContent = '+';
            } else {
                faqItem.classList.add('active');
                answer.classList.add('active');
                toggle.textContent = '−';
            }
        }

        ///Cart Container Add
        function updateTotals() {
  let grandTotal = 0;
  const items = document.querySelectorAll('.cart-item');

  items.forEach(item => {
    const price = parseFloat(item.dataset.price);
    const qtyInput = item.querySelector('input');
    const qty = parseInt(qtyInput.value);
    const subtotal = price * qty;
    item.querySelector('.subtotal').textContent = `Rs.${subtotal}`;
    grandTotal += subtotal;
  });

  document.getElementById('grand').textContent = `Rs. ${grandTotal.toFixed(2)}`;
}

document.querySelectorAll('.plus').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentElement.querySelector('input');
    input.value = parseInt(input.value) + 1;
    updateTotals();
  });
});

document.querySelectorAll('.minus').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentElement.querySelector('input');
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
      updateTotals();
    }
  });
});

document.querySelectorAll('.remove').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.closest('.cart-item').remove();
    updateTotals();
  });
});

//Login Form
 // Update clock
        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}`;
        }
        
        updateClock();
        setInterval(updateClock, 1000);

        // Handle email input suggestions
        const emailInput = document.getElementById('emailInput');
        const emailSuggestions = document.getElementById('emailSuggestions');
        
        emailInput.addEventListener('focus', function() {
            emailSuggestions.classList.add('show');
        });
        
        emailInput.addEventListener('blur', function() {
            setTimeout(() => {
                emailSuggestions.classList.remove('show');
            }, 200);
        });
        
        // Handle password input suggestions
        const passwordInput = document.getElementById('passwordInput');
        const passwordSuggestions = document.getElementById('passwordSuggestions');
        
        passwordInput.addEventListener('focus', function() {
            passwordSuggestions.classList.add('show');
        });
        
        passwordInput.addEventListener('blur', function() {
            setTimeout(() => {
                passwordSuggestions.classList.remove('show');
            }, 200);
        });
        
        // Handle suggestion clicks
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('suggestion-item')) {
                const value = e.target.getAttribute('data-value');
                const parentContainer = e.target.closest('.input-container');
                const input = parentContainer.querySelector('.form-input');
                
                if (input.type === 'password' && value === '**********') {
                    input.value = 'anu45password';
                } else {
                    input.value = value;
                }
                
                // Hide suggestions
                parentContainer.querySelector('.suggestion-list').classList.remove('show');
                input.focus();
            }
        });
        
        // Close suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.input-container')) {
                document.querySelectorAll('.suggestion-list').forEach(list => {
                    list.classList.remove('show');
                });
            }
        });
        
        // Filter suggestions based on input
        emailInput.addEventListener('input', function() {
            const value = this.value.toLowerCase();
            const suggestions = emailSuggestions.querySelectorAll('.suggestion-item');
            
            suggestions.forEach(item => {
                const itemValue = item.getAttribute('data-value').toLowerCase();
                if (itemValue.includes(value)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });