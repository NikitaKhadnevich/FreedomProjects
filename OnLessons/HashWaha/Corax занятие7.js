
/*По сути что приисходит*/
/*1.Нажимаем на элемент ссылку эбаут из его нейма(после проверок) улетает значенеи в хэш,
2. Вызывыем функцию рендера с условием: если значение хэша без # Равно полю Нэйм, т озаписать в верстку иннер */ 

window.onload = function () {


const nav = document.getElementById('nav')
const twoblock = document.getElementById('twoblock'); /*Задаю харды HTML*/


nav.addEventListener('click', handleClick); /*Приклике на всему NAV выводить функцию*/
function handleClick(e) {
	if (e.target.tagName !== 'A') {
		return; 	/*Если я кликаю на Элемент НЕ содержащий А, то ничего не делать*/
	}
	e.preventDefault(); /*В ином случае 1.Останавливаем стандартное поведение браузера*/
	window.location.hash = e.target.name; /*2. Присваеваем ХЭШУ ИМЯ ССЫЛКИ*/
}


window.addEventListener('hashchange' , onHashChange);/*Юзаю вывод ХЭША*/
function onHashChange () {
	render(); 		/*Эта функция будет перерисовывать новые данные, запуская RENDER*/
}


function render () { /*Вот и сама функция*/
	const hash = window.location.hash.slice(1); /*1. Задаем константу значению Самого хэша, начиная со 2 символа
	т.е. убираем #*/

	switch (hash) {
		case 'About':
		 	return (twoblock.innerHTML = getAbout());
		case 'Project':
		 	twoblock.innerHTML = getHome()
		 	return createInitSlider();
		case 'MyOS':
		 	return (twoblock.innerHTML = getMyOS());
		default:
		 	return (twoblock.innerHTML = getError());
	}

	function getAbout() {
		return 	`<div class="about"><img src="Corax.jpg">
		 			<div id="infText">
			 			<p>Статус: Примарх легиона Чёрного Ворона</p>
			 			<p>Родной мир: Освобождение</p>
			 			<p>Возраст: Тысячи лет, точно неизветно</p>
		 			</div>
		 		</div>`
	}

	function getMyOS() {
		const appVersion = navigator.appVersion;
		const userAgent = navigator.userAgent;
		const platform = navigator.platform;
		return `<div id="MyOsInf">
		 			<p><q> Version</q>: ${appVersion}</p>
		 			<p><q> User Agent</q>: ${userAgent}</p>
		 			<p><q> platform</q>: ${platform}</p>
		 		</div>`	
	}

	function getError() {
		return '<p>ERROR</p>';
	}

	function getHome() {
		return `<div id="slideProj">
		            <button id="decrementCount">-</button>
		  			<div id="myImg"></div>
		 			<button id="incrementCount">+</button>
		 		</div>`;
		 	}
}	 		
render()


function createInitSlider() {
	const incrCount = document.getElementById('incrementCount');
   const decrCount = document.getElementById('decrementCount');

	incrCount.addEventListener('click', incrementCount);
	decrCount.addEventListener('click', decrementCount);

	const pic = ["Angron.jpg", "Sangviniy.jpg", "Leman.jpg"];
	let count = 0;

	function incrementCount() {
		console.log(pic[count]);
		if (count === pic.length-1) {
			return;
		}
		count++;
		return renderCount(count);
	}

	function decrementCount() {
		console.log(pic[count])
		if (count === 0) {
			return;
		}
		count--;
		return renderCount(count);
	}

	function renderCount(count) {
	  const mySlide = pic[count];
	  const img = `<img src="${mySlide}">`
	  const myImg = document.getElementById('myImg');
	  myImg.innerHTML = img;
	}
}

}