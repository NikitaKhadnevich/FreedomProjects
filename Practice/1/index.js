
// // 1.
// function getMult(a,b) {
//    return console.log(a*b)
// }
// getMult(2,5);
// // ___________________________________________________________
const log = (result) => console.log(result)
// // 2.
// createIvan = (frstname, secondname, age) => {
// return console.log(`Привет ${frstname} ${secondname} ? Возрастом ${age} лет.`)
// } 
// createIvan('Иван', 'Петров', 17)
// // ___________________________________________________________
// // 3.

// creatQuest = () => {
//    var years = prompt('Какой Ваш пол?', '');
//    if (years == 'M') {
//      console.log('Ваш пол мужской');
//    } else if (years == 'F') { 
//      console.log('Ваш пол женский');
//    } else {
//       console.log('Ваш пол неопределен');
//    }
// }
// creatQuest()

// creatQuest2 = () => {
//    var years = prompt('Какой Ваш пол', '');
//    let someQuest = (years == 'M') ? 'Ваш пол мужской'' :
//                    (years == 'F') ? 'Ваш пол женский' :
//                    'Ваш пол неопределен';
//    console.log(someQuest);               
// }
// creatQuest2() 
// ___________________________________________________________
// 4.

// const arr2 = ['Monday', 'Tuesday ', 'Wednesday ', 'Thursday', 'Friday ', 'Saturday', 'Sunday'];
// function alertArr(arr, i) {
//       if (i > 1 && i < 8) {
//          console.log(arr[i - 1]);
//       } else {
//          console.log('Выберете число дня недели в промежутке с 1 по 7')
//       }
//    }
//  alertArr(arr2, 2);

// ___________________________________________________________
// 5.
// let words = `Хочу сказать привет, мой друг. Как твои дела. Что у тебя нового?`

// let FirstArr = () => words.split(' ');
// let SplitFirstArr = words.split(' ');
// // console.log(newArray)
// // newArray.forEach(function(elem,i){
// //    let checking = newArray[elem, i].toLowerCase(0);
// //    if (newArray[elem, i].charCodeAt(0) != checking.charCodeAt(0)) {
// //          console.log(newArray[elem, i] + ', ')
// //       };
// // });

// const checkUpper = (arr) => arr.map(x => {
//    let checking = x.toLowerCase(0);
//    if (x.charCodeAt(0) !== checking.charCodeAt(0)) {
//       // console.log(x.toLowerCase(0))
//       return x.replace();
//    };
// })

// let SecArr = (checkUpper(FirstArr()));
// SecArr = SecArr.filter(function (element) {
//    return element !== undefined;
// });

// SplitFirstArr.forEach(function (elem = "", i) {
//    SplitFirstArr[i];
//    (function FastCheck(nums) {
//       nums = 0;
//       for (/* let index = nums */; nums < SecArr.length; nums++) {
//         if (SplitFirstArr[i].includes(`${SecArr[nums]}`)) {
//          SplitFirstArr[i] = `${SecArr[nums] + ','}`
//          }
//       };
//    })()   
// })

// var SplitFirstArrJoin = SplitFirstArr.join(' '); 

// console.log(SplitFirstArrJoin)
// ___________________________________________________________
// 6.

// function hello(morning, dinner, evening, name) {
//    let now = new Date();
//    if (now.getHours() >= morning && now.getHours() <= dinner) {
//       alert(`Доброе утро,${name}!`);
//    }
//    if (now.getHours() >= dinner && now.getHours() <= evening) {
//       alert(`Продуктивного, ${name}!`);
//    } else {
//       alert(`Хорошего вечера,${name}!`);
//    }
// }

// function helloUser(morning, dinner, evening, name) {
//    hello(morning, dinner, evening, name);
// }
// helloUser(5, 12, 15, 'Max');

// ___________________________________________________________
// 7 - 8.

let arr = [];

function filterArgs(arrg, elem) {
   while (arrg.length < 100) {
      arrg.push(++elem)
   }
   arrg.forEach(function (item, i) {
      function addSomeAge(child, young, strong, old) {
         if (arr[i] < 18 && arr[i] > 0) {
            arr[i] = arr[i] + child;
         }
         if (arr[i] <= 30 && arr[i] >= 18) {
            arr[i] = arr[i] + young;
         }
         if (arr[i] < 55 && arr[i] > 30) {
            arr[i] = arr[i] + strong;
         }
         if (arr[i] > 50) {
            arr[i] = arr[i] + old;
         }
      };
      addSomeAge(' юный', ' молоой', ' взрослый', ' Pazhiloy Pavuk')
   });
}

// ___________________________________________________________
// 8.
function getNames(name, age, arr) {
   filterArgs(arr, 0);
   log(arr)
   arr.forEach(function (elem = '', i) {
      arr[i];
      if (age === i) {
         console.log(`${name} имеет возраст ${age}, и он ${arr[i].replace(/[^a-zа-яё]/gi, '')}.`)
      }
   });
}
getNames('Max', 45, arr)