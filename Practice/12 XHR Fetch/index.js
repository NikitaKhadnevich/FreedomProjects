const l = (result) => {
   console.log(result)
}

const reqURL = `https://jsonplaceholder.typicode.com/users` // Задаем URL API

// const xhr = new XMLHttpRequest()  // Создаем запрос
// xhr.open ('GET', reqURL) // Открываем шлюз
// xhr.send() //отправляем запрос
// xhr.onload = function() {
//    if (xhr.staus >= 400) {   // Прописываем обработчик ошибок доступа(отсутствие пользователя, поля)
//       console.error(xhr.response)
//    } else {
//       l(xhr.response) // Прогружаем ответ в строчном виде
//    }
// }
// xhr.responseType = 'json' // Парсим в JSON
// xhr.onerror = function() { // Прописываем обработчик ошибок именно NETWORK
//    console.log(xhr.response)
// }

// // Тоже самое на Promise
// // ____________________________


// function sendReq (metod, url) {
//    return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest()
//       xhr.open(metod, url)
//       xhr.response = 'json'
//       xhr.onload = function() {
//          if (xhr.status >= 400) {
//             reject(xhr.response)
//          } else {
//             resolve(xhr.response)
//          }
//       }   
//       xhr.onerror = function() {
//          reject(console.log('Ошибка, запрос не отработан'))
//       }
//       xhr.send()
//    })
// }
// sendReq('GET', reqURL)
//    .then(data => l(data))
//    .catch( err => l(err))

// // Метод POST 
// // ____________________________

const body = {
   name: 'Nikifor',
   age: 34,
   weight: 76,
}

// function sendReq (metod, url, body = null) { // Добавим само ТЕЛО метода POST
//    return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest()
//       xhr.open(metod, url)
//       xhr.response = 'json'
//       xhr.setRequestHeader('Content-type', 'application/json') // ВАЖНО!! УКАЗЫВАЕМ КОНТЕНТ ТАЙП!!!
//       xhr.onload = function() {
//          if (xhr.status >= 400) {
//             reject(xhr.response)
//          } else {
//             resolve(xhr.response)
//          }
//       }   
//       xhr.onerror = function() {
//          reject(console.log('Ошибка, запрос не отработан'))
//       }
//       xhr.send(JSON.stringify(body)) // Парсим в JSON наш элемент body
//    })
// }
// sendReq('POST', reqURL, body) //Добавляем в аргумент наш body для POST 
//    .then(data => l(data))
//    .catch( err => l(err))

// FETCH 
// ____________________________
//get -  запрос
// function sendReq (metod, url) {
//    return fetch(url) //  Возвращаем урлу
//    .then(response => {
//       return response.json() // парсим в json
//    })
// }
// sendReq('GET', reqURL)
// .then(data => console.table(data))
// ____________________________


// const block = document.getElementById('mytable')
// const block1 = document.getElementById('mytable1')
// const block2 = document.getElementById('mytable2')


// function sendReq (metod, url) {
//    return fetch(url) //  Возвращаем урлу
//    .then(response => {
//       return response.json() // парсим в json
//    })
// }
// sendReq('GET', reqURL)
// .then(data => function() {
//       for (let index = 0; index < data.length; index++) {
//          block.innerHTML = JSON.stringify(data[index].name)
//          block1.innerHTML = JSON.stringify(data[1].name)
//          block2.innerHTML = JSON.stringify(data[2].name)
//       }
// }())
// ____________________________
// post -  запрос

// const friend = {
//    name: 'Nikifr',
//    age: 34,
//    weight: 76,
// }

// function sendReq (metod, url) {
//    const headers = {
//       'Content-type': 'application/json'
//    }
//    return fetch(url, {
//       method: metod, // В Фетч передаем сам метод
//       body: JSON.stringify(friend), // Тут же можем и запарсить СТРОКУ
//       headers: headers //И задаем тип контента
//    }).then(response => {
//       return response.json() // парсим json в ОБЪЕКТ
//    })
// }

// sendReq('post', reqURL, friend) //Добавляем в аргумент наш body для POST 
//    .then(data => l(data))
//    .catch( err => l(err))

// ____________________________

let url = `https://jsonplaceholder.typicode.com/users`

// async function fetchText() {
//    let response = await fetch(url)
//    l(response.status)
//    if (response.status < 400) {
//       return data = await response.json()
//    }
//    if (response.status > 400) {
//       return error = new Error(`Error ${response.status}`)
//    }
// }
// fetchText()
// .then(data => l(data))
// .catch(error => l(error))

// getUsers()
// .then(data => console.table(data))
// .catch(error => l(error))  


let arr = [
   'https://www.freeiconspng.com/uploads/man-icon-png-29.png',
   'https://img.pngio.com/png-file-svg-male-circle-icon-transparent-png-349249-free-male-icon-png-840_881.png',
   'https://i7.pngflow.com/pngimage/981/336/png-businessperson-recruitment-organization-management-job-person-icon-company-service-monochrome-black-clipart.png',
   'https://evodoor.ru/wp-content/uploads/2019/02/img_507427-768x816.png'
]

// function chec() {
//    let count = 0
//    return function () {
//       return arr[count++]
//    }
// }
// let x = chec()


async function getUsers() {
   try {
   let res = await fetch(url);
   return await res.json();
   }
   catch (error) {
   throw new Error(`Error status:`);
   }
}  
//  

async function getFetch() {
   let users = await getUsers()
   let html = '';
   users.forEach((user, i) => {
      let htmlSegment = 
      `<div class="user" data-numb="${i}">
         <img src="${arr[i]} ">
         <h2>${user.username}</h2>
         <h4>${user.name}</h2>
         <div class="email"><a href="email:${user.email}">${user.email}</a></div>
      </div>`;
      html = html + htmlSegment
      if (arr[i] != undefined) {
         render(html)
      } 
   });
}
getFetch()

function render(element) {
   let container = document.querySelector('.container');
   container.innerHTML = element;
}

// // Разобраться с ошибками!!ы


