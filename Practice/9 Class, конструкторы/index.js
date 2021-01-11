l = (result) => {
   console.log(result);
}// 

// 2. ______________________________________________________________________________
// Классический способ написания
// let max = {
//    name: 222,
//    foo() {
//       l(this.name)
//    }
// }

// function Digital(type) {
//    this.type = type
// }

// function Photo(type, mirror) {
//    Digital.apply(this, arguments);
//    this.mirror = mirror;
// }
// Photo.prototype.showInfo = function() {
//    l(`Это ${this.type} и она ${this.mirror}`)
// }

// function PhotoPref(type, mirror, sensor, weight) {
//    Photo.apply(this, arguments);
//    this.sensor = sensor;
//    this.weight = weight;   
// }
// PhotoPref.prototype = Object.create(Photo.prototype)
// PhotoPref.prototype.showFoo = function () {
//    l(max.foo.apply(max))
// }

// let myCamera = new PhotoPref('Digital Camera', 'with mirror' , 'DSLR' , '564w');
// myCamera.showFoo()
// myCamera.showInfo()
// l(myCamera)

// _____________________________________________ 
// Переписываем на новый синтаксис
// class Digital {
//    constructor(type) {
//    this.type = type;
//    }
// }
// Digital.prototype.showInfo = function () {
//    l(`Это ${this.type}`)
// }

// class Photo extends Digital {
//    constructor(type, sensor, status) { /* Создаем Конструктор с ПАРАМЕТРАМИ РОДИТЕЛЯ и СВОИМИ */
//       super(type); /* через super ЗАБИРАЕМ у РОДИТЕЛЯ необходимые ПАРАМЕТРЫ */
//       this.sensor = sensor; /* задаем СВОИ параметры */
//       this.status = status
//    }/* Через extends мы также ЗАБРАЛИ и МЕТОДЫ РОДИТЕЛЯ */
// }
// Photo.prototype.showStatus = function () {
//    l(`Статус этой камеры ${this.type}`)   
// }

// let myCamera = new Photo('Camera', 'DSLR', 'Top');
// let myDigital = new Digital('Camera');
// myCamera.showStatus()
// _____________________________________________ 

// class Animal {
//    constructor(predator, herbivores) {
//       this.type = predator;
//    }
// }

// class Cat extends Animal {
//    constructor(type, kind, name, age) {
//       super(type);
//       this.kind = kind;
//       this.name = name;
//       this.age = age;
//    }
// }

// class Dog extends Animal {
//    constructor(type, kind, name, age) {
//       super(type);
//       this.kind = kind;
//       this.name = name;
//       this.age = age;
//    }
// }

// class Cow extends Animal {
//    constructor(type, kind, name, age) {
//       super(type);
//       this.kind = kind;
//       this.name = name;
//       this.age = age;
//    }
// }

// let cat = new Cat('Хищник', 'Кот', 'Барсик', 5)
// let dog = new Dog('Хищник', 'Собака', 'Бим', 8)
// let cow = new Cow('Травоядная', 'Корова', 'Савушка', 14)

// Animal.prototype.createAgeCount = function() { /* Нужно подумать, а не дбавить ли в прототип КЛАССА функцию?? */
//    for (var prop in this) {
//       if (this[prop] < Infinity) {
//          return this[prop]
//       }
//    }
// }

// function massive(...args) { // args — имя массива
//    let sum = 0;
//    for (let arg of args) sum += arg;
//    return sum;
// }

// let xxx = massive(cat.createAgeCount(), dog.createAgeCount(), cow.createAgeCount())
// l(xxx)


// .2 Работник (Worker) _________________________________________________________
// class Worker {
//    constructor(name, surname, rate, days) {
//       this.name = name,
//       this.surname = surname
//       this.days = days,
//       this.rate = rate
//    }
// }

// Worker.prototype.getSalary = function() {
//    l(this.days * this.rate)
// }
// Worker.prototype.getFullName = function() {
//    l(`${this.name} ${this.surname}`)
// }

// const worker = new Worker('Vadim', 'Skvosnickiy', 21, 35);

// class Boss extends Worker {
//    constructor(name, surname, rate, days, workers) {
//       super(name, surname, rate, days)
//       this.workers = workers
//    }
// }
// Boss.prototype.getSalary = function() {
//   return this.rate * this.days * this.workers
// }

// const boss = new Boss('Max' , 'Spencer' , 35, 26, 30)
// l(boss)
// l(boss.getSalary())

// class HardWorker extends Worker {
//    constructor(name, surname, rate, days, overrate) {
//       super(name, surname, rate, days, overrate)
//       this.overrate = overrate
//    }
// }
// const hardworker = new HardWorker('Max', 'Bern', 21, 45, 41)
// l(hardworker)

// hardworker.getFullName()
// hardworker.getSalary()


// // const hardworker = {
// //    name: 'Jax',
// //    surname: 'Valiant',
// //    days: 25,
// //    rate: 45,
// // }


// // worker.getFullName.bind(hardworker)()
// // worker.getSalary.bind(hardworker)()

// .3 MyString _________________________________________________________

// class MyString {
//    constructor() {

//    }
// }
// MyString.prototype.reverse = function(string) {
//   return string.split('').reverse().join('');
// }

// MyString.prototype.ucFirst = function(string) {
//    return string[0].toUpperCase() + string.slice(1);
// }
// MyString.prototype.ucWords = function(string) {
//    return string.toLowerCase().split(' ')   
//    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//    .join(' ');
// };

// let str = new MyString()
// // l(str.ucWords('abc abcd abcde'))
// // l(str.reverse('abcde'))
// // l(str.ucFirst('abcde'))

// // .3 Validator _________________________________________________________

// class Validator {
//    constructor() {

//    }
// }

// Validator.prototype.isEmail = function(str) {
//    if (str.includes('@')
//    && str.includes('.')
//    && str[0] != ('.') && ('@')
//    && str[str.length-1] != ('.') && ('@')) {
//       return true
//    }
//    else {
//       return false
//    }
// }

// Validator.prototype.isDomain = function(str) {
//    let arr = str.split('.')
//    return arr[arr.length - 1]
// }

// Validator.prototype.isDate = function(str) {
//    var now = new Date();
//    return now.toLocaleDateString()
// }

// Validator.prototype.isPhone = function(str) {
//    let arr = str.split(' ');

//    if (
//    arr[0].substring(0).includes('+') &&
//    arr[1].substring(0).includes('(') &&
//    arr[1].substring(arr.length).includes(')') &&
//    arr[2].replace(/[^0-9]/g, '').length > 2)
//    {
//       l('Number is correct')
//    } else {
//       l('Enter correct type Number!')
//    }
// }

// let valid = new Validator
// valid.isPhone('+375 (29) 154-23-45')
let a, b, c, x, y, z;

[a, b] = [c] = [1, 2, 3, 4];
( {x} = {y,z} = {x: 4, y: 5, z: 6} );

console.log(a, b, c); // 1 2 1
console.log(x, y, z); // 4 5 6