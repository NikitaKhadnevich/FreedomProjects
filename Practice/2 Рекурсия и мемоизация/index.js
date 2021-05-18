const log = (result) => console.log(result)

// Рекурсия
// ________________________________________________
const a = 1;
function recur(num) {
  num = (num*5) - (num*3)

  console.log(num)

  if(num > 5000) {
    return console.table('Конец')     
  } // Условие остановки рекурсии

  recur(num)  // Вызов рекурсии
}
// recur(a);

// function recursion(numb, counter){
//    numb = numb + 100;
//    counter = --counter; // Само тело рекурсии - функция которая должна повторяться

//    console.log(`Осталось до конца рекурсии...`, counter)
//    console.log(`Целевой результат`, numb)
   
//    if(counter > 0) {
//       return recursion(numb, counter) // Рамки в которых выполняется реккрсия
//    } else {
//       return console.log(`Enough`) // Что деллать если выход из рамок
//    }
// }
// recursion(100, 3)


// Мемоизация
// ________________________________________________
const memo = () => {
   const cache = {} // Задается пустой объект для замыкания внутри memo
   return (n) => { // Создается функция
      if (n in cache) { //Производится проверка - если есть в объекте cache элемент со свойством N
         console.log('Fetching from cache...', n, cache);
         return cache[n] // Если есть - то выводится cache
      } else {
         console.log(`Calcul...`);
         result = n + 10
         cache[n] = result
         return result // Если нет - то выводится вычисление
      }
   }
}
const func2 = memo()
// console.log(func2(30))
// console.log(func2(30))
// console.log(func2(5))
// console.log(func2(5))

//______________
const sum = (param) => {
   return param += 5
}

const memofunc = (fn) => {
   const cache = {};
   return (...args) => {
      let n = args[0];
      if (n in cache) {
         console.log(`Fetching...`, n, cache)
         return cache[n];
      } else {
         let result = fn(n); // Калькулятором выступает стороняя функция (sum)
         cache[n] = result;
         console.log(`From cache`, result)
         return result
      }
   }
}
const newMemo = memofunc(sum)
// console.log(newMemo(20))
// console.log(newMemo(20))
// console.log(newMemo(22))
// console.log(newMemo(22))


//__________Мемоизация с рекурсией
const memoRecur = (fn) => {
   let cache = {};
   return (...arg) => {
      let n =  arg[0];
      if (n in cache) {
         console.log('Fetching...', n, cache)
         return cache[n];
      } else {
         let result = fn(n); // 1. Передаем параметром функцию рекурсии
         cache[n] = result
         console.log(`Calc...`, result, cache)
         return result
      }
   }
}

const recursFromMemo = memoRecur( // 2. Создаем функцию для проведения подсчетов - она же и есть аргумент для fn(n), где x - это число n. если функция ничего не возвращает, она возвращает аргумент
   (x) => {
      if (x === 0) {
         return 1;
      }
      else {
         return x * recursFromMemo(x - 1); // 3. Факториал.Происходит 4 * 3 * 2 = 24 каждый раз вызыввется функция x
      }
   }
)   
console.log(recursFromMemo(4))
console.log(recursFromMemo(5)) //  4.тут уже юзается кэш. Вызывается с аргументом 5  КЭШ который мы РАНЕЕ ВЫЧИСЛИЛИ с аргументом 4, и он равен 24
