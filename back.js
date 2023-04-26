const button = document.querySelector('.cool-button');
const button1 = document.querySelector('.minus-button');
const button2 = document.querySelector('.minus-button2');
const button3 = document.querySelector('.minus-button3');
const head = document.querySelector('.headshot');
const body = document.querySelector('.body')
const scorecount = document.querySelector('.score');
const color = document.querySelector('.cool-button')
const audio = new Audio("C:/Users/asafr/Desktop/learning html/js/cash.mp3");
const audio1 = new Audio("C:/Users/asafr/Desktop/learning html/js/money.mp3");
let score = 0 

button.addEventListener('click', function() {
    score++;
    scorecount.textContent = score;
    button.style.background = getRandomColor()
    audio.play();
    moveButton();
});

button1.addEventListener('click', function() {
    score--;
    scorecount.textContent = score;
    button1.style.background = getRandomColor()
    audio1.play()
    moveButton1()
});

head.addEventListener('click', function() {
    score -= 2;
    scorecount.textContent = score;
});

body.addEventListener('click', function() {
    score--;
    scorecount.textContent = score;
});

button2.addEventListener('click', function() {
    if (head.classList.contains('clicked')) {
        score -= 2;
    } else if (body.classList.contains('clicked')) {
        score--;
    }
    scorecount.textContent = score;
    button2.style.background = getRandomColor();
    audio1.play();
    moveButton2();
});



button3.addEventListener('click', function() {
    score--;
    scorecount.textContent = score;
    button1.style.background = getRandomColor()
    audio1.play()
    moveButton3()
});

function getRandomPosition(max, buttonSize) {
    return Math.floor(Math.random() * (max - buttonSize * 2)) + buttonSize;
  }
  
function getRandomPosition(max, button1Size) {
    return Math.floor(Math.random() * (max - button1Size * 2)) + button1Size;
  }

function getRandomPosition(max, button2Size) {
    return Math.floor(Math.random() * (max - button2Size * 2)) + button2Size;
  }

function getRandomPosition(max, button3Size) {
    return Math.floor(Math.random() * (max - button3Size * 2)) + button3Size;
  }
  
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function moveButton() {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const randomLeft = getRandomPosition(window.innerWidth - buttonWidth, buttonWidth);
    const randomTop = getRandomPosition(window.innerHeight - buttonHeight, buttonHeight);
  
    button.style.top = (randomTop / window.innerHeight) * 1300 + '%';
    button.style.left = (randomLeft / window.innerWidth) * 1300 + '%';
    button.style.backgroundColor = getRandomColor();

  }
  
  function moveButton1() {
    const button1Width = button1.offsetWidth;
    const button1Height = button1.offsetHeight;
    const randomLeft = getRandomPosition(window.innerWidth - button1Width, button1Width);
    const randomTop = getRandomPosition(window.innerHeight - button1Height, button1Height);
  
    button1.style.top = (randomTop / window.innerHeight) * 1300 + '%';
    button1.style.left = (randomLeft / window.innerWidth) * 1300 + '%';
    button1.style.backgroundColor = getRandomColor();

  }

  function moveButton2() {
    const button2Width = button2.offsetWidth;
    const button2Height = button2.offsetHeight;
    const randomLeft = getRandomPosition(window.innerWidth - button2Width, button2Width);
    const randomTop = getRandomPosition(window.innerHeight - button2Height, button2Height);
  
    button2.style.top = (randomTop / window.innerHeight) * 1300 + '%';
    button2.style.left = (randomLeft / window.innerWidth) * 1300 + '%';
    button2.style.backgroundColor = getRandomColor();

  }

  function moveButton3() {
    const button3Width = button3.offsetWidth;
    const button3Height = button3.offsetHeight;
    const randomLeft = getRandomPosition(window.innerWidth - button3Width, button3Width);
    const randomTop = getRandomPosition(window.innerHeight - button3Height, button3Height);
  
    button3.style.top = (randomTop / window.innerHeight) * 900 + '%';
    button3.style.left = (randomLeft / window.innerWidth) * -900 + '%';
    button3.style.backgroundColor = getRandomColor();

  }

setInterval(moveButton, 1000); 
setInterval(moveButton1, 1000); 
setInterval(moveButton2, 1000);
setInterval(moveButton3, 1000); 


const spaceBackground = document.querySelector('.space-background');
const starDensity = 750; 
const maxStarSize = 8.5; 
const starSpeed = 0.145; 
const cursor = { x: 0, y: 0 }; 


function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}


function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = `${Math.random() * 2.3}px`;
  star.style.height = star.style.width;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const maxLeft = screenWidth - parseFloat(star.style.width);
  const maxTop = screenHeight - parseFloat(star.style.height);
  star.style.left = `${Math.random() * maxLeft}px`;
  star.style.top = `${Math.random() * maxTop}px`;
  spaceBackground.appendChild(star);
  
}


for (let i = 0; i < starDensity; i++) {
  createStar();
}

document.addEventListener('mousemove', function (e) {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});




function updateStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star) => {
    const x = parseInt(star.style.left);
    const y = parseInt(star.style.top);
    const d = distance(x, y, cursor.x, cursor.y); 
    if (d < 100) { 
      const dx = (x - cursor.x) / d * starSpeed;
      const dy = (y - cursor.y) / d * starSpeed;
      star.style.left = `${x + dx}px`;
      star.style.top = `${y + dy}px`;
    }
  });
  requestAnimationFrame(updateStars);
}

requestAnimationFrame(updateStars);
