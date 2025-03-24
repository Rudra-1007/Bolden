let slider = document.querySelector('.slider');
        let images = document.querySelectorAll('.slider img');
        let index = 0;
        let progressFill = document.querySelector('.progress-fill');
        let totalSlides = images.length;

        function updateProgressBar() {
            let progressWidth = ((index + 1) / totalSlides) * 100;
            progressFill.style.width = `${progressWidth}%`;
        }

        function nextSlide() {
            index++;
            if (index >= images.length) {
                index = 0;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
            updateProgressBar();
        }

        function prevSlide() {
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
            updateProgressBar();
        }

        setInterval(nextSlide, 5000);