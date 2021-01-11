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

function createNewUser(e, myForm) {
    myForm = {}
    e.preventDefault();
    createValueAccum(myForm)
    letPOST(baseURL, myForm)
}

function letPOST(URL, obj) {
    return axios.post(URL, obj)
    .then(res => {
    console.log(res); // Результат ответа от сервера
    });
}

Исправить.addEventListener('click', correctUser);

function correctUser(e, myForm) {
    myForm = {}
    e.preventDefault();
    createValueAccum(myForm)
    letPUT(baseURL, myForm, 1)
}

function letPUT(URL, obj, id) {
    return axios.put(URL + `/${id}` , obj)
    .then(res => {
    console.log(res); // Результат ответа от сервера
    });
}





