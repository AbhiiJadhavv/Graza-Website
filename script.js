document.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 1) { // Adjust the scroll threshold as needed
        logo.classList.add('h-20', 'w-40'); // Tailwind classes for resized state
        logo.classList.remove('h-28', 'w-52');
    } else {
        logo.classList.remove('h-20', 'w-40'); // Remove resized state classes
        logo.classList.add('h-28', 'w-52');
    }
});

function changeImage(newImageSrc) {
    document.getElementById('mainImage').src = newImageSrc;
}