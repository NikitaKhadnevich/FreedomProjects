l = (result) => {
   console.log(result)
}
//Деструктуризация - особый подход написания кода, в котором можно использовать значения какбы "от обратного" - минимизировать код, сокращать запись и делать ее зачастую более логичной.
function calcValues(a, b) {
   return [
      a + b,
      a - b,
      a * b,
      a / b,
   ]
}
// Массивы
//1  Базовове использование 
const result = calcValues( 10, 5) //Хотим вывести результат суммы/разницы, но много лишнего кода.  
const sum = result[0]
const sub = result[1]
console.log(sum, sub) 

// Для минификацию используют: 
const [sum1, sub1] = result
//console.log(sum1, sub1)

// Или более прогрессивно:
const [sum2, sub2] = calcValues( 10, 5)
//console.log(sum2, sub2)

// 2  Пропуски ненужных вычислений
const [sum3,, mult3, division3] = calcValues(10, 5) //Прописываем пустую запятую
//console.log(sum3, mult3, division3)

// 3  Пропуски ненужных вычислений
function calcValues2(a, b) {
   return [
      a + b,
      a - b,
      a * b,
      a / b,
   ]
}
const [sum4, sub4 = 'Sub Error', mult4, division4] = calcValues2(10, 5) //Прописываем вероятную ошибку, если, например не пришла дата с сервака и тд. Будет игнорироваться если есть дата
//console.log(sum4, mult4, division4, sub4)

//Объекты
//1  Базовове использование 
 let person = {
   name: 'Alex',
   age: 22,
   adress: 'Msk'
}

const {name, age, adress, car = 'Net Mashiny'} = person // тоже самое, что const name - person.name
//l(car) // Если стучасться к несозданой переменной , то выдаст дефолтное значение

// 2 Замена названия переменной , с сохранением значения
 const {name: frstName} = person //  Заменили переменную name на frstName, если name  уже занята, к примеру
// l(frstName)

//3 Работа со вложенными объектами
 let person2 = {
   name: 'Alex',
   age: 22,
   address: 
      {city: 'Msk',
      street: 'Ordynka'
      }
}
const {address: {city: Dom, street}} = person2 //Деструктурируется также как и родитель
// console.log(Dom)

//3 Работа со rest  и в функциях
 let person3 = {
   name: 'Alex',
   age: 22,
   address: 
      {city: 'Msk',
      street: 'Ordynka'
      }
}

const {name: secondName, ...other} = person3
console.log(secondName, other)

function logPerson(per) {
   console.log(per.name + ' ' + per.age)
} //  можно избавиться от дублирования  per per per (name, age и тд)
logPerson(person3)

function logPerson( {name, age}) {
   console.log(name + ' ' + age)
} //  
logPerson(person3)
