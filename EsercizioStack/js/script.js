const slider = document.getElementById('count-slider');
const sliderVal = document.getElementById('slider-val');
const resultsBalls = document.getElementById('results-balls');
const numbersGrid = document.getElementById('numbers-grid');

let extracted = [];

function buildGrid() {
  numbersGrid.innerHTML = '';
  for (let i = 1; i <= 90; i++) {
    const cell = document.createElement('div');
    cell.className = 'num-cell' + (extracted.includes(i) ? ' extracted' : '');
    cell.id = 'cell-' + i;
    cell.textContent = i;
    numbersGrid.appendChild(cell);
  }
}

function draw() {
  const count = parseInt(slider.value);
  const pool = Array.from({ length: 90 }, (_, i) => i + 1);

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  extracted = pool.slice(0, count).sort((a, b) => a - b);

  resultsBalls.innerHTML = '';

  extracted.forEach((num, idx) => {
    setTimeout(() => {
      const ball = document.createElement('div');
      ball.className = 'ball-result';
      ball.textContent = num;
      resultsBalls.appendChild(ball);

      const cell = document.getElementById('cell-' + num);
      if (cell) cell.classList.add('extracted');
    }, idx * 180);
  });
}

function reset() {
  extracted = [];
  resultsBalls.innerHTML = '<span class="placeholder-text">I numeri estratti appariranno qui…</span>';
  buildGrid();
}

slider.addEventListener('input', () => {
  sliderVal.textContent = slider.value;
});

buildGrid();
reset();