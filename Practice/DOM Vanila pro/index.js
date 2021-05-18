window.onload = function() {
   const wrapper = document.getElementById('wrapper')
   const header = document.getElementsByClassName('header')
   const article = document.getElementById('article')
   const aside = document.getElementById('aside')
   const button = document.getElementById('addUl')

   const numberArr = [1,2,3,4,5,6,7,8,9]

   function render (arr, targetDiv) {
      const data = arr.reduce((acc, item) => {
         return (
            acc + `
            <ul>
               <li>${item}</li>
            </ul>
         `)
      }, '')
      targetDiv.innerHTML = data
      console.log(`data`, data)
   }   

   button.addEventListener('click', handleClick)

   function handleClick() {
      render(numberArr, aside)
      for (let index = 0; index < header.length; index++) { // Чтобы собрать коллекцию нужно пройтись циклом
         const element = header[index]; // 
         const elemSuc = header[0];
         const elemErr = header[1]
         console.log(`element`, element)
         element.style.backgroundColor = 'tomato'; //  Так мы выодим стиль ВСЕГО элемента БЭМ
         elemSuc.style.color = 'white'; // Так - уже конкретного элемента В КОЛЛЕКЦИИ(1)
         elemErr.style.color = 'green'; // Так - уже конкретного элемента В КОЛЛЕКЦИИ(2) 
      }
   }
}