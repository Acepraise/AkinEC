// Circle Cursor Implementation
const cursor = document.querySelector('.custom-cursor');

// Circle Cursor with Dragging Effect
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.1; // Adjust this for faster/slower dragging

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Function to animate cursor movement
function animateCursor() {
    // Calculate distance between current cursor position and mouse position
    const distanceX = mouseX - cursorX;
    const distanceY = mouseY - cursorY;

    // Gradually move cursor toward the mouse position
    cursorX += distanceX * speed;
    cursorY += distanceY * speed;

    // Update cursor position
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    // Continuously update animation
    requestAnimationFrame(animateCursor);
}

// Start the cursor animation
animateCursor();

// Scale the cursor when hovering over buttons or links
const hoverElements = document.querySelectorAll('a, .btn-primary, .btn-secondary');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(0.5)'; // Shrink cursor when hovering
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'; // Return cursor to normal size
    });
});

// Get the elements
const menuIcon = document.getElementById('menu-icon');
const menuSearchOverlay = document.getElementById('menu-search-overlay');
const closeBtn = document.getElementById('search-close-btn')

// Show the menu and search bar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    menuSearchOverlay.classList.add('show');  // Show the sidebar overlay
});

// Close the sidebar when the close button (X) is clicked
closeBtn.addEventListener('click', () => {
    menuSearchOverlay.classList.remove('show');  // Hide the sidebar
});
