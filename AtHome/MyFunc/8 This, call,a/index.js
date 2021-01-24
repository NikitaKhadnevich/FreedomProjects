l = (result) => {
   console.log(result);
}// 

// var user = {
//    name: 'max',
//    age: 25,
//    hello() {
//       l(`hello ${this.name}, ${this.age}`)
//       l(this)
//    }
// }
// user.hello();

// let alex = user.hello
// alex.call(user)

// .1 _________________________________________________________

// function sumEvenArguments() {
//    let sum = 0;
//    let nums = [].slice.call(arguments);
//    for (let index = 0; index < nums.length; index++) {
//       if (nums[index] % 2 === 0) {
//          sum = sum + nums[index];
//       }
//    }
//    return sum;
// }
// l(sumEvenArguments(1, 2, 3, 88)) // 8

// .2 _________________________________________________________
// var elem = document.getElementById('elem1');
// var elem2 = document.getElementById('elem2');
// var elem3 = document.getElementById('elem3');

// function func() {
//    l(this.value);
// }

// func.call(elem) /* func вызывается - ИСПОЛЬЗУЯ КОНТЕКСТ(значение this) - elem */
// let func2 = func.bind(elem)
// func2()


{/* 2. _________________________________________________________  */}
// var elem2 = document.getElementById('elem2');

// function func3(surname, name) {
//    l(this.value + ', ' + surname + ' ' + name);
// }
// func3.call(elem2, 'Иван', 'Иванов') /* Вызываем func3 ИСПОЛЬЗУЯ КОНТЕКСТ elem2 и добавляем АРГУМЕНТЫ*/

{/* 3. _________________________________________________________  */ }
// var elem2 = document.getElementById('elem2');

// function func3(surname, name) {
//    l(this.value + ', ' + surname + ' ' + name);
// }
// func3.apply(elem2, ['Иван', 'Иванов']) /* Вызываем func3 ИСПОЛЬЗУЯ КОНТЕКСТ elem2 и добавляем АРГУМЕНТЫ*/


{/* 4. _________________________________________________________  */ }
// var elem3 = document.getElementById('elem3');

// function func(surname, name) {
//    l(this.value + ', ' + surname + ' ' + name);
// }

// var hello = func.bind(elem3, 'Иванов', 'Иван')
// hello()
// var hello2 = func.bind(elem3, 'Петров', 'Пётр')
// hello2()

{/* 4. _________________________________________________________  */ }  

const hum = {
   name: 'Alex',
   age: 25,
   logInfo: function(job, phone) {
      console.group(`${this.name} info:`)
      console.log(`My name is ${this.name}`)
      console.log(`My age is ${this.age}`)
      console.log(`My Job is ${job}`)
      console.log(`My phones is ${phone}`)
      console.groupEnd()
   }
}
// hum.logInfo('backer', 1488)

const Ann = {
   name: 'Anna',
   age: 29,
}
// hum.logInfo.call(Ann, 'Front', 455)
// hum.logInfo.apply(Ann, ['Front', 455]) 
//let AnnLog = hum.logInfo.bind(Ann, 'Front', 455); AnnLog()
// вызвать hum.loginfo - используя контекст(this) - Ann

// Не стоит забывать про потерю контекста при вызове на динамических обработчиках
// (addEventListener). Пример

var obj = {
   name: 'build',
   date: 1987,
   info() {
      l(`${this.name} at ${this.date}`)
   }
}
obj.info()

const button = document.getElementById('list')
l(button)

button.addEventListener('click' , obj.info) // Получим undefind
// для передачи НУЖНО оборачивать в функцию чтобы было ЗАМЫКАНИЕ:
button.addEventListener('click' , function handleClick() {
   obj.info()
})






// class Person {
//    constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//    }
// }

// let person = new Person('Brad', 'Pitt');

// console.log(person); //