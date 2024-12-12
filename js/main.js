$(document).ready(function() {
    $('.client-logos').slick({
        slidesToShow: 5,    // Number of items visible at once
        slidesToScroll: 1,   // Number of items to scroll on each interaction
        autoplay: true,      // Enable automatic scrolling
        autoplaySpeed: 2000, // Duration of each auto-scroll in milliseconds
        arrows: true,        // Display navigation arrows
        infinite: true,      // Enable infinite scrolling (looping)
        vertical: false,     // Ensure the slider is horizontal
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,  // On medium screens, show 4 items
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,  // On small screens, show 3 items
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,  // On very small screens, show 2 items
                    slidesToScroll: 1
                }
            }
        ]
    });
});
