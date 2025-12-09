document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;
    const slideCount = 6; // Укажите количество слайдов (6 в вашем случае)
    
    nextBtn.addEventListener('click', function() {
        currentSlide++;
        if (currentSlide >= slideCount) currentSlide = 0;
        slides.style.transform = `translateX(-${currentSlide * 16.666}%)`; // 100/6 = 16.666
    });
    
    prevBtn.addEventListener('click', function() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slideCount - 1;
        slides.style.transform = `translateX(-${currentSlide * 16.666}%)`;
    });
});
