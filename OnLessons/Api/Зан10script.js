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

const handleClick = e => {
   e.preventDefault()
  if(e.target.id === 'delete') {
         /* DELETE */
  }
}

const render = ({ reviews }) => {
   const container = document.getElementById('container');
   const div = document.createDocumentFragment();

   reviews.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.id = item.id;
      const itemName = document.createElement('p');
      itemName.innerHTML = item.name;
      itemContainer.addEventListener('click', handleClick);

      const itemReview = document.createElement('p');
      itemReview.innerHTML =  item.review;

      const closeElement = document.createElement('button');
      closeElement.id = 'delete';
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
      document.body.style.background = 'white'
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

