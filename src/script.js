
// Fungsi rotasi img
let rotationDegree = 0;

function rotateImage() {
    rotationDegree += 360;
    const rotatingImage = document.getElementById("rotating-image");
    rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
}

function togglePassword() {
    var passwordInput = document.getElementById('password');
    var showPasswordCheckbox = document.getElementById('showPassword');

    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const capsLockInfo = document.getElementById("capsLockInfo");

    function checkCapsLock(event) {
      capsLockInfo.style.display = event.getModifierState("CapsLock") ? "block" : "none";
    }
    document.addEventListener("keydown", checkCapsLock);
    document.addEventListener("keyup", checkCapsLock);
});

function validateUsername() {
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("errorMessage");
  
    if (username.trim() === '') {
      usernameError.innerHTML = 'Please fill username correctly.<br>';
    } else {
      usernameError.innerHTML = '';
    }
}
  
function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("errorMessage2");
  
    if (password.trim() === '') {
      passwordError.innerHTML = 'Please fill password correctly.<br>';
    } else {
      passwordError.innerHTML = '';
    }

    if (password.length > 1 && password.length < 4){
        passwordError.innerHTML = 'Max 4 character';
    }
}
  
function validatePasswordRegex() {
    const password = document.getElementById("password").value;
    let validationResult = '';

    validationResult += 'Password need to have at least ';
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase && password.length >= 4) {
      validationResult += 'one uppercase, ';
    }
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase && password.length >= 4) {
      validationResult += 'one lowercase, ';
    }
    const hasDigit = /\d/.test(password);
    if (!hasDigit && password.length >= 4) {
      validationResult += 'one digit, ';
    }
    const hasSymbol = /[@$!%*?&]/.test(password);
    if (!hasSymbol && password.length >= 4) {
      validationResult += 'one symbol.';
    }
    if (password.length >=4 && validationResult === '') {
      location.replace("about.html")
    }
    document.getElementById("validationResult").innerHTML = validationResult;
}

function validateLogin() {
    validateUsername();
    validatePassword();
    validatePasswordRegex();
}
  