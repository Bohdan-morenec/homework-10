const themeSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const LocalMeaningTheme = localStorage.getItem('Theme');

const fn1 = () => {
  if (themeSwitcherEl.checked) {
    fnAddingTheme(Theme.LIGHT);
    fnDeletingTheme(Theme.DARK);
    fnLocalMeaningTheme(Theme.DARK);
  } else {
    fnAddingTheme(Theme.DARK);
    fnDeletingTheme(Theme.LIGHT);
    fnLocalMeaningTheme(Theme.LIGHT);
  }
};

const fnAddingTheme = theme => {
  bodyEl.classList.remove(theme);
};

const fnDeletingTheme = theme => {
  bodyEl.classList.add(theme);
};

const fnLocalMeaningTheme = theme => {
  localStorage.setItem('Theme', theme);
};

if (LocalMeaningTheme === Theme.LIGHT) {
  bodyEl.classList.add(Theme.LIGHT);
} else if (LocalMeaningTheme === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  themeSwitcherEl.checked = true;
}

themeSwitcherEl.addEventListener('click', fn1);
