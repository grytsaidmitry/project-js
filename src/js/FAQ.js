import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import sprite from '../img/sprite.svg';


function updateIcons() {
  document.querySelectorAll('.faq-accordion .ac').forEach(item => {
    const icon = item.querySelector('.faq-icon use');
    if (item.classList.contains('is-active')) {
      icon.setAttribute('href', `${sprite}#icon-close`);
    } else {
      icon.setAttribute('href', `${sprite}#icon-add`);
    }
  });
}


function initAccordion() {
  new Accordion('.faq-accordion', {
    duration: 400,
    showMultiple: false,
    collapse: true,
  });

  document.querySelectorAll('.faq-accordion .ac').forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(updateIcons, 50);
    });
  });

  updateIcons();
}

document.addEventListener('DOMContentLoaded', initAccordion);
