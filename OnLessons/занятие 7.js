

window.getEventListener('hashchange' , onHashChange);
navigation.getEventListener('click', handleClick);

let twoblock = document.getElementById('twoblock');

const handleClick = (e) => {
	if (e.target.tagName !== 'A') {
		return;
	}
	e.preventDefault();
	window.location.hash = e.target.name;
}

function onHashChange () {
	render();
}

function render () {
	const hash = window.location.hash.slice(1);

	switch (hash) {
		case 'about':
		 	return (twoblock.innerHTML = '<p>ABOUT</p>');
		case 'project':
		 	return (twoblock.innerHTML = '<p>PROJECT</p>');
		case 'myOS':
		 	return (twoblock.innerHTML = '<p>MYOS</p>');
	}
}



