// For Email Subscription
const scriptURL = 'https://script.google.com/macros/s/AKfycbxxm26yq7CleP-Z7Bm5FG1Fm9qRPRw3dzsowRB9iicqM1IUk3OJMXxjAmEBdURkhYve/exec'
const form = document.forms['custom-form-submit']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});