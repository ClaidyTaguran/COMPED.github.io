document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".div");
    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += 2; // Adjust speed by increasing/decreasing the increment value
        progressBar.style.width = `${progress}px`;

        if (progress >= 317) { // Full width of the rectangle
            clearInterval(loadingInterval);
            window.location.href = "homepage.html"; // Redirect to home.html
        }
    }, 30); // Adjust interval duration for speed
});
