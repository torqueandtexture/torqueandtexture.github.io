// For Email Subscription
const scriptURL = 'https://script.google.com/macros/s/AKfycbyIg6Fq-GRfkpNYas0qVPeQvcAAfI2RkR8wErhmIOk7u78IEvUjTRNo2UwYdE-S0lplDg/exec'
const form = document.forms['submit-email-subscription']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});

// Get the button element
const subscribe_button = document.getElementById("email-sub-btn");
// Get the input field element
const email_inputfield = document.getElementById("email-input");

// Add an event listener to the button
subscribe_button.addEventListener("click", () => {
  // Empty the input field
  if (email_inputfield.value === "") {
    alert("Please type in your email");
  } else {
    setTimeout(() => {
      email_inputfield.value = "";
    }, 1000); // Delay in milliseconds
    alert("You've been added to the email list");
  }
});
