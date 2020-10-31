const month = document.getElementById('month');
const calendar = document.getElementById('calendar');
const monthName = document.getElementById('monthName');
const years = document.getElementById('years');



const bodyCalendar = document.getElementById('bodyCalendar');
const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');

const year18 = document.getElementById('y18');
const year19 = document.getElementById('y19');
const year20 = document.getElementById('y20');

years.addEventListener('click', handleClick); /*Приклике на всему NAV выводить функцию*/
function handleClick(e) {
  if (e.target.tagName !== 'A') {
    return;   /*Если я кликаю на Элемент НЕ содержащий А, то ничего не делать*/
  }
  e.preventDefault(); /*В ином случае 1.Останавливаем стандартное поведение браузера*/
  window.location.hash = e.target.name; /*2. Присваеваем ХЭШУ ИМЯ ССЫЛКИ*/
}

window.addEventListener('hashchange' , onHashChange);/*Юзаю вывод ХЭША*/
function onHashChange () {
  const hash = window.location.hash.slice(1);
  if (hash == '') {
    render();}     /*Эта функция будет перерисовывать новые данные, запуская RENDER*/
   else  {
    render(); 
    createInitSlider();
}
}
  function render () { /*Вот и сама функция*/
  const hash = window.location.hash.slice(1); /*1. Задаем константу значению Самого хэша, начиная со 2 символа
  т.е. убираем #*/
  if (hash === '2018') {
    my2018.createCalendar(this.name, this.year, 1);
    monthName.innerHTML = `<p>${myMonthes[0]}</p>`;
    bodyCalendar.style.marginRight =  `10px`;

  }
  if (hash === '2019') {
    my2019.createCalendar(this.name, this.year, 1);
    monthName.innerHTML = `<p>${myMonthes[0]}</p>`;
    bodyCalendar.style.marginRight =  `10px`;

  }
  if (hash === '2020') {
    my2020.createCalendar(this.name, this.year, 1); 
    monthName.innerHTML = `<p>${myMonthes[0]}</p>`;
    bodyCalendar.style.marginRight =  `10px`;
  }
  else if (hash === '') {
      window.location.reload();
  }
}

const my2018 = new Object ({ /*Билд объекта*/
  name: 'calendar',
  year: 2018,
  month: 1,
})
Object.setPrototypeOf(my2018, 
 {createCalendar, createInitSlider})

const my2019 = {
  name: 'calendar',
  year: 2019,
  month: 1,
}
Object.setPrototypeOf(my2019, 
 {createCalendar, createInitSlider})/*Добавления в прото функции */

const my2020 = Object.create(my2018);/*Добавления в прото функции */
my2020.year = 2020;

const myMonthes = ['Январь', 'Февраль', 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];

function createCalendar (name = this.name, year = this.year, month = this.month) { 
      let mon = month-1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
      let d = new Date(year, mon);
      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      // * * * 1  2  3  4
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }
      // <td> ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
      }
      // добить таблицу пустыми ячейками, если нужно
      // 29 30 31 * * * *
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }
      // закрыть таблицу
      table += '</tr></table>';
      
      if (this.month <= 12 && this.month >= 0) {
        calendar.innerHTML = `${table}`;
        monthName.innerHTML = `<p>${myMonthes[this.month-1]}</p>`;
        monthName.style.display = 'block';
        monthName.style.paddingLeft = '25px';
        monthName.style.width = '50%';
        monthName.style.background = 'white';
        monthName.style.borderRadius = '5px';
        monthName.style.marginRight = '5px';
        monthName.style.marginTop = '10px';
        monthName.style.marginBottom = '10px';
        monthName.style.marginLeft = '10px';
     // this.createCalendar(this.name, this.year, this.month);     
      } else {
        calendar.innerHTML = `Увы, Это не тот год`
      }
      ;
    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;    /*Функция отрисовки ячеек календаря + запись в прототип*/
    }
}  

function createInitSlider() {
  but1.innerHTML = `<button id='decrementCount'><</button>`
  but2.innerHTML = `<button id='incrementCount'>></button>`
  const incrCount = document.getElementById('incrementCount');
  const decrCount = document.getElementById('decrementCount');
  incrCount.addEventListener('click', incrementCount);
  decrCount.addEventListener('click', decrementCount);
  const hash = window.location.hash.slice(1);
  render();

  function incrementCount () {
        if (hash == 2018 && my2018.month < 12) {
    my2018.month++;
    my2018.createCalendar(this.name, this.year, this.month);
    console.log(`это мой месяц ${my2018.month} ${my2018.year} года`)
    }
    else {
    my2018.createCalendar(this.name, this.year, 1);
    monthName.innerHTML = `<p>${myMonthes[0]}<p>`;
    my2018.month = 1;
    console.log(`это мой месяц ${my2018.month} ${my2018.year} года`)
    }
  };

  function decrementCount() {
    if (hash == 2018 && my2018.month > 1) {
    my2018.month--;         /*Проскакивает через 0 из-за того, что я не смог в условия И/ИЛИ перечитать!!!*/
    my2018.createCalendar(this.name, this.year, this.month);
    console.log(`это мой месяц ${my2018.month} ${my2018.year} года`)
    } else {
    my2018.createCalendar(this.name, this.year, 12);
    monthName.innerHTML = `<p>${myMonthes[11]}</p>`;
    my2018.month = 12;
    console.log(`это мой месяц ${my2018.month} ${my2018.year} года`)
    }
  };
};  

// function createInitSlider2() {
//   const incrCount2 = document.getElementById('incrementCount');
//   const decrCount2 = document.getElementById('decrementCount');
//   incrCount2.addEventListener('click', incrementCount);
//   decrCount2.addEventListener('click', decrementCount);

//   const myMonthes = ['Январь', 'Февраль', 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
//   let count = 0;

//   function renderCount() {
//     const checkMonthes = myMonthes[count];
//     const getMonthes = `<p>${checkMonthes}</p>`;
//     const createElem = document.getElementById('monthName');
//     monthName.innerHTML = getMonthes;
//     monthName.style.display = 'block';
//     monthName.style.paddingLeft = '25px';
//     monthName.style.width = '200px';
//     monthName.style.background = '#E1E3E0';
//     monthName.style.borderRadius = '5px';
//     monthName.style.marginRight = '5px'
//   } 

//   function incrementCount() {
//     if (count === myMonthes.length-1) {
//       return;
//     }
//     count++;
//     return renderCount(count);
//   }

//   function decrementCount() {
//     console.log(myMonthes[count]);
//     if (count === myMonthes.length+1) {
//       return;
//     }
//     count--;
//     return renderCount(count);
//   }
// }  

    
    // createInitSlider2()
  

// render()






