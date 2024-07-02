// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});

// Custom Cursor Effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('body::after');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Visitor Counter
function updateVisitorCounter() {
    const visitCountElement = document.getElementById('visit-count');
    let visitCount = localStorage.getItem('visitCount');

    if (!visitCount) {
        visitCount = 0;
    }

    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCountElement.textContent = visitCount;
}

document.addEventListener('DOMContentLoaded', updateVisitorCounter);
