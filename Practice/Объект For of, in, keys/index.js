l = (result) => {
   console.log(result);
}// 

// Объекты
// ____________________________________________________________________________
// 1.

//FOR IN - Проходит по объекту и выводит ЗНАЧЕНИЕ объекта
// const obj = {
//    a: 1,
//    b: 2,
//    c: 'Max'
// }

// const addArr = () => {
// let wantArr = []
//    for (let index in obj) {
//       console.log(obj[index]) // 1, 2, "Max"
//       wantArr.push(obj[index])
//    }
//    console.log('wantArr',  wantArr)
//    return wantArr
// }
// addArr()

// const easyArr = Object.values(obj)
// console.log(`easyArr`, easyArr) // Так это можно сделать через Object values


//_________________________________________________________
//FOR OF - Проходит по MACCBУ/СТРОКЕ и выводит ЗНАЧЕНИЕ элемента
// let arr = [1, 2, 55];
//    for (const index of arr) {
//       console.log(index)
//    }


//Задачи
//_________________________________________________________


let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
   Zina: { Numb: 22 },
   Grisha: 29,
   Valik: 'Нет данных',
   Alfred: 130,
}
let max = []

function getSumSalaries (obj, arr) {
   arr = []
   let sum = 0;
   if (Object.keys(obj).length !== 0) {
      for (let key in obj) {
         arr.push(obj[key]);  
      }

      arr.forEach(function (item, i) {
         sum += arr[i]
         return sum
      });
   return sum   
   } else {
      l('Итерируемый массив пуст')
   }
   
}
let xxx = getSumSalaries(salaries, max);
l(xxx)

// const isSum = (obj, numb) => {
//    numb = 0;
//    const target = Object.values(obj)
//    if (target) {
//       for (let index = 0; index < target.length; index++) {
//          typeof target[index] === 'number' && !isNaN(target[index]) ? 
//             numb += target[index]: null
//       }
//    return console.log(`В массиве нет чисел или их сумма равна ${numb}`)}
// }
// isSum(salaries)

// const isNumber = (obj, sumKeys) => {
//    sumKeys = 0;
//    const keys = Object.values(obj)
//    if (keys) {
//       for (let i = 0; i < keys.length; i++) {
//          typeof keys[i] === 'number' && !isNaN(keys[i]) ?
//          ++sumKeys : sumKeys
//       }
//    return console.log(sumKeys)
//    }
// }
// isNumber(salaries) //  Проверка на число


// ____________________________________________________________________________
// 2.
// let menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
// };

// function getMultiPl(object) {
//    for (let key2 in object)
//       if (typeof object[key2] == 'number') {
//          object[key2] = object[key2]*2
//          // l(object)
//       }
// }
// getMultiPl(menu)
// l(menu)
// ____________________________________________________________________________
// 3.
// let count = 0;
// let ladder = {}
// function createGlobal() {


// ladder.showStep = function () {
//       l(count);   
//    }
// ladder.up = function () {
//    ++count;
//    l(`добавил 1`);  
//    }
// ladder.down = function () {
//    --count;
//    l(`отнял 1`);  
//    }
// }
// createGlobal()
// ladder.showStep() // 0 (выводит ступеньку на который мы находимся)
// ladder.up()
// ladder.up()
// ladder.showStep()
// ladder.down()
// ladder.showStep()





   

// }