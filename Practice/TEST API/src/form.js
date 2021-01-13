l = (result) => {
   console.log(result);
}// 

let container = document.querySelector('.container');
let user = document.querySelector('.user');
let formContainer = document.querySelector('.formContainer')

let baseURL = 'http://localhost:3000/users'

function createValueAccum(obj, name) {
    var formData = new FormData(document.forms.person);
    formData.forEach(function(value, key){
        obj[key] = value;
    });
}
send.addEventListener('click', createNewUser);

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
//________________________________________//


async function putformUser(e) {
    e.preventDefault();
    if(e.target.id === 'putBut') {
        let myUsers = await getUsers(baseURL)
        for (let index = 0; index < myUsers.length; index++) {
            let elem =  myUsers[index];
            let correctForm = `
            <form name="person" id="persons">
            <input id="names" name="name" placeholder="Название заметки">
            <input id="age" name="age" placeholder="Содержимое">
            <input id="status" name="status" placeholder="Дополнительная пометка">
            <input type="submit" id='saveChanges' data-numb="${e.target.dataset.numb}" value='Сохранить изменения'>
            <button id='skipChanges' data-numb="${e.target.dataset.numb}">X</button>
            </form>
        `
        formContainer.innerHTML = correctForm;
        }
    }
}

container.addEventListener('click', putformUser)

function letPATCH(URL, obj, id) {
    return axios.patch(`${URL}` + `/` + `${id}` , obj)
    .then(res => {
    console.log(res); // Результат ответа от сервера
    })
    .catch(err => new Error('Ошибка в запросе PUT'));
}

function createValueAccums(obj) {
    var formData = new FormData(document.forms.persons);
    formData.forEach(function(value, key){
        obj[key] = value;
    });
}

function checkForm(correctForm) {
    if (correctForm.name == '') {
        delete correctForm.name
    }
    if (correctForm.age == '') {
        delete correctForm.age
    }
    if (correctForm.status == '') {
        delete correctForm.status
    }
    return correctForm
}

async function saveChanges(e, correctForm) {
    e.preventDefault();
    if(e.target.id === 'saveChanges') {
        correctForm = {}
        createValueAccums(correctForm);
        checkForm(correctForm)
        await letPATCH(baseURL, correctForm, e.target.dataset.numb);
        await getUsers(baseURL);
        renderUser()
        formContainer.innerHTML = ''
    if (e.target.id === 'skipChanges') {
        formContainer.innerHTML = ''
    }
}
}

formContainer.addEventListener('click', saveChanges)
//________________________________________//

async function letDELETE(URL, id) {
    return axios.delete(`${URL}` + `/` + `${id}`)
    .then(res => console.log(res))
    .catch(err => new Error('Ошибка в запросе DELETE'))
}

async function deleteUser(e, myForm) {
    e.preventDefault();
    if(e.target.id === 'delBut') {
        let event = e.target.dataset.numb
        letDELETE(baseURL, event);
    }
    await getUsers(baseURL);
    renderUser()
}

container.addEventListener('click', deleteUser)
//________________________________________//

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
    let html = ''
    for (let index = 0; index < myUsers.length; index++) {
        let elem =  myUsers[index];
        let segment = 
            `<div class="user" data-numb="${elem.id}">
            <h2>${elem.name}</h4>
            <h4>${elem.age}</h4>
            <h4>${elem.status}</h4>
            <button id="delBut" data-numb="${elem.id}">Удалить</button>
            <button id="putBut" data-numb="${elem.id}">Исправить</button>            
            </div>`;
        html = html + segment
        container.innerHTML = html;
    }
}
renderUser()
getUsers(baseURL)







