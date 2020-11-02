const reqURL = 'https://jsonplaceholder.typicode.com/users'

fetch('serv.json') 
   .then(response => {
      console.log(JSON.parse(response));
   })








// sendReque('GET', reqURL)
//    .then(data => console.log(data, 'Нет ошибок'))
//    .catch(err => console.log(err + ' <=ТЫ допустил ошибку тут'))

// const body = {
//    name: "Ervin Howell",
//    website: "anastasia.net",
// }