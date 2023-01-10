const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})