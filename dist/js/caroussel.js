var testimonialImages = document.querySelectorAll('.test-img');
var testimonialNames = document.querySelectorAll('.test-name');
var testimonialParagraphs = document.querySelectorAll('.test-p');
var dots = document.querySelectorAll(".dot");

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    if (n > testimonialImages.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = testimonialImages.length }
    for (i = 0; i < testimonialImages.length; i++) {
        testimonialImages[i].style.display = "none";
        testimonialNames[i].style.display = "none";
        testimonialParagraphs[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    testimonialImages[slideIndex - 1].style.display = "inline-block";
    testimonialNames[slideIndex - 1].style.display = "block";
    testimonialParagraphs[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
} 
