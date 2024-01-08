const scriptURL = 'https://script.google.com/macros/s/AKfycbwzjU3MOMOgAv8p1Nd53j4RFtYHWwsGVG0kSVEr7eOj7Hv6EOf14sAa-RZZvTBz6pfyRQ/exec'
const form = document.forms['contact-form-submit']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

//
// const contact_button = document.getElementById("contact-submit");
// // Get the input field element
// const contact_fname = document.getElementById("contact-f-name"),
//     contact_lname = document.getElementById("contact-l-name"),
//     contact_email = document.getElementById("contact-email"),
//     contact_msg = document.getElementById("contact-msg");
