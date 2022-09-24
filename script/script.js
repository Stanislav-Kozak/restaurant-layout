const burger = document.querySelector('.burger');
const dropdown_menu = document.querySelector('#dropdown-menu');
(function () {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active')
    dropdown_menu.classList.toggle('dropdown-menu--show')
  })
}());

(function () {
  const icon_close = document.querySelector('#dropdown-close');
  icon_close.addEventListener('click', () => {
    burger.classList.toggle('burger-active')
    dropdown_menu.classList.toggle('dropdown-menu--show')
  })
}())
