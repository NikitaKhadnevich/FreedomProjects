
window.onload = function () {

let areainput = document.getElementById('areainput'); /*Создаем Инпут*/
let button = document.getElementById('button'); /*Создаем кнопку*/
// let alerting = document.getElementById('alerting');  	/*Создаем Сообщение*/		
let list = document.getElementById('list');  /*Создаем UL*/
let searchInput = document.getElementById('filter') /*Создаем фильтр инпут*/
let newArray = JSON.parse(localStorage.getItem("newArray")) || [];;	/*Создаем Массив*/

	const getMyDate = function () {
		let d = new Date();
		let a = (`${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`);
		let b = (`${d.getHours()}:${d.getMinutes()}`);
		return {
			value: +d,
			label: `${a} ${b}`
		};
	}

	function handleClick() {
		let newTodo = {
			todo: areainput.value, 	/*Создаём ОБЪЕКТ, как объект массива*/
			createdAt: getMyDate(),
		}						/*Заполняем все Вэлью инпута в переменную*/
		newArray.push(newTodo); /*Пушим в массив*/
		// localStorage.setItem("newArray)", JSON.stringify(newArray));
		render(newArray);  		/*Рендерим массив*/
		console.log(newArray)
	}
	button.addEventListener('click', handleClick);

	const render = (data = newArray) => {
		const items = data.reduce((str, item, i) => {
			/*Данным методом мы преобразуем в строку каждый итый элемент массива, как цикл фор, только item*/
			return (str + `<li class="myLi">
              <p id="todoin">${item?.todo}</p>
              <p id="tododate">${item?.createdAt.label}</p> 
			<div><p id='delete' data-num=${i}>X</p></div></li>`);
			/*Даем указание ПОСЧИТАй, или правильнее выведи результат инструкции items - элемент массива в строковом виде  */
			/*Преобразуем, путем добавлеия LI в объект, который innerHTML будет выводить как Li в верстке, где item - элемент массива newArray, i - его номер в data*/
			/*Добавляем строчный элемент span - для создания копки удалить туду*/
		}, '');
		list.innerHTML = items;/*Добавляем в верстку(скармливам innerHTML) Результат return и получаем li здорового человека*/
	}

const sortBy = function (val) {
	switch (val) {
		case "name":
			newArray.sort((a,b) => {
				if (a.todo > b.todo) {
					return 1
				} else if (a.todo < b.todo) {
					return -1;
				} else return 0;
			});
			break;
		case "date":
			newArray.sort((a,b) => {
				if(a.createdAt.value > b.createdAt.value) {
					return 1
				} else if (a.createdAt.value < b.createdAt.value) {
					return -1
				} else return 0;
			});
			break;
		}
	render();
}

sort.onchange = function (e) {
	sortBy(e.target.value);
};

searchInput.addEventListener('input',/* Создаем действие для поля инпут */
function (e) { /* Действием является функция */
	let inputValue = e.target.value;  /* е таргет - ЗНАЧЕНИЕ того, что введено в ПОЛЕ */
	let filteredData = newArray.filter ( /* Функция фильтр отфильтровывает МАССИВ */
		function (item) {
			return item.todo.includes(inputValue) /* Условие фильтра - показать ВСЕ, что содержит Е таргет ( то есть то, что есть в поле поиска) */
		}
	)
	render(filteredData); /* Самое главное - перерендерим визуал ВЕСЬ */
	/* Убираем ране  отрендереный масив */
});

const handleDelete = function (e) {
	if (e.target.id === 'delete') {
		newArray.splice(e.target.dataset.num, 1)
		render(newArray)
	}
}
list.addEventListener('click', handleDelete);






render()
newArray.length = 0;
}



