$(document).ready(function() {
    const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

slides.forEach(slide => {
    slide.addEventListener('mouseenter', function() {
        const hoverContent = this.querySelector('.hover-content');
        if (hoverContent) {
            hoverContent.style.display = 'flex';
        }
    });

    slide.addEventListener('mouseleave', function() {
        const hoverContent = this.querySelector('.hover-content');
        if (hoverContent) {
            hoverContent.style.display = 'none';
        }
    });
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

    // Contact Us Modal
    $('#contactBtn').click(function(){
        $('#contactModal').modal('show');
    });

    // Read more button
    $('.read-more').click(function(){
        window.open('https://www.fylehq.com', '_blank');
    });

    // Our Project Section
    $('.project-list li').click(function(){
        $('.project-list li').removeClass('active');
        $(this).addClass('active');
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
    });

    // Form submission with Thank You Modal
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var form = event.target;
        var formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Show the thank you modal
                $('#thankYouModal').modal('show');
                form.reset(); // Reset the form
            } else {
                // Handle errors here
                console.error('Server responded with an error:', response.statusText);
                alert('Something went wrong. Please try again.');
            }
        }).catch(error => {
            // Handle errors here
            console.error('Fetch error:', error);
            alert('Something went wrong. Please try again.');
        });
    });
});