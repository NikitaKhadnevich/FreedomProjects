const reqURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// xhr.open('GET', reqURL)

// xhr.onload = () => {
//    if (xhr.status >= 400) {
//       console.log('Ошибка клиента или сервера')
//    } else {
//       console.log('Нет ошибки')
//    }
//    console.log(JSON.parse(xhr.response))
// }
// // xhr.responseType = () =>'json'
// xhr.onerror = () => {
//    console.log(xhr.response)
// }

// xhr.send() 
/* Так выглядит "ПОд капотом" запрос на сервер и выдача его результата в объектом
*/
// Promise */

function sendReque(metod, url, body) {
   return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest()

      xhr.open(metod, url)

      xhr.responseType = 'json'
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onload = () => {
         if (xhr.status >= 400) {
            reject(xhr.response)
         } else {
            resolve(xhr.response)
         }
     }
      xhr.onerror = () => {
         console.log(xhr.response)
      
      }
      xhr.send(JSON.stringify(body))
   })   
}

const body = {
   name: "Ervin Howell",
   website: "anastasia.net",
}

sendReque('POST', reqURL, body)
   .then(data => console.log(data, 'Нет ошибок'))
   .catch(err => console.log(err + ' <=ТЫ допустил ошибку тут'))










