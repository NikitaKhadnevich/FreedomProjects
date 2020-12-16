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

class Animal {
   constructor(predator, herbivores) {
      this.type = predator;
   }
}

class Cat extends Animal {
   constructor(type, kind, name, age) {
      super(type);
      this.kind = kind;
      this.name = name;
      this.age = age;
   }
}

class Dog extends Animal {
   constructor(type, kind, name, age) {
      super(type);
      this.kind = kind;
      this.name = name;
      this.age = age;
   }
}

class Cow extends Animal {
   constructor(type, kind, name, age) {
      super(type);
      this.kind = kind;
      this.name = name;
      this.age = age;
   }
}

let cat = new Cat('Хищник', 'Кот', 'Барсик', 5)
let dog = new Dog('Хищник', 'Собака', 'Бим', 8)
let cow = new Cow('Травоядная', 'Корова', 'Савушка', 14)

Animal.prototype.createAgeCount = function() { /* Нужно подумать, а не дбавить ли в прототип КЛАССА функцию?? */
   for (var prop in this) {
      if (this[prop] < Infinity) {
         return this[prop]
      }
   }
}

function massive(...args) { // args — имя массива
   let sum = 0;
   for (let arg of args) sum += arg;
   return sum;
}

let xxx = massive(cat.createAgeCount(), dog.createAgeCount(), cow.createAgeCount())
l(xxx)








