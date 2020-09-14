// Задание на 2 урок
const fru = ['orange' , 'banana' , 'pineapple' , 'grapes']
let fru2 = fru.slice();
console.log(fru2)


//____________________________________

let vege = ['Carrot' , 'Potato' , 'Tomato' , 'Cabbage']
let getSting = vege.join()
console.log(getSting)

//____________________________________
const sum = [1, 2, 3, 4, 5]
sum2 = 0;
for (let i = 0; i < sum.length; i++) {
    sum2 += sum[i]
}
console.log(sum2)


//____________________________________

let lang = ['php' , 'php' , 'css' , 'css' , 'script' , 'script' , 'html' , 'html' , 'java']
let lang2 = lang.slice()
lang2.sort()
for (let i = 0; i < lang2.length; i++) {
    if (lang2[i] == lang2[i+1]) {
        lang2.splice(0, lang2[i+1])   
        // не совсем понимаю как удалить каждый итый элемент условия if
    }
}
console.log(lang2)


let lang = ['php' , 'php' , 'css' , 'css' , 'script' , 'script' , 'html' , 'html' , 'java']
lang = lang.filter(function (item, pos) {
            return lang.indexOf(item) == pos;
            });
console.log(lang)

// //____________________________________
let aa = [1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8]
function Getfiltr(a) {
  for (var b=1, i=1; b<aa.length; ++b) {
    if (aa[b] !== aa[b-1]) {
      aa[++i] = aa[b];
    }
  }
  aa.length = i; //Отличия var от let!!!!
  return aa;

}
console.log(Getfiltr())


let arr = [1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8]
uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
})
console.log(uniqueArray)
//____________________________________

const falsyArray = [NaN, 0, 7, false, -17, '', undefined, 99, null]
    for (let i=1; i<falsyArray.length; ++i) {
        if (Boolean(falsyArray[i]) == true) {
            console.log(falsyArray[i])
        }
        
}


const falsyArray = [NaN, 0, 7, false, -17, '', undefined, 99, null]
function bouncer(arr) {
  return falsyArray.filter(Boolean);
}
bouncer(falsyArray);
console.log(bouncer())

//____________________________________

let someNews = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже"
let anyNews = someNews.replace(/,/gi, ' ,')
newBlock = anyNews.split(' ');
newBlock2 = anyNews.split(' ');
newBlock2.sort()

newMas = newBlock.slice(6,10);
newMas.splice(3, 1, 'пришли', ':')

newMas2 = newBlock2.slice(1, 3)
newMas2.reverse()

newMas3 = newBlock2.slice(4, 7)
newMas3JO = newMas3.join(', ')

const FinalBlock = newMas.concat(newMas2, newMas3JO);

newMasString = FinalBlock.join(' ');
console.log (newMasString)

//____________________________________

написать функцию, которая аргументом принимает имя и
// здоровается с пользователем;
function hello (name) {
    alert(`Привет, ${name}`)
}
console.log(hello('Max'))
// //____________________________________

// написать функцию нахождения максимального/
// минимального числа в массиве;
const x = [1, 14, 4, 22, 44, 11, 23]
function GetMaxMin () {
  let y = x.sort()
  let z = ["Меньшее число - ", y[0], "; большее число - ", y[y.length - 1]]
  alert(z.join(''))
}
GetMaxMin()

const x = [1, 14, 4, 22, 44, 11, 23]
function w () {
x.max = function(array){
    return Math.max.apply( Math, x);};
x.min = function(array){
    return Math.min.apply( Math, x);};
    let z = ["Меньшее число - ", x.min(), "; большее число - ", x.max()]
  alert(z.join(''))
}
w()
// //____________________________________
// написать функцию калькулятор, которая запрашивает у
// пользователя данные в таком порядке: число - действие -
// число - и в зависимости от действия - производит
// соответствующее вычисление

function DoCac () {
    let a = prompt('Первое число','');
    let c = prompt('Какой оператор?','');
    let b = prompt('Второе число','');
switch(c) {
    case "+" : alert(+a + +b);  break;
    case "-" : alert(a - b);  break;    /*проблема с вычислениями    */
    case "*" : alert(a * b);  break;
    case "/" : alert(a / b);  break;
     default : alert("Ошибка!!!");
    }
}
DoCac()

// if (typeof a == 'number' && typeof b == 'number' && c == '+') {
// alert(+a + +b);
// }