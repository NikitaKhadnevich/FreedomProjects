// // let x = document.body.firstElementChild
// let z = "2px solid red"
// // x.firstElementChild.style.border = z;
// // x.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.border = z;	
// // x.lastElementChild.style.border = z;

// let quars = document.getElementsByClassName( "quar" ); // находим элементы с классом block
// 	 for( let i = 0; i < quars.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
// 	    quars[4].style.border = z
//  		quars[0].style.border = z
//  		quars[8].style.border = z
// 	  }		


// 	// ________________________________________

// let suite = document.querySelectorAll('li a');
//   console.log(suite)
// for (let suit of suite) {
//   console.log(suit)
//   let checked = suit.getAttribute('href');
//   console.log (typeof checked);
//     if (checked.includes('://')) {
//     suit.style.color = 'orange'
//     }
// };
window.onload = function () {

let areainput = document.getElementById('areainput'); /*Создаем Инпут*/
let button = document.getElementById('button'); /*Создаем кнопку*/
let alerting = document.getElementById('alerting');  	/*Создаем Сообщение*/		
let list = document.getElementById('list');  /*Создаем UL*/
let searchInput = document.getElementById('filter') /*Создаем фильтр инпут*/
let newArray = [];	/*Создаем Массив*/

button.addEventListener('click', 
	function handleClick() {
	let newTodo = {
		todo: areainput.value,
		createdAt: new Date(),
		} 						/*Заполняем все Вэлью инпута в переменную*/
	newArray.push(newTodo); /*Пушим в массив*/
	render(newArray); 
	console.log(newArray)
	
});

  const sortBy = (val) => {
    switch (val) {
      case "name":
        newArray.sort((a, b) => {
          if (a > b) {
            return 1;
          } else if (a.todo < b.todo) {
            return -1;
          } else return 0;
        });
        break;
      case "date":
        newArray.sort((a, b) => {
          if (+a.createdAt < +b.createdAt) {
            return 1;
          } else if (+a.createdAt > +b.createdAt) {
            return -1;
          } else return 0;
        });
        break;
    }
    render();
  };

sort.onchange = function (e) {
        sortBy(e.target.value);
        render();
      };

const render = (data = newArray) => {
	const items = data.reduce((str, item, i) => {   /*Данным методом мы преобразуем в строку каждый итый элемент массива, как цикл фор, только item*/
			return (str + `<li class="myLi">
              <p>${item?.todo}</p>
              <p>${item?.createdAt}</p> 
			<div><p id='delete' data-num=${i}>X</p></div></li>`); 
 				/*Даем указание ПОСЧИТАй, или правильнее выведи результат инструкции items - элемент массива в строковом виде  */
 				/*Преобразуем, путем добавлеия LI в объект, который innerHTML будет выводить как Li в верстке, где item - элемент массива newArray, i - его номер в data*/
 				/*Добавляем строчный элемент span - для создания копки удалить туду*/

	}, '');  
	list.innerHTML = items;/*Добавляем в верстку(скармливам innerHTML) Результат return и получаем li здорового человека*/
}

const handleDelete = function (e) {
	if (e.target.id === 'delete') { 
		result = confirm('Вы точно хотите удалить')
		 	if (result === true) {
		 		newArray.splice(e.target.dataset.num, 1);
		 		render(newArray);
		 	}
		 	else {
		 		alert ('Задание еще в списке')
		 	}
		 console.log(e.target.dataset.num)	
	}
}
list.addEventListener('click', 	handleDelete);



let liStyle = list.style;
liStyle.width = '90%';


const handleOnMessage = function (e) {
	if (e.target.id === 'delete') { 
    list.style.color = 'red';
    alerting.style.opacity = '1';;
   }
}
list.addEventListener("mouseover", 	handleOnMessage);

const handleOffMessage = function (e) {
	if (e.target.id === 'delete') { 
    list.style.color = '';
    alerting.style.opacity = '0';
   	}
}
list.addEventListener("mouseout", 	handleOffMessage);


searchInput.addEventListener('input',
function (e) {
    let inputValue = e.target.value;
 	let filteredData = newArray.filter( 
     	function(item) {
        return item.todo.includes(e.target.value);
    }
);
    render(filteredData);
    console.log(filteredData)
  });
render();
}

