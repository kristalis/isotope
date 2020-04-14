const menu = () => {
  const toggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation__list');

  const toggleMenu = () => { 
    toggle.classList.toggle('toggle--open');
    navigation.classList.toggle('navigation__list--open');
  }

  toggle.addEventListener('click', toggleMenu);
};

menu();