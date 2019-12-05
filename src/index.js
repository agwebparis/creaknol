// import loadNavMenu from './js/nav-menu';

// window.addEventListener('DOMContentLoaded', (event) => {
//   loadNavMenu();
// });

window.addEventListener('DOMContentLoaded', () => {

  /**
   * Action on the toggle and menu
   */
  const toggle = document.getElementById('menuToggle');
	const nav = document.getElementById('overlayNavbar');

	toggle.addEventListener('click', (event) => {
    event.preventDefault();
    
		if( toggle.classList.contains('open')) {
			toggle.classList.remove('open');
      nav.classList.remove('open');
      
		} else {
			toggle.classList.add('open');
			nav.classList.add('open');
		}
  });
  
});