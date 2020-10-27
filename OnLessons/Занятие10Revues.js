
class ReviewsClient {
   constructor(client) {
      this.client = client;
   }
   getReviewsData = () => this.client.get();
}