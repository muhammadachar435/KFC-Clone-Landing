document.addEventListener('DOMContentLoaded', function () {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    if (!prev || !next) {
        console.error("Prev or Next button not found");
        return;
    }

    let active = 0;
    let lengthitems = items.length - 1;

    // Ensure the first dot is active at the start
    dots[0].classList.add('active');

    let refreshslider = setInterval(() => {
        next.click()
    }, 4000);

    next.onclick = function () {
        if (active + 1 > lengthitems) {
            active = 0;
        } else {
            active = active + 1;
        }
        reloadSlider();
    };

    prev.onclick = function () {
        if (active - 1 < 0) {
            active = lengthitems;
        } else {
            active = active - 1;
        }
        reloadSlider();
    };

    function reloadSlider() {
        let checkleft = items[active].offsetLeft;
        list.style.left = -checkleft + 'px';

        // Get the last active dot
        let lastActivedot = document.querySelector('.slider .dots li.active');

        // Remove the 'active' class from the previous dot if it exists
        if (lastActivedot) {
            lastActivedot.classList.remove('active');
        }

        // Add the 'active' class to the current dot
        dots[active].classList.add('active');

        clearInterval(refreshslider);  // Clear the previous interval
        refreshslider = setInterval(() => {  // Re-initialize the interval
            next.click();
        }, 4000);
    }

    // Correct the arrow function syntax for the 'click' event on each dot
    dots.forEach((li, key) => {
        li.addEventListener('click', function () {
            active = key;
            reloadSlider();
        });
    });
});
