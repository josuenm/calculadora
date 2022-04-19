const date = new Date();
const hours = date.getHours();
const minutes =
  date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const time = hours + ':' + minutes;

document.querySelector('.time').innerHTML = time;

const inputScreen = document.querySelector('.screen');

inputScreen.addEventListener('keypress', (e) => {
  if (/^[a-zA-Z]+$/.test(e.key)) {
    e.preventDefault();
  }
});

function handleSubmit(e) {
  e.preventDefault();
}

function insertValue(value) {
  inputScreen.value += value;
}

function deleteValue() {
  inputScreen.value = inputScreen.value.slice(0, -1);
}

function clean() {
  inputScreen.value = '';
}

function result() {
  if (inputScreen.value.length > 0) {
    inputScreen.value = eval(inputScreen.value);
  }
}

function setDark() {
  document.documentElement.style.setProperty('--background', '#121212');
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
  document.documentElement.style.setProperty('--hover', '#fff');
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

document
  .querySelector('.toggleButton')
  .addEventListener('click', ({ target }) => {
    let bar = document.querySelector('.toggleButton .bar');

    let theme = JSON.parse(localStorage.getItem('theme'));

    if (target.classList.contains('active')) {
      setLight();
      target.classList.remove('active');
      bar.classList.remove('active');
      JSON.stringify(localStorage.setItem('theme', false));
    } else {
      setDark();
      target.classList.add('active');
      bar.classList.add('active');
      JSON.stringify(localStorage.setItem('theme', true));
    }
  });
