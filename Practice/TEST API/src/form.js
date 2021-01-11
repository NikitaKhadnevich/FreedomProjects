l = (result) => {
   console.log(result);
}// 

let baseURL = 'http://localhost:3000/users'

function createValueAccum(obj) {
    var formData = new FormData(document.forms.person);
    formData.forEach(function(value, key){
        obj[key] = value;
    });
}

Отправить.addEventListener('click', createNewUser);

async function createNewUser(e, myForm) {
    myForm = {}
    e.preventDefault();
    createValueAccum(myForm);
    letPOST(baseURL, myForm);
    await getUsers(baseURL);
    renderUser()
}

function letPOST(URL, obj) {
    return axios.post(URL, obj)
    .then(res => {
    console.log(res); // Результат ответа от сервера
    })
    .catch(err => new Error('Ошибка в запросе POST'));
}


Исправить.addEventListener('click', correctUser);

async function correctUser(e, myForm) {
    myForm = {}
    e.preventDefault();
    createValueAccum(myForm);
    letPUT(baseURL, myForm, 1);
    await getUsers(baseURL);
    renderUser()
}

function letPUT(URL, obj, id) {
    return axios.put(URL + `/${id}` , obj)
    .then(res => {
    console.log(res); // Результат ответа от сервера
    })
    .catch(err => new Error('Ошибка в запросе PUT'));
}

async function getUsers(url) {
    try {
    let res = await fetch(url);
    return await res.json();
    }
    catch (error) {
    throw new Error(`Error status:`);
    }
}  

async function renderUser() {
    let myUsers = await getUsers(baseURL)
    l(myUsers)
    let html = ''
    for (let index = 0; index < myUsers.length; index++) {
        let elem =  myUsers[index];
        let segment = 
            `<div class="user" data-numb="${index}">
            <h2>${elem.name}</h4>
            <h4>${elem.age}</h4>
            <h4>${elem.status}</h4>
            <button>Delete</button> 
            </div>`;
        html = html + segment
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }
}renderUser()





