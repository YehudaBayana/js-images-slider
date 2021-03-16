var mainContainer = document.getElementById('main-container');
var imagesContainer = document.getElementById('images-container');
var smallImagesContainer = document.getElementById('images-container1');
var amountOfImages = imagesContainer.childElementCount;
var booli = 0;
var counter = 1;
var size = mainContainer.clientWidth;
function nextBtn() {
  imagesContainer.style.transform = `translateX(-${size * counter}px)`;
  if (counter >= amountOfImages) {
    counter = 0;
    imagesContainer.style.transform = `translateX(-${size * counter}px)`;
  }
  counter++;
}
function prevBtn() {
  if (counter <= 0) {
    counter = amountOfImages;
    imagesContainer.style.transform = `translateX(-${counter}px)`;
  }
  counter--;
  imagesContainer.style.transform = `translateX(-${size * counter}px)`;
}
var autoSlide;
function animationBtnOn() {
  if (booli <= 0) {
    autoSlide = window.setInterval(nextBtn, 4000);
  }
  booli++;
}
function animationBtnOff() {
  clearInterval(autoSlide);
  booli = 0;
}

function transitionBtn() {
  if (booli % 2 == 1) {
    imagesContainer.style.transition = 'all 1s ease';
  } else {
    imagesContainer.style.transition = 'all 0s';
  }
  booli++;
}
var imgChildren = imagesContainer.getElementsByTagName('img');

function showAllImg() {
  smallImagesContainer.style.display = 'flex';
}
for (let i = 0; i < amountOfImages; i++) {
  var newImg = document.createElement('img');
  var show = imgChildren[i].src;
  newImg.src = show;
  smallImagesContainer.appendChild(newImg);
  newImg.onclick = function () {
    imagesContainer.style.transform = `translateX(-${size * i}px)`;
  };
}

var title = [
  'תמונה 1',
  '2 תמונה',
  '3 תמונה',
  '4 תמונה',
  '5 תמונה',
  '6 תמונה',
  '7 תמונה',
  '8 תמונה',
  '9 תמונה',
];
var text;
var pTag;
var count = 0;
for (let i = 0; i < title.length; i++) {
  imagesContainer.innerHTML += `<p>${title[i]}</p>`;
  pTag = document.getElementsByTagName('p')[i];
  pTag.style.transform = `translateX(${size * count}px)`;
  count++;
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var mixBtn = document.getElementById('mix');
mixBtn.addEventListener('click', () => console.log(shuffle(imgChildren)));
