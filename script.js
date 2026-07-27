/**
 * Form Validation Script for Contact Me Page
 * Student: Ahmad Hussein Ahmad Hassies
 * SID: 157933
 */

function validateAndSubmit(event) {
    event.preventDefault();

    const fullNameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const countryInput = document.getElementById('country');
    const commentsInput = document.getElementById('comments');

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const country = countryInput.value.trim();
    const comments = commentsInput.value.trim();

    if (fullName === "" || email === "" || country === "" || comments === "") {
        alert("⚠️ Submission Error: All fields are required! Please fill in all fields before submitting.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("⚠️ Invalid Email: Please enter a valid email address.");
        emailInput.focus();
        return false;
    }

    alert("✅ Thank you, " + fullName + "! Your message has been submitted successfully.");
    document.getElementById('contactForm').reset();
    return true;
}
