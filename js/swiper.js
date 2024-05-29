var swiper = new Swiper('.swiper', {
    slidesPerView: 3, // Show 3 slides
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});