// Navigation functionality
document.querySelector('.home').addEventListener('click', () => {
    window.location.href = 'socmed.html';
});

document.querySelector('.ecertificates').addEventListener('click', () => {
    window.location.href = 'ecertificates.html';
});

document.querySelector('.elearning').addEventListener('click', () => {
    window.location.href = 'elearning.html';
});

document.querySelector('.profile').addEventListener('click', () => {
    window.location.href = 'profile.html';
});

document.querySelector('.arrowlef').addEventListener('click', () => {
    window.location.href = 'elearning.html';
});

document.querySelector('.add-wrapper img').addEventListener('click', () => {
    window.location.href = 'courseupdate.html';
});

// Adding hover effects
const interactiveElements = document.querySelectorAll('.home, .ecertificates, .elearning, .profile, .arrowlef, .add-wrapper img');

interactiveElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    });

    element.addEventListener('mouseout', () => {
        element.classList.remove('hover');
    });

    element.addEventListener('click', () => {
        interactiveElements.forEach(el => el.classList.remove('active')); // Remove active state from all
        element.classList.add('active'); // Add active state to the clicked element
    });
});
