
document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll('.keys');
    const screen2 = document.querySelector('.scrn2');

    // Function to update the screen with the clicked number
    function displayNumber(event) {
        const key = event.target.textContent;
        if (key !== 'CLR' && key !== 'ENTER') {
            screen2.textContent += key; // Append the number to the screen
        } else if (key === 'CLR') {
            screen2.textContent = ''; // Clear the screen
        } else if (key === 'ENTER') {
            // Handle enter key if needed
        }
    }

    // Add event listeners to each key
    keys.forEach(key => {
        key.addEventListener('click', displayNumber);
    });
});
