const toggleButton = document.getElementById('mode-toggle');
const icon = toggleButton.querySelector('i');

// Load saved mode from local storage, if available
const currentMode = localStorage.getItem('theme');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-brightness-high'); // Change to sun icon
}

// Toggle dark/light mode and change icon on click
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high'); // Change to sun icon
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('bi-brightness-high'); // Remove sun icon
        icon.classList.add('bi-moon'); // Add moon icon
        localStorage.setItem('theme', 'light');
    }
});


