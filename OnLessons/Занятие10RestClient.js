class RestClient {
   constructor(baseUrl) {
      this.baseUrl = baseUrl;
   }

   request(url, config) {
      return fetch(url, config).then(response) => {
         const { status } = response;

         if (status >= 200 && status <300) {
            return response
               .json()
               .then((data) => data)
               .catch(error) => {
                  throw error;
               });
            
         });
      };

      return data
   }

   get(url = '', params = {}) {
      return this.request(`${this.baseUrl}/url` , this.getConfig(`get`, params));
   }
   post() {}
   delete() {}
   put() {}
}