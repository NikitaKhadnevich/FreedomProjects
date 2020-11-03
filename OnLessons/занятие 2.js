function ff (num) {
for (let i = 0; i <=num; i++) {
 console.log(i);
}
}
ff(100)

/*Вызов всех чисел до 100*/

function ff(num) {
	if(num == 1) {
		return num;
	}
  	console.log(num);
  	ff(num - 1)
}
ff(100);

/*рекурсия*/

function sum() {
  let count = 0;
  return function (a) {
    return count +=a;
  }
}  
const res = sum()


// let x = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < x.length; i++) {
// 	if (x[i] % 2 !== 0) {
// 	sum = sum + x[i]*x[i]
// }
// }
// console.log(sum)

let ss = "М".codePointAt(0)
let xx = "м".codePointAt(0)

function x() {
	let ss = "М".codePointAt(0)
 	let xx = "м".codePointAt(0)
 	 	if (xx - ss == 32) {
 			return xx==ss
 	 	} else {
 	 		return 
 	 	}
}
alert (x())

// let x = 'ТриКоняИвана'
// let y = x.slice(7);
// let z = x.substring(0,3);
// let w = z + y;
// alert (w)

// for(let чтоугодно of x[1]){
// 	console.log(чтоугодно)
// }

// function x () {
// 	let a = prompt('1','')
//     let b = prompt('2','')
//     if (a == NaN || b == NaN) {
// 		alert('Впишите число!');
//     } else if (a > b ) {
// 		alert ("a > b");
// 	} else {
// 		alert ("a < b");
// 	}
// }
// console.log(x())


// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

// let x = [1, 2, 3, 4, 5]

// sum = 0
// for (let i = 0; i < x.length; i++) {
//  	sum = sum + x[i] / x.length}
// console.log(sum)

// let x = [10, 20, 30, 50, 235, 3000]
//  	for (let i = 0; i < x.length; i++) {
//  		if 
//  	}

// // let  fruits = ['apple' , 'orange' , 'grapes' , 'banana']
// // let newArry [];

// // for (let i = 0; i < fruits.length; i++) {
// // 	console.log(i)
// // }
// // newArry[i] = fruits[i]

// // console.log(newArry)
// // _______________________________________

// // let nums = [1, 2, 3, 4, 5, 6,];
// // let sum = 0;

// // let newNums = []

// // for (let i = 0; i < nums.length; i++) {
// // 	sum = sum + nums[i];
// // }
// // console.log(sum)

// // _______________________________________

// // const arr = [1, 2, 3, 4, 5];
// // const plice = arr.splice(0, 2, 111, 222, 333);
// // // откуда     на сколько и       что

// // console.log(arr, plice)

// // _______________________________________

// // function getRand () {	
// // 	const randoNumb = Math.random() * 10;
// // 	const roundNumb = Math.round(randoNumb);
// // 	return roundNumb
// // }
// //  console.log(getRand())

// //__________________________________________\

// // function getHello (name , callBack) {
// // 	if (callBack) {
// // 		callBack(`Привет + ?{name}`)
// // 	}
// // }
// // getHello (name)

// const arrss = [1, -50, 100]

// function max (arr) {
// 	let max = 0;
// 	for (let i = 0; max < arr.length; i++) {
//  		if(arr[i] === max) {
//  			max = arr[i]
//  		}
// 	}
// return max;
// }

// console.log

// // _______________________________________

// for (key in obj) {
// 	console.log(key + ':' obj[])
// }

// const keys = object.keys(obj)
// const values = object.keys(obj)

// const = Object.getOwnPropertyNames(obj)






