l = (result) => {
   console.log(result);
}

let arrRandomAnimal = [ {name: 'dog', link: 'https://random.dog/woof.json'},
                        {name: 'cat', link: 'https://aws.random.cat/meow'},
                     ]

function genAnim(params) {
   for (let index = 0; index < arrRandomAnimal.length; index++) {
      if (arrRandomAnimal[index].name == params) {
         return arrRandomAnimal[index].link  
      }
   }
}

function putNewObj() {
   arrRandomAnimal.push({name: "fox", link: "https://randomfox.ca/?i=72"});
   return arrRandomAnimal;
}
putNewObj()

async function generateDog(params) {
   headers = {
      'Access-Control-Allow-Method' : 'GET, PUT, POST, DELETE'
   }
   let animals = genAnim(params)
   let animal = await fetch(animals, {
      mode: 'cors'
      }
      )
      let data = await animal.json()
      let result = await data.url || await data.file || await data.image;
      if (result.includes('.mp4') == true) {
         location.reload()
      } else {
         return document.querySelector('img').setAttribute('src', result)
      }
   }      
generateDog('cat');










