function changeSize(newSizeInPercent) {
  document.getElementById('navMenu').style.width = parseInt(newSizeInPercent) + '%';
}

function openNav() {
  changeSize(100);
}

function closeNav() {
  changeSize(0);
}

const loadNavMenu = () => {

  document.getElementById('openNav').addEventListener('click', function() {
    openNav();
  });

  document.getElementById('closeNav').addEventListener('click', function() {
    closeNav();
  });
};

export default loadNavMenu;
