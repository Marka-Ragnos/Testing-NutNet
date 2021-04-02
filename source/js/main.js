"use strict";
(function () {
  // Swiper Slider
  const sliderContainerText = document.querySelector(".people-say__list-wp");

  let mySwiperText = new Swiper(sliderContainerText, {
    slidesPerView: 1,
    spaceBetween: 100,
    initialSlide: 2,
    effect: "flip",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      paginationType: "custom",
      // dynamicBullets: true,
      // dynamicMainBullets: 1,
      renderBullet: function (index, className) {
        return `<li class="userpic-dot swiper-pagination-bullet">
            <button class="userpic-dot__btn">
              <img class="userpic-dot__img" src="img/user-${
                index + 1
              }.png" alt="dot">
            </button>
          </li>`;
      },
    },
  });

  // Background шапки при прокрутке страницы и клике на бургер

  const header = document.querySelector(".header"); // Шапка сайта
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", () => {
    if (!header.classList.contains("scroll")) {
      header.classList.toggle("scroll");
    }
    return;
  });

  window.onscroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const height = 100;

    if (top > height) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  };

  // Переключение активного пункта меню в шапке + Плавная прокрутка до якорей

  const links = document.querySelectorAll(".nav-link");

  links.forEach((element) => {
    element.addEventListener("click", (evt) => {
      evt.preventDefault();

      const blockID = element.getAttribute("href");

      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      makesScrolling(element);
      links.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    });
  });

  // Плавная прокрутка до якоря

  const makesScrolling = (link) => {
    const blockID = link.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Модальное окно - видео

  const openVideo = document.querySelector(".video__watch");
  const modalVideo = document.querySelector(".modal-video");
  const modalWp = document.querySelector(".modal-wp");
  const closeModalVideo = document.querySelector(".modal-video__close");
  const videoIframe = document.querySelector(".modal-video__video");

  openVideo.addEventListener("click", () => {
    modalWp.classList.add("open");
  });

  closeModalVideo.addEventListener("click", () => {
    modalWp.classList.remove("open");
    const oldSrc = videoIframe.getAttribute("src");
    videoIframe.setAttribute("src", oldSrc);
  });
})();
