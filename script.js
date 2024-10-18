function validateForm() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    let isValid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        isValid = false;
    }

    if (!dob) {
        document.getElementById('dobError').textContent = 'Date of birth is required.';
        isValid = false;
    }

    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        isValid = false;
    }

    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('ageError').textContent = 'Age must be a number between 1 and 120.';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (!address) {
        document.getElementById('addressError').textContent = 'Address is required.';
        isValid = false;
    }

    if (!city) {
        document.getElementById('cityError').textContent = 'City is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        return true; 
    } else {
        return false; 
    }
}


