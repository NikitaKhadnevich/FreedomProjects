let massiver = [4, 2, 5, 19, 13, 0, 10]
console.log(massiver.length)

let massiver = a
let massiver = b

let x = (a,b) => 
 	a * b;
 	alert (x)






// function arraySum(array){
// let sum = 0;
// for(var i = 0; i < array.length; i++){
// sum += array[i];
// }
// console.log(sum);
// }
// arraySum(massiver);













// let maximus = (a,b) => Math.pow(a, b)

// console.log(Math.pow(32, 4));


// let rr = (a, b) =>
// Math.sqrt(a + b)
// console.log(rr(4, 12));



    // // запуск данной функции при загрузке документа
    //    window.onload = function() {
    // // создание нескольких элементов 
    // // в пустой HTML странице
    //    heading = document.createElement("h1");
    //    heading_text = document.createTextNode("Big Head!");
    //    heading.appendChild(heading_text);
    //    document.body.appendChild(heading);
    //   }



// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   umd() {
//   	return this.a / this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
// alert( calculator.umd() );




// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет') :
//   () => alert("Здравствуйте!");

// welcome(); 



// function sayHi() {
//   phrase = "Привет";

//   alert(phrase);

//   var phrase;
// }
// sayHi();


// numbers = [25 , 11, 87, 78, 'smile' , 99, 100]
// let largest = numbers[0];
// let smallest = numbers[0];
// for (let i = 0; i < numbers.length; i++){
//     let temp = numbers[i];
//     if (temp > largest)
//     {
//         largest = numbers[i];
//     }
//     if (temp < smallest)
//     {
//         smallest = numbers[i];
//     }
// }
// alert(largest);
// alert(smallest);


// let x = prompt("x?", '');
// let r = prompt("r?", '');
//  	if (x % r == 0) {
//  		alert ('Точно');
//  	}	
//  	else {
//  		alert ('Ошибка');
//  	}



// let year = prompt ("В каком году появился атмоскрипт?", "");
// if (year < 2015) {
// 	alert( 'рановато' );
// } else if (year > 2015){
// 	alert ("Поздновато");
// } else {
// 	alert ( 'Верно' );
// }

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);
// let text;
// let age = prompt('Vozrast?' , "");
// if (age < 3) {
// 	text = 'molod';
// }
// else if (age < 18){
// 	text = 'vzrosl';
// }
// else if (age < 50) {
// 	text = 'horosh';
// }
// else {
// 	text = 'uvazhaemiy vozrast';}
// alert(text);


// let numbers = prompt('znacheniya 4isla', '');
// if (numbers < 0) {
// 	alert('menshe 0');
// }
// else if (numbers == 0) {
// 	alert('ravno 0');
// }
// else {
// 	alert('bolshe 0');
// }

// let result = prompt('a + b < 4?', '');
// let accessAllowed = (a + b < 4) ? 'Malo' : 'Mnogo';
// alert(accessAllowed);

// let login = prompt('Логин', '');
// let hello = (login =='cotrudni') ? 'privet' :
//             (login == 'desktop') ? 'Zdravstv' :
//             (login == '') ? '' : 'nu i ne nado';
// alert(hello); 

// alert ( -1 && 1);
// alert (null > 0);

// let year = prompt('V kakom&', '');
// if (year == 2015) {
// 	alert('da');}
// else if (year == 2025) {
// 	alert('net');}
// else if (year == 2014) {
// 	let Foorteen = prompt('Ты yt hfd?', '')
// 	if (Foorteen == 'da') {
// 	alert('prinyal');}
// }
// else {
// 	alert('mda heh')
// }

	// let i = 30;
	// while (i !=-4) { // когда i будет равно 0, условие станет ложным, и цикл остановится
	//   alert( i );
	//   i--;
	// }

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// // проходит по значениям
// for (let fru of fruits) {
//   alert( fruits );
// }


// let x = 'Hello world';
// alert (x);

// let y = [' hello' , ' world' , ' !'];
// alert (y[0]+y[1]+y[2]);

// let i = 1;
// do (alert (i), ++i);
// while (i<=49);
// alert (i);



// let browser = prompt ('Какой у тебя браузер?')
//  	if (browser == 'Edge') {
//  		alert ('Youve got Edge');
//  	}
//  	else if (browser == 'Chrome' || 
//  		browser == 'Firefox' || 
//  		browser == 'Safari' || 
//  		browser == 'Opera') {
//  		alert ('Ok we support browsers too');
//  	}
//  	else {
//  		alert ('We hope that this page looks ok');
//  	}

 	// const number = +prompt ('число 0 до 3');
 	// switch (number) {
 	// 	case 0:
 	// 	 	alert('ввели 0');
 	// 	 	break;
 	// 	case 1:
 	// 	 	alert('ввели 1'); 
 	// 	 	break;
 	// 	case 2:
 	// 	 	alert ('ввели 2');
 	// 	 	break;
 	// 	default:
 	// 	 	alert ('неверное значение');	 		
 	// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "Вы согласны." );
// }

// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }

// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);





// function pow(x, n) {
// 	if (x >= 1 && n >= 1) {
// 	return x**n;}
// };
// alert( pow(x, n));


// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }
//   alert( "Вам показывается кино" );
// }

// showMovie(age);




// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }


// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();

// alert( userName );





// let year = prompt('В каком году образовалось Королевство Великобритания?В 1850, 1885, 1922?', '');
// function showFrstQuestion ()
// {prompt('В каком году образовалось Королевство Великобритания?В 1850, 1885, 1922?', '');}



// if (year == 1850) {
// 	let year1 = prompt('Вам Виски затуманили голову?', '');
// 	 	if (year1 == 'Да') {
// 	 		alert('Так.Повторим еще раз');
// 	 	}
//  	 	else if (year1 == 'Нет') {
//  	 		alert ('Тогда странно.Давайте заново');
//  	 	}
//  	 	else {
//  	 		alert ('Не тратим время - заново');
//  	 	}

//  	let yearX = prompt('В каком году образовалось Королевство Великобритания?В 1885, 1922?', ''); 
//  		if (yearX == 1885) {
// 	 		alert('Не верно, но ответ уже очевиден и он 1992');
// 	 	}
//  	 	else if (yearX == 1922) {
//  			alert ('Точно!');	
//         }
// }

// else if (year == 1885) {
// 	let year2 = prompt('Вы не далеки от истины.Дать подсказку (Да/Нет)?', '');
// 		if (year2 == 'Да') {
// 			alert('Ближе к дате октябрьской революции');
// 		}
// 	 	else if (year2 == 'Нет') {
// 		 	alert ('Странно что вы не воспользовались подсказкой')
// 		    let year3 = prompt('Может все же  натолкнуть на мысль,м?(Давай/Нет)?', '');
// 			 	if (year3 == 'Давай') {
// 					alert('Рядышком с датой окончания Первой мировой');
// 			 	}
// 			 	else if (year3 != 'Давай') {
// 				 	alert ('Окей, тгда не будет подсказки')
// 			 	}
//         }
//         else {
//  	 		alert ('Хмм. Сдаетесь без боя');
//  	 	}
//  	let yearX = prompt('В каком году образовалось Королевство Великобритания?В 1850, 1922?', ''); 
//  		if (yearX2 == 1850) {
// 	 		alert('Не верно, но ответ уже очевиден и он 1992');
// 	 	}
//  	 	else if (yearX == 1922) {
//  			alert ('Точно!');	
//         }	
// }        

// else if (year == 1922) {
// 	let year4 = prompt('Совершенно верно!Может вы еще и дату начала Грюндвальской битвы знаете?(Да/Нет)', '');
// 		if (year4 == 'Да') {
//  			let year5 = prompt('И какой ответ?', '');
//  			 	if (year5 == 1410) {
//  			 	 	alert ("Правильно!!!");
//  			 	}	
//  			 	else if (year5 != 1410) {
//  			 	 	alert ('Ошибочка(');
//  			 	 	let year6 = prompt ('А может знаете правителем какого государства был Ягайло?', '')
//  			 	 	 	if (year6 == 'ВКЛ') {
//  			 	 	 		alert ('Верно!Можно засчитать реабилитацию)');
//  			 	 	 	}
//  			 	 	 	else if (year6 != 1) {
//  			 	 	 		alert ('Ответ на этот вопрос носит исключительно тестовый характер)');
//  			 	 	 	}
//  			 	}
// 		}
//  		else if (year4 == 'Нет') {
//  			alert ('Тогда на сегодня вопросов достаточно.Спасибо!');
//  		}
//  		  		else if (year4 == '') {
//  			alert ('Всего хорошего');}
// }
// else {alert ('Видимо ответы на вопросы получу не сегодня');}









// 	// alert('Не отсутпайте.Повторим еще раз');
//  // 	else if (year2 != '')
//  // 	alert ('Это был сарказм.Давайте заново')}


// //  let year = prompt('В каком году образовалось Королевство Великобритания?В 1850, 1922, 1920?', '');
// // if (year == 1850) {
// // 	let year2 = prompt('Виски какого бренда вам так затуманили голову?Может JimBeam или', '');
// // 	if (year2 == '')
// // 	alert('Так.Давайте еще раз');
// //  	else if (year2 != '')
// //  	alert ('Это был сарказм.Давайте заново')}

// // else if (year == 2025) {

// // 	alert('Почти');}


// // else if (year == 2014) {
// // 	let Foorteen = prompt('Ты дурак?', '')
// // 	if (Foorteen == 'da') {
// // 	alert('prinyal');}
// // }
// // else {
// // 	alert('mda heh')
// // }

