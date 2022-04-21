const date = new Date();
const hours = date.getHours();
const minutes =
  date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const time = hours + ':' + minutes;

document.querySelector('.time').innerHTML = time;

const inputScreen = document.querySelector('.screen');
inputScreen.value = '0';

inputScreen.addEventListener('keypress', (e) => {
  e.preventDefault();
});

let freeOperator = false;

function insertOperator(operator) {
  if (freeOperator && inputScreen.value !== '0') {
    inputScreen.value += operator;
    freeOperator = false;
  }
}

document.querySelectorAll('.number').forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    let indexOfDefaultNumber = inputScreen.value.indexOf('0');

    if (target.innerText !== '0' && indexOfDefaultNumber === 0) {
      inputScreen.value = target.innerHTML;
      freeOperator = true;
      return;
    }

    if (
      target.innerText !== '0' &&
      inputScreen.value.length === 2 &&
      indexOfDefaultNumber === 1
    ) {
      inputScreen.value = inputScreen.value.replace('0', target.innerHTML);
      freeOperator = true;
      return;
    }

    if (target.innerText !== '0' && indexOfDefaultNumber === -1) {
      inputScreen.value += target.innerHTML;
      freeOperator = true;
    }
  });
});

document.querySelector('.delete').addEventListener('click', () => {
  if (inputScreen.value.length === 1) {
    inputScreen.value = '0';
    return;
  }

  if (inputScreen.value.length > 1) {
    inputScreen.value = inputScreen.value.slice(0, -1);
  }
});

document.querySelector('.clean').addEventListener('click', () => {
  inputScreen.value = '0';
  freeOperator = true;
});

document.querySelector('.result').addEventListener('click', () => {
  if (inputScreen.value.length > 0) {
    inputScreen.value = eval(inputScreen.value);
  }
});

document.querySelector('.calculator').addEventListener('submit', (e) => {
  e.preventDefault();
});

function setDark() {
  document.documentElement.style.setProperty('--background', '#090909');
  document.documentElement.style.setProperty('--primary-background', '#101010');
  document.documentElement.style.setProperty('--middle-structure', '#aaaa');
  document.documentElement.style.setProperty('--side-structure', '#fff');
  document.documentElement.style.setProperty('--hover', '#fff');
  document.documentElement.style.setProperty('--text-input-color', '#fff');

  document.documentElement.style.setProperty('--toggle-background', '#202020');
  document.documentElement.style.setProperty(
    '--toggle-shadow',
    '6px 6px 8px rgba(40, 40, 40, 0.25), -6px -6px 10px #000, inset -8px -8px 12px rgba(0,0,0,0.7), inset 5px 5px 8px rgba(40,40,40,0.2)'
  );

  document.documentElement.style.setProperty(
    '--first-box-shadow',
    '6px 6px 8px rgba(3, 20, 9, 0.25), -6px -6px 10px #000, inset -8px -8px 12px rgba(0,0,0,0.7), inset 5px 5px 8px rgba(3,20,9,0.2)'
  );

  document.documentElement.style.setProperty(
    '--second-box-shadow',
    '6px 6px 8px 12px 12px 32px rgba(3,20,9,0.25), -10px 10px 15px #000'
  );

  document.documentElement.style.setProperty(
    '--third-box-shadow',
    '4px 4px 8px rgba(3, 20, 9, 0.25), -4px 4px 8px #000'
  );

  document.documentElement.style.setProperty(
    '--fourth-box-shadow',
    '-3px -3px 7px #a0a0a032, 3px 3px 5px rgba(94, 104, 121, 0.417)'
  );
}

function setLight() {
  document.documentElement.style.setProperty('--background', '#eee');
  document.documentElement.style.setProperty('--primary-background', '#e8eaec');
  document.documentElement.style.setProperty('--middle-structure', '#000');
  document.documentElement.style.setProperty('--side-structure', '#000');
  document.documentElement.style.setProperty('--hover', '#000');
  document.documentElement.style.setProperty('--text-input-color', '#000');

  document.documentElement.style.setProperty('--toggle-background', '#e8eaec');
  document.documentElement.style.setProperty(
    '--toggle-shadow',
    '6px 6px 8px rgba(13, 39, 80, 0.25), -6px -6px 10px #fff, inset -8px -8px 12px rgba(255,255,255,0.7), inset 5px 5px 8px rgba(13,39,80,0.2)'
  );

  document.documentElement.style.setProperty(
    '--first-box-shadow',
    '6px 6px 8px rgba(13, 39, 80, 0.25), -6px -6px 10px #fff, inset -8px -8px 12px rgba(255,255,255,0.7), inset 5px 5px 8px rgba(13,39,80,0.2)'
  );

  document.documentElement.style.setProperty(
    '--second-box-shadow',
    '6px 6px 8px 12px 12px 32px rgba(13,39,80,0.25), -10px 10px 15px #fff;'
  );

  document.documentElement.style.setProperty(
    '--third-box-shadow',
    '4px 4px 8px rgba(13, 39, 80, 0.25), -4px 4px 8px #fff'
  );

  document.documentElement.style.setProperty(
    '--fourth-box-shadow',
    '-3px -3px 7px #a0a0a032, 3px 3px 5px rgba(94, 104, 121, 0.417)'
  );
}

function verifyTheme() {
  let button = document.querySelector('.toggleButton');

  if (localStorage.getItem('theme')) {
    switch (localStorage.getItem('theme')) {
      case 'light':
        button.classList.remove('active');
        setLight();
        break;

      case 'dark':
        button.classList.add('active');
        setDark();
        break;

      default:
        break;
    }
  }
}
verifyTheme();

document
  .querySelector('.toggleButton')
  .addEventListener('click', ({ target }) => {
    let bar = document.querySelector('.toggleButton .bar');

    let theme = localStorage.getItem('theme');

    if (target.classList.contains('active')) {
      setLight();
      target.classList.remove('active');
      bar.classList.remove('active');
      JSON.stringify(localStorage.setItem('theme', 'light'));
    } else {
      setDark();
      target.classList.add('active');
      bar.classList.add('active');
      JSON.stringify(localStorage.setItem('theme', 'dark'));
    }
  });
