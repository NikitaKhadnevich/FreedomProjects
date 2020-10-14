const month = document.getElementById('month');
const calendar = document.getElementById('calendar');
const month2 = document.getElementById('month2');
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

  switch (hash) {
    case '2018':
        return initSlider2()
       return initSlider()
       break;
    case '2019':
      return initSlider()
      break;
    case '2020':
      return initSlider()
      break;
    // default:
    //   return (monthes.innerHTML = getError());
  }

  function create2018() {
    return  `
       <table>
       <tr><th colspan="7">Рабочий календарь на <p id='monthes'></p>2018</th></tr>
                       <tr>
                        <td>Понедельник</td>
                        <td>Вторник</td>
                        <td>Среда</td>
                        <td>Четверг</td>
                        <td>Пятница</td>
                        <td>Суббота</td>
                        <td>Воскресенье</td>
                       </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                       </table>`          }
  }

    function create2019() {
    return   `
       <table>
       <tr><th colspan="7">Рабочий календарь на <p id='monthes'></p> 2019</th></tr>
                       <tr>
                        <td>Понедельник</td>
                        <td>Вторник</td>
                        <td>Среда</td>
                        <td>Четверг</td>
                        <td>Пятница</td>
                        <td>Суббота</td>
                        <td>Воскресенье</td>
                       </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                       </table>`
  }

  function create2020() {
    return  `<table>
       <tr><th colspan="7">Рабочий календарь на <p id='monthes'></p> 2020</th></tr>
                       <tr>
                        <td>Понедельник</td>
                        <td>Вторник</td>
                        <td>Среда</td>
                        <td>Четверг</td>
                        <td>Пятница</td>
                        <td>Суббота</td>
                        <td>Воскресенье</td>
                       </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                       </table>`
  }
 
render()





// console.log(my2018)



  // createCal: function () {
  //   console.log(`${this.name}, ${this.year}, ${this.month}`)
  //   }
// my2018.createCal()
const my2018 = new Object ({
  name: 'calendar',
  year: 2018,
  month: 1,
})

Object.prototype.createCalendar = function (name = `${this.name}`, year = `${this.year}`, month = `${this.month}`) { 
      let mon = month; // месяцы в JS идут от 0 до 11, а не от 1 до 12
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
      calendar.innerHTML = table;
    }
    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;
    }

function initSlider() {
  const incrCount = document.getElementById('incrementCount');
  const decrCount = document.getElementById('decrementCount');

  incrCount.addEventListener('click', incrementCount);
  decrCount.addEventListener('click', decrementCount);


   function incrementCount (next) {
    next = my2018.month;
    if (next <= 12 || next > 0) {
      my2018.createCalendar(calendar, this.year, this.month)  
    }
    my2018.month += +1;
  };

    function decrementCount() {
    next = my2018.month;
    if (next <= 12 || next > 0) {
      my2018.createCalendar(calendar, this.year, this.month)
    };
    my2018.month += -1;
  };
}

function initSlider2() {
  const incrCount2 = document.getElementById('incrementCount');
  const decrCount2 = document.getElementById('decrementCount');

  incrCount2.addEventListener('click', incrementCount);
  decrCount2.addEventListener('click', decrementCount);

  const myMonthes = ['Январь', 'Февраль', 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
  let count = 0;


  function renderCount() {
    const checkMonthes = myMonthes[count];
    const getMonthes = `<p>${checkMonthes}</p>`;
    const createElem = document.getElementById('month2');
    month2.innerHTML = getMonthes;
  } 

  function renderCount() {
    const checkMonthes = myMonthes[count];
    const getMonthes = `<p>${checkMonthes}</p>`;
    const createElem = document.getElementById('month2');
    month2.innerHTML = getMonthes;
  } 

  function incrementCount() {
    if (count === myMonthes.length-1) {
      return;
    }
    count++;
    return renderCount(count);
  }

  function decrementCount() {
    console.log(myMonthes[count]);
    if (count === myMonthes.length+1) {
      return;
    }
    count--;
    return renderCount(count);
  }


}  








