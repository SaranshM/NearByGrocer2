var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
});