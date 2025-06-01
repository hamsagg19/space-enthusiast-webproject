const signupForm = document.getElementById('signupForm');
const warning = document.getElementById('warning');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username.length < 5) {
        warning.textContent = 'Username must be at least 5 characters long.';
    } else if (email.indexOf('@') === -1) {
        warning.textContent = 'Please enter a valid email address.';
    } else if (password.length < 8) {
        warning.textContent = 'Password must be at least 8 characters long.';
    } else {
        warning.textContent = '';
        alert('User has been signed up successfully!');
    }
});