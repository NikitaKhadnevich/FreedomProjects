
class RestClient {
   constructor(baseUrl) {
      this.baseUrl = baseUrl;
   }

   getConfig(method, data) {
      const config = {
         method: method.toUpperCase(),
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };

      if (data) {
         config.body = JSON.stringify(data);
      }

      return config;
   }   
                        
   request(endpoint, config) {
      return fetch(endpoint, config)
      .then((response) => {
         const { status } = response;

         if (status >= 200 && status < 300) {
            return response
               .json()
               .then((data) => data)
               .catch((error) => {
                  throw error;
               });
            }
         });            
      };

   get(endpoint = '', params = '') {
      return this.request(
         `${this.baseUrl}${endpoint}?${params}`,
         this.getConfig(`get`));
   }

   post(endpoint = '', params = '', data) {
      return this.request(
         `${this.baseUrl}${endpoint}?${params}`,
         this.getConfig(`post`, data)
         );
   }

   delete = (endpoint = '', params = '', data) => {
      return this.request(
         `${this.baseUrl}${endpoint}?${params}`,
         this.getConfig(`delete`, data)
      )
   }  


   

   // delete() {}
   // put() {}
};