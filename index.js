function generatePassword() {
    const lengthInput = document.getElementById('length');
    const lengthDisplay = document.getElementById('length-display');
    lengthDisplay.textContent = lengthInput.value;

    const length = lengthInput.value;
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const special = document.getElementById('special').checked;

    const password = generateRandomPassword(length, lowercase, uppercase, numbers, special);
    const passwordElement = document.getElementById('password');
    passwordElement.value = password;

    const strengthElement = document.getElementById('strength');
    const strength = checkPasswordStrength(password);
    strengthElement.textContent = `Password Strength: ${strength}`;
    strengthElement.className = strength.toLowerCase();
}

function generateRandomPassword(length, lowercase, uppercase, numbers, special) {
    const charset = [];
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    if (lowercase) {
        charset.push(...lowercaseChars);
    }

    if (uppercase) {
        charset.push(...uppercaseChars);
    }

    if (numbers) {
        charset.push(...numberChars);
    }

    if (special) {
        charset.push(...specialChars);
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

function checkPasswordStrength(password) {
    if (password.length < 6) {
        return 'Weak';
    } else if (password.length < 10) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}