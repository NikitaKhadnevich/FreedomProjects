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
// var elem = document.getElementById('elem');

// function func() {
//       alert(this.value);
// }

// func.call(elem) /* Вызавать func ИСПОЛЬЗУЯ КОНТЕКСТ elem */
// let func2 = func.bind(elem)
// func2()


{/* 2. _________________________________________________________  */}
// var elem2 = document.getElementById('elem2');

// function func3(surname, name) {
//    alert(this.value + ', ' + surname + ' ' + name);
// }
// func3.call(elem2, 'Иван', 'Иванов') /* Вызываем func3 ИСПОЛЬЗУЯ КОНТЕКСТ elem2 и добавляем АРГУМЕНТЫ*/

{/* 3. _________________________________________________________  */ }
// var elem2 = document.getElementById('elem2');

// function func3(surname, name) {
//    alert(this.value + ', ' + surname + ' ' + name);
// }
// func3.apply(elem2, ['Иван', 'Иванов']) /* Вызываем func3 ИСПОЛЬЗУЯ КОНТЕКСТ elem2 и добавляем АРГУМЕНТЫ*/


{/* 4. _________________________________________________________  */ }
//    var elem3 = document.getElementById('elem3');

// function func(surname, name) {
//       alert(this.value + ', ' + surname + ' ' + name);
// }

// var hello = func.bind(elem3, 'Иванов', 'Иван')
// hello()
// var hello2 = func.bind(elem3, 'Петров', 'Пётр')
// hello2()

{/* 4. _________________________________________________________  */ }  


class Person {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
}

let person = new Person('Brad', 'Pitt');

console.log(person); //