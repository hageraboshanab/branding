// JavaScript for handling user input
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();
    var isValid = true;

    // Validate username
    if (username === "") {
      document.getElementById("usernameWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("usernameWarning").classList.add("d-none");
    }

    // Validate email
    if (email === "" || !email.includes("@")) {
      document.getElementById("emailWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("emailWarning").classList.add("d-none");
    }

    // Validate password
    if (password === "") {
      document.getElementById("passwordWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("passwordWarning").classList.add("d-none");
    }

    // Validate confirm password
    if (confirmPassword === "" || confirmPassword !== password) {
      document
        .getElementById("confirmPasswordWarning")
        .classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("confirmPasswordWarning").classList.add("d-none");
    }

    if (isValid) {
      alert("Registration Successful!");
      // Perform registration logic here
    }
  });
