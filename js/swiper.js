var swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Default to showing 3 slides
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // When window width is < 768px
        769: {
            slidesPerView: 3, // Show 1 slide
        }
    }
});

$(".openbtn4").click(function () {
    $(this).toggleClass('active');
});
