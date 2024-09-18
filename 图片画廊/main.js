document.addEventListener('DOMContentLoaded', function () {
    const displayedImg = document.querySelector('.displayed-img');
    const thumbs = document.querySelectorAll('.thumb');
    const overlay = document.querySelector('.overlay');
    const darkenButton = document.querySelector('.dark');
    let isDarkened = false;

    function updateImage(imageSrc) {
        displayedImg.src = imageSrc;
    }

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function () {
            const fullImageSrc = this.getAttribute('data-full-image');
            updateImage(fullImageSrc);
        });
    });

    darkenButton.addEventListener('click', function () {
        if (isDarkened) {
            darkenButton.textContent = 'Darken';
            overlay.style.display = 'none';
            displayedImg.style.filter = 'brightness(1)';
        } else {
            darkenButton.textContent = 'Lighten';
            overlay.style.display = 'block';
            displayedImg.style.filter = 'brightness(0.5)';
        }
        isDarkened = !isDarkened;
    });
});
