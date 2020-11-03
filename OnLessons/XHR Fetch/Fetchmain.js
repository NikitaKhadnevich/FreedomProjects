const reqURL = 'https://jsonplaceholder.typicode.com/users'


function sendReq(method, url, body = null) {
   return fetch(url, {
      method: method,
      body: null,
      headers: headers = {
         'Content-Type': 'application/json'
      }
   }).then(Response => Response.json())
}

function createReq(method, url, body = null) {
   return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers = {
         'Content-Type': 'application/json'
         }
      }).then(Response => Response.json())
}

function deleteReq(method, url, body = null) {
   return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers = {
         'Content-Type': 'application/json'
      }
   }).then(Response => Response.json())
}




const userMax = {
   name: 'max',
   age: 22
}

const userMax2 = {
   name: 'max',
   age: 222
}

sendReq('GET', reqURL)
   .then(mydata => console.log(mydata[0]))
   .catch(myerr => console.log(myerr))


/* setTimeout(() =>  */createReq('POST', reqURL, [userMax, userMax2])
   .then(mydata => console.log(mydata))
   .catch(myerr => console.log(myerr))/* , 2000).then */

deleteReq('DELETE', reqURL, userMax)
   .then(mydata => console.log(mydata))
   .catch(myerr => console.log(myerr))

// sendReq('DELTE', reqURL, userMax)
//    .then(mydata => console.log(mydata))
//    .catch(myerr => console.log(myerr))






// sendReque('GET', reqURL)
//    .then(data => console.log(data, 'Нет ошибок'))
//    .catch(err => console.log(err + ' <=ТЫ допустил ошибку тут'))

// const body = {
//    name: "Ervin Howell",
//    website: "anastasia.net",
// }