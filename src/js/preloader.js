import { renderModalMarkup } from './renderModalMarkup';
import getRefs from './getRefs.js';
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  preloader.style.display = 'none';
  getRefs().body.classList.remove('overflow');
});
