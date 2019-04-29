var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let testimonialImages = document.querySelectorAll('.test-img');
    let testimonialNames = document.querySelectorAll('.test-name');
    let testimonialParagraphs = document.querySelectorAll('.test-p');    
    let dots = document.querySelectorAll(".dot");

    if (n > testimonialImages.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = testimonialImages.length }

    for (let i = 0; i < testimonialImages.length; i++) {
        testimonialImages[i].style.display = "none";
        testimonialNames[i].style.display = "none";
        testimonialParagraphs[i].style.display = "none";

    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    testimonialImages[slideIndex - 1].style.display = "inline-block";
    testimonialNames[slideIndex - 1].style.display = "block";
    testimonialParagraphs[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
} 
