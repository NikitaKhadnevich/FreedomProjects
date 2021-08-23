// l = (result) => {
//    console.log(result);
// }// 

// .1 _________________________________________________________
// function createCounter(counter){
//    counter = 0
//    return function () {
//       return ++counter
//    }
// }
// var conter = createCounter()
// l(conter())
// l(conter())
// .2 _________________________________________________________

// Mybut = (nameBut, nameid) => {
//    let newElem = document.createElement("button");
//    const text = document.createTextNode(nameBut);
//    newElem.appendChild(text);
//    let myId = document.createAttribute("id");
//    myId.value = nameid;
//    newElem.setAttributeNode(myId);
//    document.body.appendChild(newElem);
// }

// const mYbutton = document.getElementById('but')
// console.log(`but`, mYbutton)

// createName = () => {
//    var checker = function () {
//       a = 1;
//       return function () {
//          this.innerHTML = a;
//          return a++;
//       }
//    }
//    let allBut = document.getElementById('AlexId')
//    allBut.addEventListener('click', checker(this));
// };

// function all(callback1, callback2) {
//    callback1
//    callback2
// }

// mYbutton.addEventListener('click', () => {Mybut('Alex', 'AlexId'), createName()  })


// .3 _________________________________________________________

// function filt() {
//    let str = document.getElementsByTagName('p')
//    console.log(`str`, str)
//    return str
// }

// function calc(callbackFilt) {
//    return strArr = [...callbackFilt]
// }

// function createCheck() {
//    let color = ['red', 'yellow', 'blue']
//    return color.forEach((elem, item) => {
//       return strArr.forEach((elem, i) => {
//          function render() {
//             strArr[i].style.color = 'red';
//          } // Красив все надписи в красный

//          return strArr[i].addEventListener('click', function () {
//             if (item == i) {
//                strArr[i].style.background = `${color[item]}`;
//                render()
//             }            
//          })
//       });
//    });      
// }

// function createStyle(callbackCalc, callbackFilter, callbackCheker) {
//    callbackCalc
//    callbackFilter
//    callbackCheker
// }
// let xxx = createStyle;
// xxx(filt(), calc(filt()), createCheck())

// .4 _________________________________________________________

// Mybut = (nameBut, nameId) => {
//    let newBot = document.createElement("button");
//    const text = document.createTextNode(nameBut);
//    newBot.appendChild(text);
//    let myId = document.createAttribute("id");
//    myId.value = nameId;
//    newBot.setAttributeNode(myId);
//    document.body.appendChild(newBot);
//    return createBut = document.getElementById(`${nameId}`)
// }

// function createFib() {
//    let counter = 1;
//    let next = 2;
//    return function () {
//       let fib = next + counter;
//       ++counter;
//       next = fib;
//       l(fib)
//    }
// }

// createGreatChecker = (name, fibCalc) => {
//    name.addEventListener('click', fibCalc)
// }

// createGreatChecker(Mybut('Fib1', 'FibId1'), createFib())
// createGreatChecker(Mybut('Fib2', 'FibId2'), createFib())

// .5 _________________________________________________________

// let input = document.querySelectorAll('input')
// let button = document.getElementById('but')

// let arr1 = [];
// let arr2 = [];
// let arr3 = [];

// function val() {
//    for (let i = 0; i < input.length; i++) {
//       const data = input[i].value
//       i === 0 && data ? arr1.push(data) :
//       i === 1 && data ? arr2.push(data) :
//       i === 2 && data ? arr3.push(data) : null
//       input[i].value = ''
//    }

//       console.log(arr1, arr2, arr3)
//    }
   
//    // val()

// button.addEventListener('click', val)

// .6 _________________________________________________________

// let button = document.getElementById('but')
// let butd = document.getElementById('butd')


// let sometest = (function (math, foreaching) {
//    let myArr = []
//    button.addEventListener('click', function() {
//       math
//       function createArr(arr, callback, callback2) {
//          if (arr.length < 20 && (callback2 !== callback)) {
//             return arr.push(callback)
//          }
//       }   
//       foreaching

//    createArr(myArr, createRandom(0, 101), chck(myArr))
//    l(myArr)
// },(createRandom(0, 100), chck(myArr))
// )
// })()

// function createRandom(m,  n, min, max, ) {
//    min = Math.ceil(m);
//    max = Math.floor(n);
//    return Math.floor(Math.random() * (max - min)) + min;
// }

// function chck(arr) {
//    arr.forEach((item, i) => {
//    });
// }

// .7 _________________________________________________________
// function makePassword() {
//    let myPass = 'myPass'
//    return function getPass(pass) {
//       if (pass === myPass) {
//          return trues
//       }
//       if (pass !== myPass) {
//          return wrong
//       }
//    }
// }

// function wrong() {
//    return `Ваш пароль ошибочный!`
// }

// function trues() {
//    return `Ваш пароль верный`
// }

// let getPass = makePassword();
// let xxx = getPass('myPass', 'Админ', 'Гость');
// let yyy = getPass('myPasss', 'Админ', 'Гость');
// let arr = []
// arr.push(xxx())
// arr.push(yyy())
// l(arr)

// .8 _________________________________________________________
// addition = () => {
//    let n = 2;
//    return function(m) {
//      return m + n
//    }
// }
// let xxx = addition()
// let max = xxx(5);
// l(max)
// arr = new Array;
// arr.push(max)
// l(arr)

// .9 _________________________________________________________
 
// function calcAppart(callback1, callback2) {
//    l(`выбраный подъезд равен ${callback1}`);
//    l(`выбраный этаж равен ${callback2}`)
// }
// calcAppart(calcFloor(9, 6, 180, calcEntrance(180, 9, 6)), calcEntrance(180, 9, 6) )

// function calcEntrance(numberApp, floor, appart) {
//    sum = floor*appart
//    return Math.ceil(numberApp / sum)
// }

// function calcFloor(floor, appart, numberApp,callback) {
//    let sum = floor * appart;
//    callback
//    let x = (callback - 1)*sum;
//    return Math.ceil((numberApp-x)/appart)
// }

const arr = [1,4,5,67,66, 222,232323,2323,32,3,23,2,32,3,2,32,3,23]

for (let i = 0; i < arr.length; i++) {
   // 1 уровень замыкания - тут есть i
   const counter = function(count) { // задача  - показать элемент в консоле (i)
      console.log(count)
   }
   setTimeout(counter, 1000*i, i); // Вызываю из окружения for функцию counter, с аргументом 1000 и i
}

// что происходит?
// 1. Цикл форм сразу пролетает по всем элментам массива и получет i
// 2. стек оказывается пустым, однако в очереди висит метод setTimeout
// 3. по сути в очереди столько setTimeout, сколько i в результате выполнения for так как setTimeout дергается с РАЗНЫМИ АРГУМЕНТАМИ (1000*i)
// 4. НО for не очищается, ибо внутри его замкнута функция counter, которая вызывается по каждой итерации setTimeout
// 5. вот пока она жива и for не может умереть в этом и смысл замыкания
