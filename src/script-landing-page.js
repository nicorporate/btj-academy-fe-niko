// $(document).on("DOMContentLoaded", function () {
//   const capsLockInfo = $("#capsLockInfo");

//   function checkCapsLock(event) {
//     capsLockInfo.css(
//       "display",
//       event.getModifierState("CapsLock") ? "block" : "none"
//     );
//   }

//   $(document).on("keydown keyup", checkCapsLock);
// });

$(document).ready(function () {
  let rotationDegree = 0;

  function rotateImage() {
    rotationDegree += 360;
    $("#rotating-image").css("transform", "rotate(" + rotationDegree + "deg)");
  }

  function togglePassword() {
    var passwordInput = $("#password");
    var showPasswordCheckbox = $("#showPassword");

    if (showPasswordCheckbox.prop("checked")) {
      passwordInput.attr("type", "text");
    } else {
      passwordInput.attr("type", "password");
    }
  }

  const capsLockInfo = $("#capsLockInfo");

  function checkCapsLock(event) {
    capsLockInfo.css(
      "display",
      event.originalEvent.getModifierState("CapsLock") ? "block" : "none"
    );
  }
  $(document).on("keydown keyup", checkCapsLock);

  function validateUsername() {
    const username = $("#username").val();
    const usernameError = $("#errorMessage");

    if ($.trim(username) === "") {
      usernameError.html("Please fill username correctly.<br>");
    } else {
      usernameError.html("");
    }
  }

  function validatePassword() {
    const password = $("#password").val();
    const passwordError = $("#errorMessage2");

    if ($.trim(password) === "") {
      passwordError.html("Please fill password correctly.<br>");
    } else {
      passwordError.html("");
    }

    if (password.length > 1 && password.length < 4) {
      passwordError.html("Max 4 characters");
    }
  }

  $("#rotating-image").click(rotateImage);
  $("#showPassword").change(togglePassword);
  $("#username").blur(validateUsername);
  $("#password").blur(validatePassword);
  //   $("#loginform").submit(validateLogin);
});

function validatePasswordRegex() {
  const password = document.getElementById("password").value;
  let validationResult = "";

  validationResult += "Password need to have at least ";

  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase && password.length >= 4) {
    validationResult += "one uppercase, ";
  }
  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase && password.length >= 4) {
    validationResult += "one lowercase, ";
  }
  const hasDigit = /\d/.test(password);
  if (!hasDigit && password.length >= 4) {
    validationResult += "one digit, ";
  }
  //   const hasSymbol = /[@$!%*?&]/.test(password);
  //   if (!hasSymbol && password.length >= 4) {
  //     validationResult += "one symbol.";
  //   }
  if (
    password.length >= 4 &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSymbol
  ) {
    location.replace("about.html");
  }
  document.getElementById("validationResult").innerHTML = validationResult;
}
$("#loginForm").submit(function (event) {
  validatePasswordRegex();
  event.preventDefault();
});

function validateLogin() {
  // validateUsername();
  // validatePassword();
  validatePasswordRegex();

  // If all validations pass, make an AJAX request to the fake API
  if (
    $("#errorMessage").html() === "" &&
    $("#errorMessage2").html() === "" &&
    $("#validationResult").html() === ""
  ) {
    const username = $("#username").val();
    const password = $("#password").val();

    $.ajax({
      url: "https://dummyjson.com/docs/auth",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      success: function (data, status, xhr) {
        if (xhr.status === 200) {
          // Redirect to about page upon successful authentication
          window.location.replace("about.html");
        } else {
          // Handle other responses if needed
          console.error("Unexpected response:", xhr.status);
        }
      },
      error: function (xhr, status, error) {
        // Handle errors, e.g., display an error message
        console.error("Error:", status, error);
      },
    });
  }
  $("#loginForm").submit(function (event) {
    validateLogin();
    event.preventDefault(); // Prevent the form from submitting
  });
}
