let index = 0;
const images = document.querySelectorAll('.carousel-images img');

// Change d'image automatiquement toutes les 3 secondes
function changeImage() {
    images.forEach(img => img.style.display = 'none');
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}

// Fonction pour naviguer avec les boutons Next et Previous
function moveSlide(step) {
    images[index].style.display = 'none';
    index = (index + step + images.length) % images.length;
    images[index].style.display = 'block';
}

// Initialisation du carrousel
setInterval(changeImage, 7000);
changeImage();  // Initial image display
