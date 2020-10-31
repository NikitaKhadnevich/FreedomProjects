const API = createInstance() { 

const getReviews = (url) => {
 API.get(url)
 .then((data) => data)
 .catch((error) => {
    throw error;
 });

 const createReviews = (url = ' ', review) => {
   API.post(url, review).catch((error) => {
      throw error;
      const [form] = document.forms;
      const review = [...form].reduce((obj, input) => {
         obj[input.name] = input.value
      })
   });

const deleteReviews = (url = ' ', data) => {
   API.delete(url, { data })
      .catch((error) => {
         throw error;})
      }     
   }
}

