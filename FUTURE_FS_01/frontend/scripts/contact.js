// Client-side JS to POST form data to backend API
(function(){
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Sending...';
        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            message: form.message.value.trim()
        };

        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error('Server error ' + res.status);
            const result = await res.json();
            feedback.style.color = 'green';
            feedback.textContent = result.message || 'Message sent successfully.';
            form.reset();
        } catch (err) {
            feedback.style.color = 'crimson';
            feedback.textContent = 'Failed to send message. ' + (err.message || '');
        }
    });
})();