l = (result) => {
   console.log(result)
}


// Метод Slice - копирует выбранную часть и возвращает новую в виде НОВОГО массива//
let arr = ['f', 2, 12, 3, 'ac', 'ff']
let newArr = arr.slice(2)
let newArr2 = arr.slice(-4,-1)
// l(newArr)
// l(newArr2)


// Метод Splice - удаляет элементы ИЗМЕНЯЯ сам массив//
letSplice = ['sds', 2, 34, 'dd', 18]
// l(letSplice.splice()) //  Удалит весь массив
// l(letSplice.splice(0)) //  Сохранит весь массив
// l(letSplice.splice(2)) //  Выведет все, что ПОСЛЕ 2-ГО до конца
// l(letSplice.splice(0, 3)) // Выведет все, что С 0 И ДО 3-ГО
// l(letSplice.splice(-2)) // Выведет последние 2 эл-та массива
letSplice.splice(0, 2, 'Frst', 'Two') // Сначала удалит все с 0 до 2, затем добавит в начало последующие эл-ты


// Метод Splite - работает со строками, для преобразования их массив/
let myString = 'не работает напрямую с массивами. Тем не менее, сначала можно преобразовать элементы массива в строки и уже после применить'
// l(myString.split(''))


// Метод Join/toString - Преобразует массив в строку, Join можно задать разделитель/
// l(letSplice.join())
// l(letSplice.toSting())


//Метод  Concat - объединяет массивы в один большой
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6]
let arr3 = [4, 5, 6]
let arr4 = arr1.concat(arr2, arr3)


//Метод  Map - прогоняет элементы массива и преобразует их после необходимых вычеслений в новый массив
let oldArr = [4.99, 1.99, 2.99]
let mapArr = oldArr.map(function(price) {
   return price * 2
})
// l(mapArr)
let mapArr2 = oldArr.map(price => price * 2)
// l(mapArr2)
mapArr3 = []
oldArr.forEach((element,item) => {
   mapArr3.push(element * 2)
});
// l(mapArr3)


//Метод  Filter - фильтрует элементы массива и преобразует их после необходимых вычеслений в новый массив
let filterArr1 = oldArr.filter(function(filter) {
   return filter < 3
})
// l(filterArr1)

let filterArr2 = oldArr.filter(filter => filter < 3)
// l(filterArr2)

filterArr3 = []
oldArr.forEach((element,item) => {
   if (element < 3) {
   filterArr3.push(element * 2)
   }
});
// l(filterArr3)

//Метод Sort/Reverse - сортирует элементы массива либо по умолчанию, либо по заданым параметрам по своей сути параметры a  и  b в функциях ниже = это пара из массива для сравнения. Происходит сопоставление и присваиваетя либо -1 либо, либо 0, либо 1 - в зависимости кто в паре больше/меньше/равно.

let sortArr = [7, 23, 440, 3.9, 2.2]
// l(sortArr.sort())
// l(sortArr.reverse()) // При такой сортиовке с ЧИСЛАМИ не полчить верного результата на 100%, ибо метод сорт работает с ЛЕКСИКОГРАФИЧЕСКОЙ сортировкой, а нам нужна математическая сортировка.
createNumberSortUp = (a,b) => {
   return a-b
}; //l(sortArr.sort(createNumberSortUp)) // По возрастанию
createNumberSortDown = (a,b) => {
   return b-a
}; //l(sortArr.sort(createNumberSortDown)) //По убыванию
createNumberSortRandom = (a,b) => {
   return 0.5 - Math.random()
}; //l(sortArr.sort(createNumberSortRandom)) //Рандомный

let peoples = [
   {name: "George", age: 32, retiredate: "March 12, 2014"},
   {name: "Edward", age: 17, retiredate: "June 2, 2023"},
   {name: "Christine", age: 58, retiredate: "December 20, 2036"},
   {name: "Sarah", age: 62, retiredate: "April 30, 2020"}
]

createAgeSortUp = (a,b) => {
   return a.age - b.age
}; //l(peoples.sort(createAgeSortUp)) // Сортировка по возрастанию(возраст)

createNameSortUp = (a,b) => {
   let nameA = a.name.toLowerCase()
   let nameB = b.name.toLowerCase()
   if (nameA < nameB) {
      return -1
   }
   if (nameA > nameB) {
      return 1
   }
   if (nameA = nameB) {
      return 0
   }
}; //l(peoples.sort(createNameSortUp))  Сортировка по возрастанию(имя)

createTimeSortUp = (a,b) => {
   let dateA = new Date(a.retiredate)
   let dateB = new Date(b.retiredate)
   if (dateA < dateB) {
      return -1
   }
   if (dateA > dateB) {
      return 1
   }
   if (dateA = dateB) {
      return 0
   }
}; //l(peoples.sort(createTimeSortUp)) Сортировка по возрастанию(дата)