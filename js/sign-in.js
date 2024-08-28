// JavaScript for handling user input
document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var isValid = true;

    // Validate username
    if (username === "") {
      document.getElementById("usernameWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("usernameWarning").classList.add("d-none");
    }

    // Validate password
    if (password === "") {
      document.getElementById("passwordWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("passwordWarning").classList.add("d-none");
    }

    if (isValid) {
      alert("Sign-In Successful!");
      // Perform sign-in logic here
    }
  });
