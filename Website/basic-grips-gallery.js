document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    const photoDescription = document.getElementById('photo-description');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            const info = photo.getAttribute('data-info');
            photoDescription.textContent = info;
        });
    });
});
