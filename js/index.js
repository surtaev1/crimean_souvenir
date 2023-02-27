
// АКТИВАЦИЯ МЕНЮ БУРГЕР

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {

  iconMenu.addEventListener("click", function(e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle ('_active');
  });
}

// ПЕРЕНОС SOCIAL
const social = document.querySelector('.social');
const socialMenu = document.querySelector('.social__list');
const screen = window.matchMedia("(max-width:767px)");
if(screen.matches) {
  menuBody.append(socialMenu);
}
else {
  social.prepend(socialMenu);
}

// СЛАЙДЕР

let i = 1;
    for(let li of reviews__slider.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* конфигурация */
    let width = 410; // ширина картинки
    let count = 2; // видимое количество изображений

    let list = reviews__slider.querySelector('ul');
    let listElems = reviews__slider.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    reviews__slider.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    reviews__slider.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };




