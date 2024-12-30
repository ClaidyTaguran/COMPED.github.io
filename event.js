// JavaScript for the event platform application with navigation and clickable indicators

// Helper function to update the active state
function updateActiveIndicator(selector) {
    document.querySelectorAll('.home, .event, .attendance, .finance, .inventory').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(selector).classList.add('active');
}

// Add hover effect for clickable items
document.querySelectorAll('.home, .event, .attendance, .finance, .inventory, .arrowleft, .text-wrapper-6, .text-wrapper-7').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hover');
    });
});

// Navigation for the sidebar icons
document.querySelector('.home').addEventListener('click', () => {
    window.location.href = 'socmed.html';
    updateActiveIndicator('.home');
});
document.querySelector('.event').addEventListener('click', () => {
    window.location.href = 'event.html';
    updateActiveIndicator('.event');
});
document.querySelector('.attendance').addEventListener('click', () => {
    window.location.href = 'attendance.html';
    updateActiveIndicator('.attendance');
});
document.querySelector('.finance').addEventListener('click', () => {
    window.location.href = 'payment.html';
    updateActiveIndicator('.finance');
});
document.querySelector('.inventory').addEventListener('click', () => {
    window.location.href = 'tools.html';
    updateActiveIndicator('.inventory');
});

// Back button functionality
document.querySelector('.arrowleft').addEventListener('click', () => {
    window.location.href = 'socmed.html';
});

// Navigation for "View Events" and "View All" buttons
document.querySelector('.text-wrapper-6').addEventListener('click', () => {
    window.location.href = 'viewevents.html';
});
document.querySelector('.text-wrapper-7').addEventListener('click', () => {
    window.location.href = 'schedule.html';
});

// Responsive adjustments
function makeResponsive() {
    const resizeHandler = () => {
        if (window.innerWidth <= 768) {
            document.body.style.fontSize = '14px';
        } else {
            document.body.style.fontSize = '16px';
        }
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
}
makeResponsive();
