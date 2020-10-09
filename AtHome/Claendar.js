const monthes = document.getElementById('month');
const month1 = document.getElementById('Ju');
const month2 = document.getElementById('Fe');
const month3 = document.getElementById('Ma');


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
  т.е. убираем #*/}

  function render () { /*Вот и сама функция*/
  const hash = window.location.hash.slice(1); /*1. Задаем константу значению Самого хэша, начиная со 2 символа
  т.е. убираем #*/

  switch (hash) {
    case '2018':
      monthes.innerHTML = create2018();
      break;
    case '2019':
      monthes.innerHTML = create2019()
      break;
    case '2020':
      monthes.innerHTML = create2020()
      break;
    // default:
    //   return (monthes.innerHTML = getError());
  }

  function create2018() {
    return  `<a href="#" id="Ju18">Январь2018</a>
      <a href="#" id="Fe18">Февраль</a>
      <a href="#" id="Ma18">Март</>
      <a href="#" id="Ap18">Апрель</>
      <a href="#" id="Ma18">Май</>`
  }

    function create2019() {
    return  `<a href="#" id="Ju19">Январь2019</a>
      <a href="#" id="Fe19">Февраль</a>
      <a href="#" id="Ma19">Март</>
      <a href="#" id="Ap19">Апрель</>
      <a href="#" id="Ma18">Май</>`
  }

  function create2020() {
    return `<a href="#" id="Ju20">Январь2020</a>
      <a href="#" id="Fe20">Февраль</a>
      <a href="#" id="Ma20">Март</>
      <a href="#" id="Ap20">Апрель</>
      <a href="#" id="Ma18">Май</>`
  }

}     
render()


monthes.addEventListener('click', createHash); /*Приклике на всему NAV выводить функцию*/
function createHash(e) {
  if (e.target == 'id') {
    return;   /*Если я кликаю на Элемент НЕ содержащий А, то ничего не делать*/
  }
  window.location.hash = e.target.id; /*2. Присваеваем ХЭШУ ИМЯ ССЫЛКИ*/
}

monthes.addEventListener('click', createMap); /*Приклике на всему NAV выводить функцию*/
function createMap(monthes) {
    if (monthes.target.id == 'Ju18') {
      second.innerHTML = `<table>
<tr><th colspan="5">Рабочий календарь на январь 2018</th></tr>
                       <tr>
                        <td>Moday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                       </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                      </tr>
                        <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                      </tr>
                        <tr>
                        <td>30</td>
                        <td>31</td>
                        <td colspan="3"></td>
                      </tr>
                       </table>`}
    if (monthes.target.id == 'Fe20') {
            second.innerHTML = `<table>
<tr><th colspan="5">Рабочий календарь на февраль 2020</th></tr>
                       <tr>
                        <td>Moday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                       </tr>
                      <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                      </tr>
                        <tr>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td colspan="3"></td>
                      </tr>
                       </table>`}

    if (monthes.target.id == 'Ma19') {
            second.innerHTML = `<table>
<tr><th colspan="5">Рабочий календарь на март 2019</th></tr>
                       <tr>
                        <td>Moday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                       </tr>
                      <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                      </tr>
                        <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                      </tr>
                        <tr>
                        <td>30</td>
                        <td>31</td>
                        <td colspan="3"></td>
                      </tr>
                       </table>`
    }
    








    console.log(monthes.target.id)
}

