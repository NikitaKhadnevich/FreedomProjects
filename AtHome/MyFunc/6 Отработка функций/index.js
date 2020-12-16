l = (result) => {
   console.log(result);
}// 

// .1 _________________________________________________________
// let xxx = 2
// const check = (thnx, calback1, calback2) => {
//    if (thnx > 1) {
//       calback1()
//    } else {
//       calback2()
//    }
// }
// check(xxx, function () { l(1) }, function () { l(2) })

// .2 _________________________________________________________
// const check2 = (numb, callback) => {
//    return (Math.pow(numb, callback))
// };
// let sqr = function () {
//    return 4
// }
// let x = check2(2, sqr())

// .3 _________________________________________________________
// const check3 = (callback1, callback2) => {
//    return callback1 + callback2
// }
// const numb1 = () => {
//    return 3
// }
// const numb2 = () => {
//    return 4
// }

// l(check3(numb1(), numb2()))
// let xxx = check3(numb1(), numb2())
// l(typeof xxx)

// .4 _________________________________________________________

// const check4 = (numb, callback1, callback2) => {
//    return callback1(numb) + callback2(numb)
// }

// function kvadrat(numb) {
//    return numb*numb
// }
// function sqr(numb) {
//    return numb ** 3
// }

// l(check4(3, kvadrat, sqr))

// .5 _________________________________________________________

// let sArr = [1, 2, 3, 4, 5, 6]

// const check5 = (arr, callback, ) => {
//    arr.forEach((item,i) => {
//       arr[i] += callback
//    });
//    return (arr)
// }

// const getPlus = (elem) => {
//    return elem + 10
// }

// let newArr = check5(sArr, getPlus(2))
// l(typeof newArr)

// .6 _________________________________________________________
let nArr = [1,2,3]
let fArr = [function frst(item) { return `это ${item}`}, 
   function two(item) { return `это другой ${ item }`},
   function thrd(item) { return `это третий ${ item }`},
]

const check6 = (arr1, arr2) => {
   return arr1.forEach((item, i) => {
      arr2.forEach((item, i) => {
      });
      function element() {
         return (arr2[i](arr1[i]))
      }
      l(element())
   });
}
let cc = check6(nArr, fArr);







