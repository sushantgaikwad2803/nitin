//Navbar

const dropbar = document.querySelector(".dropdown-menu")

document.addEventListener('DOMContentLoaded', () => {
    const togglebtnicon = document.querySelector('.mobile-menu-btn i');
    togglebtnicon.onclick = () => {
      dropbar.classList.toggle('active');

      const isopen = dropbar.classList.contains('active');
      togglebtnicon.classList = isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    };
});


// Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    }

            // Change slide every 5 seconds
            setInterval(nextSlide, 5000);
        });

        // Video Gallery Filter
        document.addEventListener('DOMContentLoaded', function () {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const videoItems = document.querySelectorAll('.video-item');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');

                    const filter = btn.getAttribute('data-filter');

                    videoItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });