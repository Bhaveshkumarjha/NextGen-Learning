// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for the login form
document.querySelector(".login").addEventListener("click", function(event) {
    // Prevent form submission if validation fails
    event.preventDefault();

    // Get values from input fields
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const dob = document.querySelector('input[type="date"]').value;
    const phone = document.querySelector('input[type="number"]').value;

    // Validate fields
    if (!username || !password || !dob || !phone) {
        alert("All fields are required!");
        return false;
    }

    // Validate phone number (ensure it's exactly 10 digits)
    if (phone.length !== 10) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    // If all fields are valid, you can submit the form or take other actions
    alert("Login successful!");
    // You can optionally redirect here: window.location.href = "/dashboard.html";
});

// Handle the 'Download PDF' buttons
document.querySelectorAll(".download").forEach(button => {
    button.addEventListener("click", function() {
        alert("Downloading the file...");
    });
});

// Handle the 'NEXT' button to ensure form is valid before navigating
document.querySelector(".nextpage").addEventListener("click", function(event) {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!username || !password) {
        event.preventDefault();
        alert("Please login before proceeding to the next page.");
    }
});

// Function to toggle visibility of elements as the user scrolls
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const scrollableElement = document.querySelector(".scroll");

    // Change style of the scrollable element based on scroll position
    if (scrollPosition > 100) {
        scrollableElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        scrollableElement.style.backgroundColor = 'transparent';
    }
});