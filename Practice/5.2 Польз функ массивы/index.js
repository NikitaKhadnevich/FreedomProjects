l = (result) => {
   console.log(result);
}// 

// .1 _________________________________________________________

// let newStr = 'что где когда'

// function ucfirst(string,arr) {
//    arr = string.split(' ')
//    arr.forEach(function (item, i)  {
//       arr[i];
//       var at = arr[i].charAt(0).toUpperCase();
//       return arr[i] = at + arr[i].substr(1, arr[i].length - 1);
//    });
//    return arr  /* ВОЗВРАЩАЕМ РЕЗУЛЬТАТ  */
// }

// function newCall(string) {
//    return ucfirst(string).join(' '); /* ВОЗВРАЩАЕМ РЕЗУЛЬТАТ ПРЕОБРАЗОВАНИЯ В СТРОКУ */
//    }
// let yyy = newCall(newStr)
// l(yyy)

// .2 _________________________________________________________
// let someStr = 'var_text_hello'

// function changeStr(str, arr) {
//   arr = str.split('')

//   arr.forEach(function (item, i) {
//      if (arr[i] == "_") {
//         arr[i+1] = arr[i + 1].toUpperCase()
//      }  
//   });

//   return  arr.join('').replace(/[^a-zа-яё]/gi, '');
// }

// let xxx = changeStr(someStr)
// l(xxx)

// .3 _________________________________________________________

// let Autmnstr = "Легкий осенний ветерок гоняет мягкие листья по земле. Осенью пошел теплый дождь, трава была очень свежей после его окончания дождя"
// let AutmnArr = Autmnstr.split(' ')

// let someWord = 'ветерок'

// function checkWord(arr, str) {
//    arr.filter((elem) => {
//       if (elem.includes(str) == true) {
//          l(elem)
//       }
//    })
// };
// checkWord(AutmnArr, 'дожд')  /* ХОРОШАЯ ЗАДАЧА НА ФИЛЬТР */

// .4 _________________________________________________________
// 1. В МАССИВ ПО 2
// 2. РЕВЕРС СТРОКИ
// 3. ДЖОИН

// let numberStr = '123456'
// let arr = numberStr.split('')
// newArrs = []

// function name(arr, newArr, counter) {
//       newArr = arr.map((elem, i) => { 
//       while (newArr.length < 6) {
//          newArr.push(i + counter)
//          newArr.push(i+1)
//          i += 2
//       }
//       l(newArr)
//    });
// }
// name(arr, newArrs, 2)







