const loadNavMenu = () => {

	const toggle = document.getElementById('menuToggle');
	const nav = document.getElementById('navMenu');

	toggle.addEventListener('click', (e)=> {
    e.preventDefault();
    
		if( toggle.classList.contains('open')) {
			toggle.classList.remove('open');
            nav.classList.remove('open');
      
		} else {
			toggle.classList.add('open');
			nav.classList.add('open');
		}
	});
}

export default loadNavMenu;


