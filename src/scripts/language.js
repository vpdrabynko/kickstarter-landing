'use strict';
import data from './language.json';

const input = document.querySelector('.get-in-touch__input-email');
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
