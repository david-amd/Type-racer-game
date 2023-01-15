window.addEventListener('load', init);


// Variabile globale

// Niveluri disponibile
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};


// Schimbare nivel
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;


// Elemente DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


// Cuvintele care vor fi afisate
var words = [
  'trandafir',
  'frezie',
  'tort',
  'sirop',
  'perna',
  'suc',
  'carte',
  'casa',
  'televizor',
  'cer',
  'geanta',
  'ceas',
  'oglinda',
  'plaja',
  'vacanta',
  'machiaj',
  'crema',
  'gogosi',
  'telefon',
  'rochie',
  'copil',
  'tatuaj',
  'cantec',
  'film',
  'definitie',
  'campion',
  'fantoma',
  'inel'
];


// Functia care incepe jocul
function init() {
  seconds.innerHTML = currentLevel;

  showWord(words);
  
  wordInput.addEventListener('input', startMatching);
  
  setInterval(countdown, 1000);
  
  setInterval(checkStatus, 50);

  setTimeout(load_more_words(),1000)
}

// Functia care incepe comparatia
function startMatching() {
  if (matchingWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // Pentru scor -1
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}


// Functia compara cuvantul curent cu cel sris de jucator
function matchingWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Corect!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Functia alege un cuvant aleatoriu si il afiseaza
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// Numaratoare inversa
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

// Functia verifica statusul jocului
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Joc încheiat!';
    score = -1;
  }
}

