l = (result) => {
   console.log(result)
}

// Оператор Spread в Js - простыми словами он забирает содержимое массива и кладет в виртуальный объект БЕЗ сохранения всех прото/пртотипов и тд
// 1 объединенние массивов
const cityR = ['Москва' , 'Питер' , "Самара", "Брянск"];
const cityE = ["Лондон", "Стамбул", "Мадрид", "Гаага"];
//console.log(...cityR, ...cityE)

//2 обработка массива в массиве
let cityMix = [['Москва' , 'Питер' , "Самара", "Брянск"], ["Лондон", "Стамбул", "Мадрид", "Гаага"]]
const cityAll = [...cityMix[0], ...cityMix[1]]; //l(cityAll);

//3 работа с объектами
 let rusCityPopulation =  {
   Moscow: 22,
   Piter: 9,
   Kazan: 2,
   Novosib: 2,
}
let eurCityPopulation = {
   Riga: 1,
   Berlin: 7,
   London: 10,
   Helsenki: 4, 
}
let AllCityPopulation = {...rusCityPopulation, ...eurCityPopulation}
//l(AllCityPopulation) // Объединение объектов в один. В случае, если есть 2 одинаковых поля, будет применено последнее, к примеру если бы было 2 Москвы, то последняя была бы в итоговом объекте

//4 обработка для быстрых вычислений без join() массива
let numbers = [3, 4, 78, 34, 33]; //l(Math.max(...numbers))

//5 обработка дивов NodeList
let divs = document.querySelectorAll('div')
let nodes = [...divs]
// console.log(nodes)
//Бывает необходимым для получения массива из неМассива - NodeList, дабы работал, например метод map.


// Оператор Rest в Js - такой же синтаксис как у Spread, отличается областью применения. Оператор rest "собирает" в массив элементы(но может и разбирать),  в то время как spread  - разбирает в абстракцию
let thisNumbers = [1, 2, 3, 4, 5]
function sum(a, b) {
   return a + b
}
// console.log(sum(...thisNumbers)) //  Результат будет = 3, ибо остальные части отсекаются - не происходит вычисление в дальнейшем. Для исправления ситуации используется Rest.

// 1. сумирование элементов массива
let thisNumbersRest = [1, 2, 3, 4, 5];
function sum2(a, b, ...rest) { 
   console.log(rest) // тут происходит обратная сборка в массив все неиспользуемых аргументов - [3, 4, 5]
   return a + b + rest.reduce((accum, item, index) => accum + item, 0)
   // Таким образом, через reduce  мы обратно собрали сумму всех эл-тов массива 
}
//console.log(sum2(...thisNumbersRest)) 

// 2. корректировка массива, точечно
// разберем массив
const numbeRest = [1, 2, 3, 4, 5]
const [a, b, ...others] = numbeRest
//console.log(a, b, others)// Выдает 1 2 [3,4,5] нужно разбираться

// 3. корректировка объекта, точечно
// разберем объект
const person = {
   name: "Alex",
   age: 20,
   city: 'Msc'
}
const {name, age, ...city} = person
//console.log(name, age, city) // Все что до это части объекта, все что после(city) - объект ({city: 'Msc'})


// Оператор Arguments в Js - псевдомассив аргументов, как ранее сказал - представляет собой массив аргументов ПЕРЕДАННЫХ в функцию. простой пример
function quest() {
   var arr = [...arguments] // Преобразуем в массив
   var arr2 = Array.prototype.slice.call(arguments) // Преобразуем в массив через заимствование метода из Array
   var arr3 = Array.from(arguments) // аналогичный вариант
   // console.log(typeof arr)
   //  console.log(typeof arr2)
};  quest('a', 'b', 'f') // выдаст псевдомассив с аргументами, по сути это объект

function one(params) {
   console.log(params);
   arguments[0] = 'what'
   console.log(arguments) // ? Что произойдет ?В НЕ СТРОГОМ РЕЖИМЕ Произошла замена - выдаст не 5,6,7,8, а выдаст what,6,7,8. В use strict -  заменится только в нутри, снаружи будет 5,6,7,8
   console.log(a) 
};  one(5, 6, 7, 8) 

