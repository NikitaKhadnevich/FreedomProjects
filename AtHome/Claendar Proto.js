const month = document.getElementById('month');
const calendar = document.getElementById('calendar');
const monthName = document.getElementById('monthName');
const years = document.getElementById('years');
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
  render();     /*Эта функция будет перерисовывать новые данные, запуская RENDER*/
}

  function render () { /*Вот и сама функция*/
  const hash = window.location.hash.slice(1); /*1. Задаем константу значению Самого хэша, начиная со 2 символа
  т.е. убираем #*/
  if (hash === '2018') {
    my2018.createCalendar(this.name, this.year, 1);
    monthName.innerHTML = `${myMonthes[0]}`

  }
  if (hash === '2019') {
    my2019.createCalendar(this.name, this.year, 1);
    monthName.innerHTML = `${myMonthes[0]}`

  }
  if (hash === '2020') {
    my2020.createCalendar(this.name, this.year, 1); 
    monthName.innerHTML = `${myMonthes[0]}`
  }
} 

const my2018 = new Object ({ /*Билд объекта*/
  name: 'calendar',
  year: 2018,
  month: 1,
})
Object.setPrototypeOf(my2018, 
 {createCalendar, initSlider})

const my2019 = {
  year: 2019,
}
Object.setPrototypeOf(my2019, 
 {createCalendar, initSlider})/*Добавления в прото функции */

const my2020 = Object.create(my2018);/*Добавления в прото функции */
my2020.year = 2020;



const myMonthes = ['Январь', 'Февраль', 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];

function createCalendar (name = `${this.name}`, year = `${this.year}`, month = `${this.month}`) { 
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

      const myMonthes = ['Январь', 'Февраль', 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];

      if (this.month <= 12 && this.month >= 0) {
        calendar.innerHTML = `${table}`
        monthName.innerHTML = `${myMonthes[this.month-1]}`;
        monthName.style.display = 'block';
        monthName.style.paddingLeft = '25px';
        monthName.style.width = '200px';
        monthName.style.background = '#E1E3E0';
        monthName.style.borderRadius = '5px';
        monthName.style.marginRight = '5px' 
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

function initSlider() {
  const incrCount = document.getElementById('incrementCount');
  const decrCount = document.getElementById('decrementCount');
  incrCount.addEventListener('click', incrementCount);
  decrCount.addEventListener('click', decrementCount);

  function incrementCount () {
      const hash = window.location.hash.slice(1);
      if (hash == 2018 && my2018.month < 12) {
      my2018.month++;
      my2018.createCalendar(this.name, this.year, this.month);
      console.log(`это мой месяц 2018 ${my2018.month}`)}
      else {
      my2018.createCalendar(this.name, this.year, 1);
      monthName.innerHTML = `${myMonthes[0]}`;
      my2018.month = 1;
      console.log(`это мой месяц 2018 ${my2018.month}`)}

    // if (hash == 2019 && (my2019.month < 12)) {
    //   my2019.month += +1;
    //   my2019.createCalendar(this.name, my2019.year, this.month);
    
    // }
    // if (hash == 2020) {
    //   my2020.month += +1;
    //   my2020.createCalendar(this.name, this.year, this.month);
    // };
  };

  function decrementCount() {
    const hash = window.location.hash.slice(1);
    if (hash == 2018 && my2018.month > 1) {
      my2018.month--;         /*Проскакивает через 0 из-за того, что я не смог в условия И/ИЛИ перечитать!!!*/
      my2018.createCalendar(this.name, this.year, this.month);
      console.log(`это мой месяц 2018 ${my2018.month}`)
    } else {
      my2018.createCalendar(this.name, this.year, 12);
      monthName.innerHTML = `${myMonthes[11]}`;
      my2018.month = 12;
      console.log(`это мой месяц 2018 ${my2018.month}`)}

    // if (hash == 2019) {
    //   my2019.month += -1;
    //   my2019.createCalendar(this.name, this.year, this.month);
    // }
    // if (hash == 2020) {
    //   my2020.month += -1;
    //   my2020.createCalendar(this.name, this.year, this.month);
    // };
  };
};  

initSlider()


// function initSlider2() {
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

    
    // initSlider2()
  

// render()






