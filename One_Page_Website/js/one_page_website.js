// Open the modal
function openModal() {
    document.getElementById('shipModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('shipModal').style.display = 'none';
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('shipSlides');
    let dots = document.getElementsByClassName('image-thumb');
    let captionText = document.getElementById('caption');

    // Handle going past either "end" of slides
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Set slides to hidden
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Set thumbnail images ("dots") to inactive
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    // Set current slide to active and set caption
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;

}