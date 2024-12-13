$(function () {
  // select
  $(".filter_by, .color, .color2").select2({
    minimumResultsForSearch: -1,
    placeholder: "Current Number of Clients",
  });

  // додаємо клас для бекграунду
  if ($(window).width() > 992) {
    $('.header__has-child').on('mouseenter', function () {
      $('body').addClass('bg-dark');
    }).on('mouseleave', function () {
      $('body').removeClass('bg-dark');
    });
  }

  $('.header__has-child > span').on('click', function () {
    $(this).parent().toggleClass('open');
    $(this).siblings('.header__item-child').slideToggle();
  });

  // filter
  $(".category-listt__child-item, .category-listt__check").on("click", function () { // виправлено клас .category-listt__check
    $(this).toggleClass("open active");
  });

  $(".category-listt__title").on("click", function () {
    $(this).toggleClass("active").next().slideToggle(300);
  });

  $(".category-listt__close").on("click", function () {
    $(".category-listt").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".filter-btn").on("click", function () {
    $(".category-listt").addClass("open");
    $("body").addClass("lock");
  });

  $(".form__input-show").on("click", function () {
    $(this).toggleClass("active");
  });

  /*start cabinet-show=======*/
  $(".cabinet-show").on("click", function () {
    $("body").addClass("lock");
    $(".cabinet__left").addClass("open");
  });

  $(".cabinet-menu__close").on("click", function () {
    $("body").removeClass("lock");
    $(".cabinet__left").removeClass("open");
  });

  // accordeon
  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });

  // Додаємо клас "open" для першого елемента
  $(".accordeon dl:first").addClass("open");
  // Показуємо відповідний "dd" для першого елемента
  $(".accordeon dl:first dd").show();
  $(".accordeon dl:first dt").addClass("active");

  // rating star
  $(".rateYo_reviews").rateYo({
    starWidth: "12px",
    ratedFill: "#FFC700",
    spacing: "2px",
    rating: 4,
    readOnly: true,
  });

  $(".rateYo_choice").rateYo({
    starWidth: "14px",
    ratedFill: "#FFC700",
    spacing: "2px",
    rating: 0,
  });

  $('[data-fancybox]').fancybox();

  // клас sticky для шапки при скроллі
  const navOffset = document.querySelector('.header').offsetTop + 200;
  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    document.querySelector('.header').classList.toggle('sticky', scrolled > navOffset);
  });

  // меню гамбургер
const menuBtn = document.querySelector(".header__menu-btn");
const navMenu = document.querySelector(".header__nav");
const header = document.querySelector(".header");

if (menuBtn && navMenu && header) {
  menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("open");
    document.body.classList.toggle("lock");
    header.classList.toggle("active");
  });
}

const productAdd = document.querySelector('.product__add');
if (productAdd) {
  productAdd.addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

  // sliders initialization
  var swiperIntro = new Swiper(".intro__slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperProductSliderOneRow = new Swiper(".product-slider", { // зміна назви змінної
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  var swiperProductSliderTwoRow = new Swiper(".product-slider_two-row", { // зміна назви змінної
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    }
  });

  var swiper = new Swiper(".info__slider", {
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  var swiperProductImgSlider = new Swiper(".product-item__img-slider", {
    loop: true,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });

  var swiperReviewSlider = new Swiper(".review__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

  var swiperProductSideSlider = new Swiper(".product__slider-side", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    breakpoints: {
      767: {
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
      },
    }
  });

  var swiperProductSliderThumbs = new Swiper(".product__slider", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiperProductSideSlider,
    },
  });

  const bottomTextElement = document.querySelector('.form__bottom-text');

  // Функція для тогл класу 'active' для чексбоксу форми
  if (bottomTextElement) {
    bottomTextElement.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

  // селект для модалок
  function selectOption(option) {
    const parentDropdown = option.closest('.dropdown');
    const dropbtn = parentDropdown.querySelector('.dropbtn');
    dropbtn.textContent = option.textContent;

    const optionsList = parentDropdown.querySelectorAll('.dropdown-content li');
    optionsList.forEach((item) => {
      item.classList.toggle('choice', item === option);
    });
  }
});

// Обробка елементів в .cabinet__items-wrap
$('.cabinet__items-wrap').each(function () {
  let ths = $(this);
  ths.find('.cabinet__right-items').not(':eq(1)').hide(); // Приховуємо всі, крім другого елемента
  ths.find('.cabinet__btn').click(function () {
    ths.find('.cabinet__btn').removeClass('active').eq($(this).index()).addClass('active');
    ths.find('.cabinet__right-items').hide().eq($(this).index()).fadeIn(1000);
  }).eq(1).addClass('active'); // Додаємо клас "active" другому елементу
});

//////
document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо всі елементи з класом header__basket
  const headerBaskets = document.querySelectorAll('.header__basket');

  headerBaskets.forEach(headerBasket => {
    const basketBox = headerBasket.querySelector('.basket-box');
    const closeButton = basketBox.querySelector('.basket-box__close');

    // Додаємо клас 'open' при кліку на headerBasket
    headerBasket.addEventListener('click', function () {
      basketBox.classList.add('open');
    });

    // Прибираємо клас 'open' при кліку на closeButton
    closeButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Щоб не активувати клік на headerBasket
      basketBox.classList.remove('open');
    });
  });
});


