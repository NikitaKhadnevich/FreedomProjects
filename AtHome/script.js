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
    }
}
console.log(lang2)


// let lang = ['php' , 'php' , 'css' , 'css' , 'script' , 'script' , 'html' , 'html' , 'java']
// lang = lang.filter(function (item, pos) {
//             return lang.indexOf(item) == pos;
//             });
// console.log(lang)




// var res = [];
// newarr.sort();
// for(let i = 0; i < newarr.length; i++){
// if(newarr[i] != newarr[i+1]){
// res.push(newarr[i]);
// }
// }