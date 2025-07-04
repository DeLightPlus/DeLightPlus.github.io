document.addEventListener('DOMContentLoaded', function () {
  const games = [
    {
      name: 'Memory Game',
      description: 'Test your memory with this classic card-matching game.',
      url: 'memory-game/index.html', 
      thumbnail: 'memory-game/thumbnail.jpg',     
      available: true
    },
    {
      name: 'Terminal Tower',
      description: 'Stack blocks and reach new heights in this Tetris-inspired game.',
      url: 'terminal-tower/index.html',
      thumbnail: 'terminal-tower/thumbnail.jpg',
      available: true
    },
    {
      name: 'Snake',
      description: 'Classic Snake game. Eat, grow, and avoid your own tail!',
      url: 'snake/index.html',
      thumbnail: 'snake/thumbnail.jpg',
      available: true
    },    
    {
      name: 'Block Puzzle',
      description: 'Place blocks, clear lines, and try Classic or Survival mode!',
      url: 'block-puzzle/index.html',
      thumbnail: 'block-puzzle/thumbnail.jpg',
      available: true
    },
    {
      name: '2048',
      description: 'Join the numbers and get to the 2048 tile!',
      url: '#',
      thumbnail: '2048/thumbnail.png',
      available: false
    },
    {
      name: 'Minesweeper',
      description: 'Uncover all the safe squares without detonating a mine.',
      url: '#',
      thumbnail: 'minesweeper/thumbnail.png',
      available: false
    },
    {
      name: 'Flappy Bird',
      description: 'Guide the bird through pipes and beat your high score.',
      url: '#',
      thumbnail: 'flappy-bird/thumbnail.png',
      available: false
    }
  ];

  const selector = document.querySelector('.game-selector');
  selector.innerHTML = '';

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card' + (game.available ? '' : ' disabled');

    // Media column: thumbnail + button
    const media = document.createElement('div');
    media.className = 'game-card-media';

    const img = document.createElement('img');
    img.className = 'game-thumb';
    img.src = game.thumbnail;
    img.alt = `${game.name} thumbnail`;
    media.appendChild(img);

    const btn = document.createElement('button');
    btn.textContent = game.available ? 'Play' : 'Coming Soon';
    if (game.available) {
      btn.onclick = () => window.location.href = game.url;
    } else {
      btn.disabled = true;
    }
    media.appendChild(btn);

    // Content column
    const content = document.createElement('div');
    content.className = 'game-card-content';

    const title = document.createElement('h2');
    title.textContent = game.name;
    content.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = game.description;
    content.appendChild(desc);

    card.appendChild(media);
    card.appendChild(content);
    selector.appendChild(card);
  });
});