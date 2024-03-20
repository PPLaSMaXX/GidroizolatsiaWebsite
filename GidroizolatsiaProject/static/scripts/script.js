document.addEventListener('DOMContentLoaded', function() {
    // Функція для оновлення активної точки
    function updateActiveDot(slideIndex) {
        const dotsContainers = document.querySelectorAll('.carousel-dots');
        dotsContainers.forEach(dotsContainer => {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach(dot => dot.classList.remove('active'));
            const targetDot = dotsContainer.querySelector(`.dot${slideIndex}`);
            if (targetDot) {
                targetDot.classList.add('active');
            }
        });
    }

    // Додати обробник подій для всіх точок
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function(event) {
            const dotsContainer = this.closest('.carousel-dots');
            dotsContainer.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
            this.classList.add("active");
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetSlide = document.querySelector(targetId);
            const container = targetSlide.closest('.tovar');
            const containerRect = container.getBoundingClientRect();
            const slideRect = targetSlide.getBoundingClientRect();
            const offsetX = slideRect.left - containerRect.left + container.scrollLeft;
            container.scrollTo({
                left: offsetX,
                behavior: 'smooth'
            });
            const slideIndex = parseInt(targetId.replace('#prodpop', ''));
            updateActiveDot(slideIndex); // Оновити активну точку
        });
    });

    // Додати обробник подій для прокрутки слайдів
    document.querySelectorAll('.tovar').forEach(container => {
        container.addEventListener('scroll', function(event) {
            const containerRect = this.getBoundingClientRect();
            const slides = this.querySelectorAll('.product');
            let activeSlideIndex = 0;
            for (let i = 0; i < slides.length; i++) {
                const slideRect = slides[i].getBoundingClientRect();
                if (slideRect.left >= containerRect.left && slideRect.right <= containerRect.right) {
                    activeSlideIndex = i + 1;
                    break;
                }
            }
            updateActiveDot(activeSlideIndex); // Оновити активну точку
        });
    });
});
