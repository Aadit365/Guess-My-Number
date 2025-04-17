'use strict';

let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When guess is correct
  if (guess === number) {
    document.querySelector('.message').textContent =
      '🎉 Wohoo! Correct Number!🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';

    // When guess is higher than the actual no
  } else if (guess > number && guess <= 20 && score > 0) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;
    document.querySelector('.score').textContent = score;

    // When guess is lower than the actual no
  } else if (guess < number && guess >= 1 && score > 0) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;

    // When user gives no input
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    // When game is lost
  } else if (score < 1) {
    document.querySelector('.message').textContent = '🚨 Game Lost!🚨';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#ff0000';

    // When guess is out of 1-20 range
  } else {
    document.querySelector('.message').textContent = '🚫 Invalid Number!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (highscore < score) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }

  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
