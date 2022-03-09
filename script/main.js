const swiper = new Swiper('.swiper', {
    
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      317: {
        slidesPerView: 1,
        navigation: false,

      },
    },
    
});