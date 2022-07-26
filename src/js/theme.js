import getRefs from './getRefs';
const changeBtn = document.getElementById('change-theme-btn');

function setDarkTheme() {
  getRefs().body.classList.add('dark');
  changeBtn.textContent = '🌙';
  localStorage.setItem('theme', 'dark');
}

function setLightTheme() {
  getRefs().body.classList.remove('dark');
  changeBtn.textContent = '🌞';
  localStorage.setItem('theme', 'light');
}

changeBtn.addEventListener('click', () => {
  if (getRefs().body.classList.contains('dark')) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});

if (localStorage.getItem('theme') === 'dark') {
  setDarkTheme();
}
