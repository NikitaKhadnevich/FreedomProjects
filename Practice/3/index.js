l = (result) => {
   console.log(result);
}// 

// Объекты
// ____________________________________________________________________________
// 1.

// let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
// }
// let max = []

// function getSumSalaries (obj, arr) {
//    arr = []
//    let sum = 0;
//    if (Object.keys(obj).length !== 0) {
//       for (let key in obj) {
//          arr.push(obj[key]);  
//       }

//       arr.forEach(function (item, i) {
//          sum = sum + arr[i]
//          return sum
//       });
//    return sum   
//    } else {
//       l('Итерируемый массив пуст')
//    }
   
// }
// let xxx = getSumSalaries(salaries, max);
// l(xxx)

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
// function createGlobal() {
let count = 0;
let ladder = {}

ladder.showStep = function () {
      l(count);   
   }
ladder.up = function () {
   ++count;
   l(`добавил 1`);  
   }
ladder.down = function () {
   --count;
   l(`отнял 1`);  
   }

ladder.showStep() // 0 (выводит ступеньку на который мы находимся)
ladder.up()
ladder.up()
ladder.showStep()
ladder.down()
ladder.showStep()





   

// }