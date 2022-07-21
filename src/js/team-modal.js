import 'material-icons/iconfont/filled.css';
import 'animate.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

import sashaUrl from './images/team/oleksandr.jpg';
import yuraUrl from './images/team/yurii.jpg';
import serhiiUrl from './images/team/sergii.jpg';
import olegUrl from './images/team/oleg.jpg';
import volodymyrUrl from './images/team/volodymyr.jpg';
import yodaUrl from './images/team/yoda.jpg';

import spriteUrl from './images/sprite.svg';

// ---------------canvas-confetti--------------------
// import showConfetti from './js/confetti';
import confetti from 'canvas-confetti';
function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 300, spread: 200, zIndex: 2021 });
}

// ---------------------------------------------------------
const developers = [
  {
    nameDev: 'Oлександр',
    surnameDev: 'Жовтий',
    photo: `${sashaUrl}`,
    roleDev: 'Team-lead',
    gitDev: 'https://github.com/AleksZhov',
  },
  // 2
  {
    nameDev: 'Юрій',
    surnameDev: 'Риков',
    photo: `${yuraUrl}`,
    roleDev: 'Scrum-master',
    gitDev: 'https://github.com/Yurii-Rykov',
  },
  // 3
  {
    nameDev: 'Сергій',
    surnameDev: 'Маслов',
    photo: `${serhiiUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/gsmoff',
  },
  // 4
  {
    nameDev: 'Олег',
    surnameDev: 'Гнатик',
    photo: `${olegUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/yavenir',
  },
  // 5
  {
    nameDev: 'YODA',
    surnameDev: 'Master',
    photo: `${yodaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/',
  },
  // 6
  {
    nameDev: 'Володимир',
    surnameDev: 'Бондаренко',
    photo: `${volodymyrUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/qweeqer',
  },
];

const markupTeamCard = developers
  .map(({ surnameDev, nameDev, photo, roleDev, gitDev }) => {
    return `
<li class="team-card">
    <img src="${photo}" alt="${nameDev}" class="team-image">
    <p class="team-name">${nameDev}<br>${surnameDev}</p>
    <p class="team-role">${roleDev}</p>
    <a href="${gitDev}" target="_blank" class="team-git"><svg class="git__icon" width="24" height="24">
      <use href="${spriteUrl}#icon-github-logo"></use>
    </svg></a>
</li>`;
  })
  .join('');
const markupModal = `<p class="team-title">JAVA YODA <span class="yoda"></span></p>
 <button type='button' class='modal-window__close-btn' data-modal-close>
    <span class='material-icons'>close</span>
  </button>
<ul class="team-wrapper">
${markupTeamCard}
</ul>
</div>`;
const container = document.querySelector('.developers');
console.log(container);
container.addEventListener('click', openModal);

const modal = basicLightbox.create(markupModal);

function openModal(e) {
  e.preventDefault();
  showConfetti();
  modal.show();
  const body = document.querySelector('body');
  body.classList.add('bg-scrolling-element-when-modal-open');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeModalHandler);
  const backdrop = document.querySelector('.basicLightbox');
  backdrop.addEventListener('click', closeBackdrop);

  function closeModal(e) {
    modal.close();
    body.classList.remove('bg-scrolling-element-when-modal-open');
    closeModalBtn.removeEventListener('click', closeModal);
  }

  function closeModalHandler(e) {
    if (e.key === 'Escape') {
      modal.close();
      body.classList.remove('bg-scrolling-element-when-modal-open');
      window.removeEventListener('keydown', closeModalHandler);
    }
  }

  function closeBackdrop(e) {
    if (e.target === backdrop) {
      modal.close();
      body.classList.remove('bg-scrolling-element-when-modal-open');
      backdrop.removeEventListener('click', closeBackdrop);
    }
  }
}
