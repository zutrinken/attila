document
  .querySelector('.hamburger')
  .addEventListener('click', function(event) {
    if (event.target.classList.contains('ri-menu-line')) {
      event.target.classList.add('ri-close-line');
      event.target.classList.remove('ri-menu-line');
    } else {
      event.target.classList.add('ri-menu-line');
      event.target.classList.remove('ri-close-line');
    }

    document.querySelector('.header').classList.toggle('menu-open');
  });