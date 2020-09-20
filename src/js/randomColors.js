import colors from './colors.js';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
  buttons: document.getElementsByTagName('button'),
};

let colorId = null;
let isActive = false;

refs.startBtn.addEventListener('click', changeColorHandler);
refs.stopBtn.addEventListener('click', stopChangingHandler);

function changeColorHandler() {
  if (isActive) {
    return;
  }
  isActive = true;

  colorId = setInterval(() => {
    return runRandomColor();
  }, 1000);
}

function stopChangingHandler() {
  clearInterval(colorId);
  colorId = null;
  isActive = false;
}

function runRandomColor() {
  const currentColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[currentColor];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
