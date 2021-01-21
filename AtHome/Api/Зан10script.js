const send = document.getElementById('send')

const createReview = (e) => {
   e.preventDefault();
   const [form] = document.forms;
   const data = [...form].reduce((obj, input) => {
      obj[input.name] = input.value
      return obj;
   }, {});
   client.reviews.createReview(data);
};

send.addEventListener('click', createReview);

const handleClick = (e, mynums) => {
   e.preventDefault()
   const elem = document.querySelectorAll('[data-nums]');
   elem.forEach(function (item, i, arr) {
      elem[i];
   mynums = elem[i].getAttribute('data-nums')
      console.log(mynums);
   });
      if(e.target.id === 'delete') {
      // console.log(e.target.dataset.num)
   }
/* Фильтер но вый рендер */
}

const render = ({ reviews }) => {
   const container = document.getElementById('container');
   const div = document.createDocumentFragment();

   reviews.forEach((item,i) => {
      const itemContainer = document.createElement('div');
      itemContainer.setAttribute("data-nums", i + 1);
      itemContainer.id = item.id;
      const itemName = document.createElement('p');
      itemName.innerHTML = item.name;
      itemContainer.addEventListener('click', handleClick);

      const itemReview = document.createElement('p');
      itemReview.innerHTML =  item.review;

      const closeElement = document.createElement('button');
      closeElement.id = 'delete';
      closeElement.setAttribute("data-num", i+1);
      closeElement.innerHTML = 'x';

      itemContainer.appendChild(itemName);
      itemContainer.appendChild(itemReview);
      itemContainer.appendChild(closeElement);
      div.appendChild(itemContainer);
   });

   container.appendChild(div);
};

const client = new Client();

const runSpinner = state => {
   if(state) {
      document.body.style.background = 'tomato'
   } else {
      document.body.style.background = 'rgb(87,87,87) linear-gradient(90deg, rgba(87,87,87,1) 0%, rgba(93,66,18,1) 49%, rgba(105,104,104,1) 100%)'
   }
};

function receiveData() {
   runSpinner(true)
   return client.reviews.getReviewsData();
}

receiveData()
   .then((data) => {
      runSpinner(false);
      render(data);
   })
   .catch(e => {
      runSpinner(false);
      console.log(e);
   });   


// const url = `https://quiet-spire-94328.herokuapp.com/reviews`;

// const result = fetch(url);

// result
//    .then(data => data.json())
//    .then(data => render(data));

