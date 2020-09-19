// let x = document.body.firstElementChild
let z = "2px solid red"
// x.firstElementChild.style.border = z;
// x.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.border = z;	
// x.lastElementChild.style.border = z;

let quars = document.getElementsByClassName( "quar" ); // находим элементы с классом block
	 for( let i = 0; i < quars.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
	    quars[4].style.border = z
 		quars[0].style.border = z
 		quars[8].style.border = z
	  }		
