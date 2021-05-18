l = (result) => {
   console.log(result);
}// 

// 10-11.
// // _______________________________________________________________
// let arr = [];
// elem = 0;
// while (arr.length < 4) {
//    arr.push(++elem)
// }
// console.log(arr)

// function checkTru(arr) {
//    arr.forEach(function(item, i) {
//       arr[i];
//       (function () {
//          if (Number.isInteger(arr[i]/2) == arr.length) 
//             {
//             console.log('true')
//             }
//          else {
//             console.log('false')
//          }
//       })();
//    }); 
// }
// checkTru(arr)

// function checkTru2(arr) {
//    arr.forEach(function (item, i) {
//       arr[i];
//       (function () {
//          if (Number.isInteger(arr[i] / 2 == arr.length)) {
//             console.log('true');
//          }
//          else {
//             console.log('false');
//          }
//       })();
//    });
// }
// checkTru2(arr)


// 12.
// _______________________________________________________________
// let newArr = [1, 2, 5, 12, 154, 21, 15]

// function getCheckFive(arr) {
//    const getFive = [];
//    arr.filter(function (elem,i) {
//       if (Number.isInteger(arr[i]/5)) {
//          getFive.push(arr[i])  
//          }
//       }   
//    );
//    console.log(getFive)
// }
// getCheckFive(newArr)

// let SumArr = [1, 22, 4, 'alex', 'Хорус', 12, 'serg', 154, 'Гавриил', 21, 15]
// function getAverage(arr) {
//    let sum = 0;
//    let counter = 0;
//    for (let elem of arr) {
//       if (typeof elem == 'number') {
//          counter++;
//       }
//    }
//    arr.forEach(function (item, i) {
//       arr[i];
//       if (typeof arr[i] == 'number') {
//          sum += arr[i]/counter;
//       }
//    });
//    console.log(sum.toFixed(1))   
// }
// getAverage(SumArr);

// 14.
// _______________________________________________________________
// let arr = [1, 'Max', 22, false, {name: 'Nik', age: 44}]
// function getSwitchElements(arr) {
//    let newArg = arr[0];
//    arr.push(newArg);
//    arr.shift(arr[0])
//    l(arr)
// }

// function getSwitchElements2(arr2) {
//    let newArg = arr[0];
//    arr.replace(newArg);
//    l(arr)
// }
// getSwitchElements2(arr) 

// 14.
// _______________________________________________________________
let arr1 = [
{name: 'Mike', age: 25,},
{name: 'Tony', age: 34,},
{name: 'Sara', age: 27},
{ name: 'Chloe', age: 45, },
{ name: 'Baks', age: 34, },
{ name: 'Oly', age: 17 }
]

let arr2 = [
   { name: 'Mike', age: 25, },
   { name: 'Oly', age: 17 }
]

const newObject = []

Object.prototype.checkNew = function (arr, newArr) {
      newArr = this.map(function (item, i) {
            if ('name' in arr[i] && 'age' in arr[i]) {
               return `Имя: ${item.name}, возраст: ${item.age}`
            } else {
               l(` В элементе ${i} неверное свойство имени ${[i].name}!` )
            }
         });
      return l(newArr);
}

arr1.checkNew(arr1)


// function checkNew (arr, newArr) {
//       newArr = arr.map(function (item, i) {
//             if ('name' in arr[i] && 'age' in arr[i]) {
//                return `Имя: ${item.name}, возраст: ${item.age}`
//             } else {
//                l(` В элементе ${i} неверное свойство имени ${[i].name}!` )
//             }
//          });
//       return newArr;/* !!!!!!!!!!RETURN!!!!! */
// };
// const xxx = checkNew;
// l(xxx(arr1, newObject));


