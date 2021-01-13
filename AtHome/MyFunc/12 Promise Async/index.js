l = (result) => {
   console.log(result);
}// 

// 1._______________________________________________________
// //    let a = function a() {
//       return 1
//    }
//    let b = function b() {
//       if (a => 1) {
//       return 2 + a()
//       } else {
//          l('меньше')
//       }
//    }
//    setTimeout(() => {
//       function c() {
//          if (b => 2)
//             l(3 + b())
//       }
//    }, 4000);
 
// l(a());
// l(b());

// 2._______________________________________________________


// function greteTime(ms) {
//    var promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve()
//       }, ms);
//    });
//    return promise
// }   

// greteTime(2000)
// .then(() => l(1))
// .then(() => greteTime(2000))
// .then(() => l(2))
// .then(() => greteTime(2000))
// .then(() => l(3))

// let promise = new Promise(function (resolve, reject) {
//    l('Исходные данные')
//    setTimeout(() => {
//       let myData = {
//          name: 'Alex',
//          age: 25,
//       }
//       resolve(myData)
//    }, 2000);
// }) /* Если разрезолвилось то начинаем чейнить */
// promise
//    .then(dataStatus => {
//       return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             dataStatus.status = 'Ok',
//             console.log('DataStatus обновилась успешно', dataStatus)
//             resolve(dataStatus)
//          }, 2000);
//       })
//    })
//    .then(dataTime => {
//       return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          dataTime.time = 25,
//          console.log('Time обновилась успешно', dataTime)
//          resolve(dataTime)
//          }, 3000);
//       })   
//    })
//    .then(dataNewPr => {
//       return new Promise((resolve,reject) => {
//          setTimeout(() => {
//             dataNewPr.adress = '400.123.222.444',
//             console.log('Адрес обновился успешно' , dataNewPr)
//             reject(dataNewPr)
//          }, 2000)
//       })
//    })
//    .catch(err => console.error('Error: ошибка последнего ввода', err))


// 4._______________________________________________________
 
// let promise = new Promise(function (resolve, reject) {
//    setTimeout(() => {
//       let myData = {
//          name: 'Alex',
//          age: 25,
//       }
//       resolve(myData)
//    }, 2000);
// })

   // function createRandom() {
   //    let number = Math.floor(Math.random() * 11);
   //    return number
   // }
  
var promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      function createRandom() {
         return number = Math.floor(Math.random() * 11);
      }
      createRandom()
      resolve(number)},
      2000);
   })
promise
   .then(dataTime => {
      return new Promise((resolve, reject) => {
            if (dataTime> 1 && dataTime < 6) {
               console.log('Correct Number')
            resolve(dataTime)
            } else {
               reject()
            }
         })
      })
   .catch(() => l('Wrong Number'))
