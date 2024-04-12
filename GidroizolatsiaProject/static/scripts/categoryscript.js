document.addEventListener('DOMContentLoaded', function() {
    var categoryTitles = document.querySelectorAll('.category-title');

    categoryTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var list = this.nextElementSibling;

            if (list) {
                list.classList.toggle('active');
                var arrow = this.querySelector('.arrow'); // Знаходимо елемент стрілки в контексті `.category-title`
                changeArrow(arrow); // Передаємо елемент стрілки у функцію changeArrow()
            }
        });
    });

    // Функція changeArrow, як ви її вже написали, залишається такою ж, як і раніше.
    function changeArrow(arrow) {
        if (arrow.textContent.trim() === '⮟') {
            arrow.textContent = '⮝';
        } else {
            arrow.textContent = '⮟';
        }
    }

    // Також залишається ваш код для обробки кліків на елементи стрілок.
    var arrows = document.querySelectorAll('.arrow');
    arrows.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            changeArrow(this); // Передаємо елемент стрілки у функцію changeArrow()
        });
    });
});