const scriptURL = 'https://script.google.com/macros/s/AKfycbxxm26yq7CleP-Z7Bm5FG1Fm9qRPRw3dzsowRB9iicqM1IUk3OJMXxjAmEBdURkhYve/exec';
const form = document.forms['custom-form-submit'];
const submitButton = form.querySelector('button[type="submit"]'); // Assuming the submit button has type="submit"

let allFieldsFilled = false; // Flag to track if all fields are filled

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate fields (includes email check)
  if (!validateFields(form)) {
    alert('Please fill in all required fields and ensure a valid email address.');
    return;
  }

  allFieldsFilled = true; // Set flag if validation passes

  // Disable submit button for 5 seconds and hover effect
  submitButton.disabled = true;
  submitButton.style.pointerEvents = 'none';

  // Build form data (avoids unnecessary object creation)
  const formData = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      if (response.ok) {
        console.log('Success!', response);

        // Clear fields, enable submit button, and show success message
        form.reset();
        submitButton.disabled = false;
        submitButton.style.pointerEvents = 'auto'; // Re-enable hover effect
        allFieldsFilled = false; // Reset flag after successful submission
        alert('Custom order submitted successfully!');
      } else {
        console.error('Server error:', response);
        alert('There was a problem submitting your order. Please try again later.');
        submitButton.disabled = false; // Re-enable submit button
        submitButton.style.pointerEvents = 'auto'; // Re-enable hover effect on error
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('An error occurred. Please try again later.');
      submitButton.disabled = false; // Re-enable submit button
      submitButton.style.pointerEvents = 'auto'; // Re-enable hover effect on error
    });
});

// Validate fields (includes email check)
function validateFields(form) {
  const inputs = form.querySelectorAll('input, textarea');

  for (const input of inputs) {
    if (input.required && (input.value === '' || (input.type === 'email' && !isValidEmail(input.value)))) {
      input.focus();
      return false; // Early return if a required field is empty or email is invalid
    }
  }

  return true; // All required fields are filled and email is valid
}

// Regular expression for basic email validation (can be enhanced)
function isValidEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}
