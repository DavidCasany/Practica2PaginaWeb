window.onload = function() {
    const images = document.querySelectorAll('.miniatura');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const url = image.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
};
