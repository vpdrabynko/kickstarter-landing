'use strict';

import data from './language.json';

// eslint-disable-next-line
AOS.init();
// eslint-disable-next-line
AOS.init({
  disable: 'phone',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

const form = document.querySelector('.get-in-touch__form');
const input = document.querySelector('.get-in-touch__input-email');
const button = document.querySelector('.get-in-touch__button');
const message = document.querySelector('.get-in-touch__input-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
  input.reset();
});

input.addEventListener('change', function() {
  const inputValue = input.value;

  if (!inputValue.checkValidity()) {
    input.style.border = '1px solid #eb5757';
  } else {
    input.style.border = '1px solid #0c797a';
  }
});

message.addEventListener('change', function() {
  if (!message.checkValidity()) {
    message.style.border = '1px solid #eb5757';
  } else {
    message.style.border = '1px solid #0c797a';
  }
});

button.onclick = () => {
  if (input.checkValidity()) {
    input.style.border = '1px solid #828282';
  }

  if (message.checkValidity()) {
    message.style.border = '1px solid #828282';
  }
};

const textbox = document.querySelector('.get-in-touch__input-message');
const enButton = document.querySelector('.language__english');
const uaButton = document.querySelector('.language__ukrainian');
const enButtonMobile = document.querySelector('.language__english--mobile');
const uaButtonMobile = document.querySelector('.language__ukrainian--mobile');

function changeLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');

  elementsToTranslate.forEach(element => {
    const textKey = element.getAttribute('data-translate');

    if (data[lang] && data[lang][textKey]) {
      element.textContent = data[lang][textKey];
    }
  });
}

enButton.addEventListener('click', () => {
  changeLanguage('en');
  input.placeholder = 'Your email';
  textbox.placeholder = 'Your message...';
  enButton.style.color = '#333';
  uaButton.style.color = '#828282';
});

uaButton.addEventListener('click', () => {
  changeLanguage('ua');
  input.placeholder = 'Ваша електронна адреса';
  textbox.placeholder = 'Ваше повідомлення...';
  enButton.style.color = '#828282';
  uaButton.style.color = '#333';
});

enButtonMobile.addEventListener('click', () => {
  changeLanguage('en');
  input.placeholder = 'Your email';
  textbox.placeholder = 'Your message...';
  enButtonMobile.style.color = '#333';
  uaButtonMobile.style.color = '#828282';
});

uaButtonMobile.addEventListener('click', () => {
  changeLanguage('ua');
  input.placeholder = 'Ваша електронна адреса';
  textbox.placeholder = 'Ваше повідомлення...';
  enButtonMobile.style.color = '#828282';
  uaButtonMobile.style.color = '#333';
});

changeLanguage('en');

const menu = document.querySelector('.header__menu-icon');
const items = document.querySelectorAll('.menu__item');
const closeMenu = document.querySelector('.menu__icon-close');

menu.onclick = () => {
  let time = 200;

  items.forEach((item, index) => {
    item.style.animation = `menu 0.3s ${0.1 + index * 0.1}s`;

    setTimeout(() => {
      item.style.opacity = '1';
    }, time);
    time += 100;
  });
};

closeMenu.onclick = () => {
  items.forEach((item) => {
    item.style.animation = '';
    item.style.opacity = '0';
  });
};

const prev = document.querySelector('.features__prev-img');
const prevSvg = prev.querySelectorAll('path');
const next = document.querySelector('.features__next-img');
const nextSvg = next.querySelectorAll('path');
const num = document.querySelector('.features__now-num');

document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable-next-line
  const swiper = new Swiper('.features__content-swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.features__button-next',
      prevEl: '.features__button-prev',
    },
    on: {
      slideChange: function() {
        const currentSlide = this.realIndex + 1;
        const formattedSlideNumber = currentSlide < 10
          ? `0${currentSlide}` : currentSlide;

        num.textContent = formattedSlideNumber;

        if (currentSlide === 3) {
          nextSvg.forEach((path) => {
            path.setAttribute('fill', '#bdbdbd');
          });
        } else {
          nextSvg.forEach((path) => {
            path.setAttribute('fill', '#333');
          });
        }

        if (currentSlide === 1) {
          prevSvg.forEach((path) => {
            path.setAttribute('fill', '#bdbdbd');
          });
        } else {
          prevSvg.forEach((path) => {
            path.setAttribute('fill', '#333');
          });
        }
      },
    },
  });
});
