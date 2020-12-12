import './styles.css';

import colors from './js/colors';
import { randomIntegerFromInterval } from './js/function-random';

const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

btnStart.addEventListener('click', onbtnStartClick);
btnStop.addEventListener('click', onbtnStop);

let timerId = null;

function onbtnStartClick(event) {
  event.target.disabled = true;
  event.target.classList.add('disabled');
  timerId = setInterval(randomColor, 1000);
}

function onbtnStop() {
  //   body.style.backgroundColor = '';
  btnStart.disabled = false;
  btnStart.classList.remove('disabled');
  clearInterval(timerId);
}

function randomColor() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  body.style.backgroundColor = color;
}
