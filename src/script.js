
// Fungsi rotasi img
let rotationDegree = 0;

function rotateImage() {
// Tambahkan 360 derajat setiap kali fungsi dipanggil
    rotationDegree += 360;

// Dapatkan elemen gambar
    const rotatingImage = document.getElementById("rotating-image");

// Terapkan transformasi rotasi menggunakan CSS
    rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
}


// Fungsi melihat possword
function togglePassword() {
    var passwordInput = document.getElementById('password');
    var showPasswordCheckbox = document.getElementById('showPassword');

    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// Fungsi capslock
document.addEventListener("DOMContentLoaded", function() {
    const capsLockInfo = document.getElementById("capsLockInfo");
  
    // Fungsi untuk memeriksa status Caps Lock
    function checkCapsLock(event) {
      capsLockInfo.style.display = event.getModifierState("CapsLock") ? "block" : "none";
    }
  
    // Event listener untuk memeriksa status Caps Lock saat tombol keyboard ditekan
    document.addEventListener("keydown", checkCapsLock);
  
    // Event listener untuk memeriksa status Caps Lock saat tombol keyboard dilepas
    document.addEventListener("keyup", checkCapsLock);
});


// function cekRegex() {
//     // Dapatkan nilai password dari input
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
  
//     // Definisikan ekspresi reguler untuk masing-masing kasus
//     // const uppercaseRegex = /[A-Z]/;
//     // const lowercaseRegex = /[a-z]/;
//     // const digitRegex = /\d/;
//     // const symbolRegex = /[@$!%*?&]/;
//     // const minLength = 4;

//     regexList = {
//         lowerCase: /[a-z]/,
//         upperCase: /[A-Z]/,
//         symbol: /[@#$%^!&*+=]/,
//         number: /[\d]/
//       }
  
    // Lakukan pemeriksaan untuk masing-masing kasus
    // const isUppercaseValid = uppercaseRegex.test(password);
    // const isLowercaseValid = lowercaseRegex.test(password);
    // const isDigitValid = digitRegex.test(password);
    // const isSymbolValid = symbolRegex.test(password);
    // const isLengthValid = password.length >= minLength;
    
    
// }
  
// function cekRegex() {
//     // Dapatkan nilai password dari input
//     const password = document.getElementById("password").value;
  
//     // Definisikan ekspresi reguler untuk masing-masing kasus
//     const uppercaseRegex = /[A-Z]/;
//     const lowercaseRegex = /[a-z]/;
//     const digitRegex = /\d/;
//     const symbolRegex = /[@$!%*?&]/;
  
//     // Lakukan pemeriksaan untuk masing-masing kasus
//     const isUppercaseValid = uppercaseRegex.test(password);
//     const isLowercaseValid = lowercaseRegex.test(password);
//     const isDigitValid = digitRegex.test(password);
//     const isSymbolValid = symbolRegex.test(password);
  
//     // Tampilkan hasil validasi
//     // if (isUppercaseValid && isLowercaseValid && isDigitValid && isSymbolValid) {
//     //   document.getElementById("validationResult").textContent = "Password valid.";
//     // } else {
//     //   document.getElementById("validationResult").textContent = "Password harus memenuhi persyaratan: minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 simbol.";
//     // }
//     if (isUppercaseValid){
//         document.getElementById("validationResult").textContent = "Password valid.";
//     }
// }

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
  
  function validateLogin() {
    validateUsername();
    validatePassword();
    validatePasswordRegex();
  
  }
  

//   const handleFormSubmission = (event) => {
//     event.preventDefault();
//     let enteredUsername = usernameInput.value;
//     let enteredPassword = passwordInput.value;
  
//     if (enteredUsername.length === 0) {
//       usernameError.innerText = "Kindly provide a valid username.";
//     } else {
//       usernameError.innerText = null;
//     }
  
//     if (enteredPassword.length === 0) {
//       passwordError.innerText = "Kindly enter a valid password.";
//     }
  
//     if (usernameError.innerText === "" && passwordError.innerText === "") {
//       location.replace("about.html");
//     }
//   };
  
function validatePasswordRegex() {
    const password = document.getElementById("password").value;
    let validationResult = '';
  
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase && password.length >= 4) {
      validationResult += 'one uppercase<br>';
    }
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase && password.length >= 4) {
      validationResult += 'one lowercase.<br>';
    }
    if (password.length >=4 && validationResult === '') {
      location.replace("about.html")
    }
  
    document.getElementById("validationResult").innerHTML = validationResult;
  }
  