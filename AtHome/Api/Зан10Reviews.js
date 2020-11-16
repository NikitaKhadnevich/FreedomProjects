
class ReviewsClient {
   constructor(client) {
      this.client = client;
   }
   getReviewsData = () => this.client.get();
   createReview = (data) => {this.client.post('', '', data)};
   handleClick = (url) => { this.client.delete('','', data)};
   /* Кусок урла на удаление и не пустую сроку!! */
}

