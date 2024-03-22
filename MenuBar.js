const menuIcon = document.querySelector('.menu-icon');
const menuBar = document.querySelector('.menuBar ul');


function handleWindowSizeChange() {
  if (window.matchMedia('(max-width: 700px)').matches) {
    menuBar.style.visibility = 'hidden';
  } else {
    menuBar.style.visibility = 'visible';
  }
}

menuIcon.addEventListener('click', () => {
  if (menuBar.style.visibility === 'hidden') {
    menuBar.style.visibility = 'visible';
  } else {
    menuBar.style.visibility = 'hidden';
  }
});

window.addEventListener('resize', handleWindowSizeChange);

handleWindowSizeChange();


