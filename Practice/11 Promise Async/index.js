l = (result) => {
   console.log(result);
}// 


// 2_________________________________________________________
// function time(ms) {
//    var promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve()
//       }, ms);
//    })
//    return promise
// }

// time(2000)
// .then(() => l(1))
// .then(() => time(2000))
// .then(() => l(2))
// .then(() => time(2000))
// .then(() => l(3))


// 2.5_________________________________________________________

// async function time(ms) {
//    await new Promise((resolve, reject) => setTimeout(resolve, ms));
//    let frst = 1
//    await l(frst)
//    await new Promise((resolve, reject) => setTimeout(resolve, ms));
//    await l(frst+1)
//    await new Promise((resolve, reject) => setTimeout(resolve, ms));
//    await l(3)
// }
// time(2000) 

// 3._________________________________________________________

// function createGenerator() {
//    l('Start Number Generator...')
//    number = Math.ceil(Math.random()*10)
//    return number 
// }

// let promise = new Promise((resolve, reject) => {
//    createGenerator()
//    if (number > 1 && number < 6) {
//       setTimeout(() => {
//          resolve()
//       }, 2000);
      
//    } else {
//       setTimeout(() => {
//          reject()
//       }, 2000);
//    }
// })
// promise
// .then(() => l(`${number} - Correct number`))
// .then(() => new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve()
//       }, 2000);
// }))
// .then(() => l('I want some noise'))
// .catch(() => l(`${number} - Wrong number`))
// 4. _________________________________________________________
// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       const number = 2
//       resolve(number)
//    }, 2000);
// })
// promise.then(numberSquare => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          numberSquare = numberSquare*numberSquare
//          alert(numberSquare)
//          resolve(numberSquare)
//       }, 2000)
//    })
// })
// .then(numberEnd => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          numberEnd = numberEnd*numberEnd
//          alert(numberEnd)
//          resolve(numberEnd)
//       }, 2000);
//    })
// })
// _________________________________________________________
// async function loadJson(url) { // (1)
//    try {
//       let response = await fetch(url); // (2)
//       if (response.status == 260) {
//          let json = await response.json(); // (3)
//          l(json)
//          return json;
//       }
//       throw new Error(`response.status + Наверное что-то произошло`);
//    } catch (error) {
//       alert(error)
//    }
// }

// loadJson('https://jsonplaceholder.typicode.com/users')

// _________________________________________________________
// class HttpError extends Error {
//    constructor(response) {
//      super(`${response.status} for ${response.url}`);
//      this.name = 'HttpError';
//      this.response = response;
//    }
//  }

//  async function loadJson(url) {
//     let response = await fetch(url)
//     if (response.status == 200) {
//        return response.json()
//     } else {
//        throw new HttpError(response)
//     }
//  }

//  async function demoGithubUser() {
//     let user;
//     while(true) {
//       let name = prompt('Введите логин',  'maximus');
//       try {
//          user = await loadJson(`https://api.github.com/users/${name}`)
//          break;
//       } catch (err) {
//          if (err instanceof HttpError && err.response.status == 404) {
//             alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//          } else {
//             throw err
//          }
//       }
//    }
//    alert(`Полное имя: ${user.name}.`);
//    return user;
//  }
//  demoGithubUser();
// _______________________________________________________

