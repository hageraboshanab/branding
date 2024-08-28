// JavaScript for handling user input
document
  .getElementById("projectForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var referral = document.getElementById("referral").value.trim();
    var message = document.getElementById("message").value.trim();
    var isValid = true;

    // Validate first name
    if (firstName === "") {
      document.getElementById("firstNameWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("firstNameWarning").classList.add("d-none");
    }

    // Validate last name
    if (lastName === "") {
      document.getElementById("lastNameWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("lastNameWarning").classList.add("d-none");
    }

    // Validate email
    if (email === "" || !email.includes("@")) {
      document.getElementById("emailWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("emailWarning").classList.add("d-none");
    }

    // Validate phone
    if (phone === "") {
      document.getElementById("phoneWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("phoneWarning").classList.add("d-none");
    }

    // Validate referral
    if (referral === "") {
      document.getElementById("referralWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("referralWarning").classList.add("d-none");
    }

    // Validate message
    if (message === "") {
      document.getElementById("messageWarning").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("messageWarning").classList.add("d-none");
    }

    if (isValid) {
      alert("Form submitted successfully!");
      // Perform form submission logic here
    }
  });
