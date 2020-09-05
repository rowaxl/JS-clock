const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90;

  if (secondDegrees === 90) {
    secondHand.classList.remove('move');
  } else {
    secondHand.classList.add('move');
  }

  if (minDegrees === 90) {
    minHand.classList.remove('move');
  } else {
    minHand.classList.add('move');
  }

  if (hourDegrees === 90) {
    hourHand.classList.remove('move');
  } else {
    hourHand.classList.add('move');
  }

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);