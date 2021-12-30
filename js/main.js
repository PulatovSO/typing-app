
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let fieldWrap = document.querySelector('.input-field-wrap');
let field = document.querySelector('.input-field');
let timer = document.querySelector('.timer');
let words = document.querySelector('.words');
let startWrap = document.querySelector('.start-wrap');
let startBtn = document.querySelector('.start');
let resultWrap = document.querySelector('.result-wrap');
let result = document.querySelector('.result');
let againBtn = document.querySelector('.again');
let count = 0;

let sound = new Audio();
sound.src = '../media/click2.mp3';
let sound2 = new Audio();
sound2.src = '../media/click3.mp3';

body.addEventListener('keydown', (e) => {
  e.keyCode == '81' ? (sound.play(), field.textContent += 'q') : false;
  e.keyCode == '87' ? (sound.play(), field.textContent += 'w') : false;
  e.keyCode == '69' ? (sound.play(), field.textContent += 'e') : false;
  e.keyCode == '82' ? (sound.play(), field.textContent += 'r') : false;
  e.keyCode == '84' ? (sound.play(), field.textContent += 't') : false;
  e.keyCode == '89' ? (sound.play(), field.textContent += 'y') : false;
  e.keyCode == '85' ? (sound.play(), field.textContent += 'u') : false;
  e.keyCode == '73' ? (sound.play(), field.textContent += 'i') : false;
  e.keyCode == '79' ? (sound.play(), field.textContent += 'o') : false;
  e.keyCode == '80' ? (sound.play(), field.textContent += 'p') : false;
  e.keyCode == '65' ? (sound.play(), field.textContent += 'a') : false;
  e.keyCode == '83' ? (sound.play(), field.textContent += 's') : false;
  e.keyCode == '68' ? (sound.play(), field.textContent += 'd') : false;
  e.keyCode == '70' ? (sound.play(), field.textContent += 'f') : false;
  e.keyCode == '71' ? (sound.play(), field.textContent += 'g') : false;
  e.keyCode == '72' ? (sound.play(), field.textContent += 'h') : false;
  e.keyCode == '74' ? (sound.play(), field.textContent += 'j') : false;
  e.keyCode == '75' ? (sound.play(), field.textContent += 'k') : false;
  e.keyCode == '76' ? (sound.play(), field.textContent += 'l') : false;
  e.keyCode == '90' ? (sound.play(), field.textContent += 'z') : false;
  e.keyCode == '88' ? (sound.play(), field.textContent += 'x') : false;
  e.keyCode == '67' ? (sound.play(), field.textContent += 'c') : false;
  e.keyCode == '86' ? (sound.play(), field.textContent += 'v') : false;
  e.keyCode == '66' ? (sound.play(), field.textContent += 'b') : false;
  e.keyCode == '78' ? (sound.play(), field.textContent += 'n') : false;
  e.keyCode == '77' ? (sound.play(), field.textContent += 'm') : false;

  e.keyCode == '188' ? (sound.play(), field.textContent += ', ') : false;
  e.keyCode == '190' ? (sound.play(), field.textContent += '. ') : false;
  e.keyCode == '186' ? (sound.play(), field.textContent += '; ') : false;
  e.keyCode == '222' ? (sound.play(), field.textContent += '"') : false;

  if (e.keyCode == '32') {
    sound2.play(); 
    field.textContent += ' ';
    field.style.paddingRight = `20px`;
    let text = field.textContent;
    for (let i = 0; i < text.length; i++) {
      if (i == ' ') {
        count++
      }
    }
    words.textContent = count;
  }

  if (e.keyCode != '32') field.style.paddingRight = `0px`;

  if (e.keyCode == '8') {
    sound2.play(); 
    field.textContent = field.textContent.slice(0, -1);
    let text = field.textContent;
    if (text.slice(-1) == ' ') document.querySelector('.words').textContent--;
    if (text <= 0) {
      words.textContent = 0;
      count = 0;
    }
  }
})


startBtn.addEventListener('click', (e) => {
  startWrap.style.display = 'none';
  wrapper.style.display = 'block';

  let count = 30;
  let myTimer = setInterval(() => {
    if (count == 10){
      fieldWrap.classList.add('animate');
    }
    if (count == 0) {
      clearInterval(myTimer);
      wrapper.style.display = 'none';
      resultWrap.style.display = 'block';
      result.textContent = `Your score: ${document.querySelector('.words').textContent}`;
    }
    timer.textContent = count;
    count--;
  }, 1000)
})

againBtn.addEventListener('click', () => {
  resultWrap.style.display = 'none';
  wrapper.style.display = 'block';
  fieldWrap.classList.remove('animate');
  count = 0;
  words.textContent = count;
  field.textContent = '';

  let timeCount = 30;
  let myTimer = setInterval(() => {
    if (timeCount == 10){
      fieldWrap.classList.add('animate');
    }
    if (timeCount == 0) {
      clearInterval(myTimer);
      wrapper.style.display = 'none';
      resultWrap.style.display = 'block';
      result.textContent = `Your score: ${document.querySelector('.words').textContent}`;
    }
    timer.textContent = timeCount;
    timeCount--;
  }, 1000)
})
