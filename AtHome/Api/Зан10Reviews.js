
class ReviewsClient {
   constructor(client) {
      this.client = client;
   }
   getReviewsData = () => this.client.get();
   createReview = (data) => {this.client.post('', '', data)};
   handleClick = (data) => { this.client.delete('','f77eb174-0951-4b67-8a70-bb9a65f5a2fb', data)};
}

