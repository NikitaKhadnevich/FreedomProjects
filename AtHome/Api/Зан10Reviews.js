
class ReviewsClient {
   constructor(client) {
      this.client = client;
   }
   getReviewsData = () => this.client.get();
   createReview = (data) => {this.client.post('', '', data)};
}

