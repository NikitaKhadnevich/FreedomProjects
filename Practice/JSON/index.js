l = (result) => {
   console.log(result);
}// 

const checkForError = response => {
   if (!response.ok) throw Error(response.statusText);
   return response.json();
 };
//  fetch("https://jsonplaceholder.typicode.com/todos/100000")
//   .then(checkForError)
//   .then(data => console.log("data", data))
//   .catch(error => {
//     console.log("error", error);
//   });

const personazh = {
   name: 'GadZila'
}
const personazh2 = {
   name: 'GadZila',
   age: 25
}
// _____________________________________________________________________
// GET НА XML C PROMISE

// function fetch(method, url) {
//    return new Promise((resolve, reject) => { 
//       const xhr = new XMLHttpRequest();
//       xhr.open(method, url)
//       xhr.onload = function() {
//          if (this.status === 200) {
//             return  resolve(this.response);
//          } else {
//             error = new Error(`Ошибка статуса: ${this.statusText}`);
//             eror.code = this.status;
//             return reject(error)
//          }
//       }
//       xhr.onerror = function() {
//          return reject(new Error('Network Error'))
//       }
//       xhr.send()
//    })
// }
// const user = fetch('GET', 'http://localhost:3000/users')
// .then(data => console.log(JSON.parse(data)))
// .catch(error => console.log(error))

// _____________________________________________________________________
// POST НА XML C PROMISE

// function postPromise(method, url, obj = null) {
//    return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(method, url)
//       xhr.response = 'json'
//       xhr.setRequestHeader('Content-type', 'application/json')
//       xhr.onload = function() {
//          if (this.status === 200) {
//             return resolve(this.response)
//          } else {
//             error = new Error(`Ошибка статуса: ${this.statusText}`)
//             error.code = this.status
//             return reject()
//          }
//       }
//       xhr.onerror = function() {
//          return reject(new Error('Network Error'))
//       }
//       xhr.send(JSON.stringify(obj))
//    })
// }
// postFetch('POST', 'http://localhost:3000/users', personazh)
// .then(data => console.tablele(JSON.stringify(data)))
// .catch(error => console.log(error))

// _____________________________________________________________________
// GET НА FETCH

// async function getFetch(url) {
//    try {
//       await fetch(url)
//       .then(response => response.json())
//       .then(user => l(user))
      
//    } catch (error) {
//       error = new Error('Network Error')
//    }
// }
// getFetch('http://localhost:3000/users')
// .catch(error = new Error(this.status))

// Get запрос на AXIOS
// axios.get('http://localhost:3000/users/3').then(res => {
//     console.log(res); // Результат ответа от сервера
// });

// _____________________________________________________________________
// POST НА FETCH/AWAIT

// async function postFetch(method, url, body = null) {
//    try {
//       const headers = {
//          'Content-Type': 'application/json'
//       }
//       await fetch(url,
//          {
//          method: method,
//          body: JSON.stringify(body),
//          headers: headers
//          })
//          await (response => {response.json()
//          })
//    } catch (error) {
//       throw new Error('Network Error')
//    }
// }
// postFetch('POST', 'http://localhost:3000/users', personazh)
// .then(data => l(data))
// .catch(error => l(error.status))

// Post запрос на AXIOS
// axios.post('http://localhost:3000/users/', {"Name": "Vova"}).then(res => {
//    console.log(res); // Результат ответа от сервера
// });

// _____________________________________________________________________
// DELETE НА FETCH/AWAIT

async function deleteFetch(method, url, id) {
   try {
      const headers = {
         'Content-Type': 'application/json'
      }
      await fetch(url + '/' + id,
         {
         method: method,
         headers: headers,
         })
         await (response => {response.json()
         })
   } catch (error) {
      throw new Error('Network Error')
   }
}
// deleteFetch('delete', 'http://localhost:3000/users', 5)
// .then(data => l(data))
// .catch(error => l(error.status))

// Delete запрос на AXIOS
// axios.delete('http://localhost:3000/users/5', {"Age": 44,}).then(res => {
//    console.log(res); // Результат ответа от сервера
// });

// _____________________________________________________________________
// PUT НА FETCH/AWAIT

async function patchFetch(method, url, id, data) {
   try {
      const headers = {
         'Content-Type': 'application/json'
      }
      await fetch(url + '/' + id,
         {
         method: method,
         body: JSON.stringify(
         {
            name: 'GOdZila TRUE',
            age: 1485
         }
         ),
         headers: headers,
         })
         await (response => {response.json()
         })
   } catch (error) {
      throw new Error('Network Error')
   }
}
// patchFetch('PUT', 'http://localhost:3000/users', 1)
// .then(data => console.log(data))
// .catch(error => l(error.status))


// Put запрос на AXIOS
// axios.put('http://localhost:3000/users/3', 
// {
//    "name": "Enotik",
//    "age": 25,
//    "status": "Poloskun"
// }).then(res => {
//    console.log(res); // Результат ответа от сервера
// });
