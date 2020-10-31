const BASE_URL = `https://quiet-spire-94328.herokuapp.com/reviews`;

class Client {
   constructor() {
      this.restClient = new RestClient(BASE_URL);
      this.reviews = new ReviewsClient(this.restClient);
   }
};
// const result = fetch(url);
// const render = data => {

// };

// result
//    .then(data => data.json())
//    .then(data => render(data));

