// Array de palabras
const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea',
    'aeroplane', 'peppers', 'unlimited', 'arcadium', 'love',
    'getaway', 'stadium', 'quixoticelixer', 'quarter', 'snow',
    'dylan', 'zephyr', 'funky', 'chili',
    'mario', 'zelda', 'metroid', 'halo', 'minecraft', 'fortnite',
    'overwatch', 'apex', 'valorant', 'cyberpunk', 'witcher', 
    'skyrim', 'fallout', 'bioshock', 'portal', 'doom', 'quake', 
    'half-life', 'sims', 'diablo', 'starcraft', 'warcraft', 'league', 
    'dota', 'tetris', 'pacman', 'galaga', 'sonic', 'megaman', 
    'streetfighter', 'mortal', 'kombat', 'assassin', 'creed', 
    'dark', 'souls', 'bloodborne', 'elden', 'ring', 'persona', 
    'kingdom', 'hearts', 'final', 'fantasy', 'dragon', 'quest', 
    'earthbound', 'smash', 'brothers', 'animal', 'crossing', 'splatoon', 
    'fifa', 'nba', 'madden', 'forza', 'gran', 'turismo', 'need', 
    'speed', 'far', 'cry', 'tomb', 'raider', 'uncharted', 'red', 
    'dead', 'gta', 'call', 'duty', 'battlefield', 'destiny', 'mass', 
    'effect', 'borderlands', 'deus', 'ex', 'fortress', 'left', 'dead', 
    'metal', 'gear', 'solid', 'resident', 'evil', 'silent', 'hill', 
    'dead', 'rising', 'devil', 'may', 'cry', 'god', 'war', 'yakuza', 
    'shenmue', 'sekiro', 'ghost', 'tsushima', 'katana', 'zero', 'undertale', 
    'hollow', 'knight', 'celeste', 'ori', 'blind', 'forest', 'cuphead', 
    'hades', 'bastion', 'transistor', 'inside', 'limbo', 'journey', 'flower', 
    'shadow', 'colossus', 'ico', 'last', 'guardian', 'ffxiv', 'wow', 
    'ffvii', 'rpg', 'action', 'adventure', 'strategy', 'shooter', 
    'sandbox', 'survival', 'horror', 'puzzle', 'platformer', 'indie'
  ];
  
  
  // Referencias a elementos del DOM
  const randomWord = document.getElementById('randomWord');
  const textInput = document.getElementById('text');
  const timeSpan = document.getElementById('timeSpan');
  const scoreSpan = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');
  
  // Variables del juego
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  let timeInterval;
  
  // Función que selecciona una palabra random del array
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Función que añade una palabra al DOM
  function addToDOM() {
    palabraAleatoria = randomWords();
    randomWord.innerText = palabraAleatoria;
  }
  
  // Función que inicia el temporizador
  function startTimer() {
    timeInterval = setInterval(actualizarTiempo, 1000);
  }
  
  // Función que maneja el fin del juego
  function endGame() {
    endGameContainer.innerHTML = `
      <h1>Tiempo agotado!</h1>
      <p>Tu puntaje final es ${score}</p>
      <button onclick="window.location.reload()">Reiniciar</button>
    `;
    endGameContainer.style.display = 'block';
  }
  
  // Función que actualiza el tiempo
  function actualizarTiempo() {
    time--;
    timeSpan.innerText = `${time}s`;
  
    if (time === 0) {
      clearInterval(timeInterval);
      endGame();
    }
  }
  
  // Función que inicia el juego
  function startGame() {
    score = 0;
    time = 10;
    textInput.value = '';
    scoreSpan.innerText = score;
    timeSpan.innerText = `${time}s`;
    addToDOM();
    startTimer();
  }
  
  // Evento que escucha la entrada de texto del usuario
  textInput.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
  
    if (palabraIngresada === palabraAleatoria) {
      time += 3;
      e.target.value = '';
      addToDOM();
      updateScore();
    }
  });
  
  // Función que actualiza el puntaje
  function updateScore() {
    score++;
    scoreSpan.innerText = score;
  }
  
  // Iniciar el juego al cargar la página
  startGame();
  