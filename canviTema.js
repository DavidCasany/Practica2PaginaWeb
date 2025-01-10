const toggleButton = document.getElementById('mode-toggle');
const currentTheme = localStorage.getItem('theme') || 'light-mode';
document.body.classList.add(currentTheme);
toggleButton.textContent = currentTheme === 'dark-mode' ? '🌙' : '☀️';

toggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        toggleButton.textContent = '🌙';
    } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
        toggleButton.textContent = '☀️';
    }
});
