document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Example of basic validation (you can customize this with a real authentication system)
        if (email === "" || password === "") {
            alert("Please fill in both fields.");
        } else if (email === "test@example.com" && password === "password123") { 
            // Replace this with real validation logic
            alert("Login successful!");
            window.location.href = "socmed.html"; // Redirect to socmed.html
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
