var swiper = new Swiper(".mySwiper", {
    lazy: true,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".orj-button-next",
      prevEl: ".orj-button-prev",
    },
    pagination: {
      el: ".orj-pagination",
      clickable: true,
    },
  });
  