//import used here
import { items } from './items.js';

//const used here
const container = document.querySelector('#container');

//arrow function
const getItems = () => {

const redefineItem = (item) => {
    return {
        name: item.title,
        value: item.value,
        place_of_origin: item.nation_origin,
        time_period: item.time_period,
        id: item.idx

     }
   }

   //created an array
const myItemsArray = items.map(redefineItem)
 console.log(myItemsArray);


//iteration through an array
const cardHTML = myItemsArray.map(item => {
    //strings and template literals
    return `
     <div class="scene">
      <div class="card">
      <div class="card__face card__face--front"><img id="img" src ='/atlaImg/${item.id}.png'/><div id="name">${item.name}</div></div>
      <div class="card__face card__face--back"><div id="info"><p>Value:${item.value}, Origin:${item.place_of_origin}, Time Period:${item.time_period}</p></div></div>
    </div>
    <a href="bought.html">
    <button id="buy">Buy Now!</button>
    </a>
    `
}).join(' ,');



console.log(cardHTML);


container.innerHTML=cardHTML;

//use of variable
var cards = document.querySelectorAll('.card');


cards.forEach (card => {
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
})

}

getItems();

    
function addItemCard(event) {
     const formData = new formData(itemForm);
    
     //use of let
     //custom javascript object
     let itemObj = new Object();

     for(let pair of formData.entries()) {
         console.log(pair)
    //key value pairs
         itemObj[pair[0]] = pair[1]

         event.preventDefault();

         const parentDiv = document.createElement('div');
         parentDiv.className('scene');
        
         const innerDiv = document.createElement('div');
         innerDiv.className('card');
        
         const frontDiv = document.createElement('div');
        frontDiv.className('card_face card_face--front');
        
         const backDiv = document.createElement('div');
        backDiv.className('card_face card_face--back');
        
          
         innerDiv.appendChild(frontDiv, backDiv);
         parentDiv.appendChild(innerDiv);
         
         container.appendChild() = parentDiv;

         
     }


      
     
     
 }

 const itemForm = document.getElementById('itemForm');
 itemForm.addEventListener('submit', addItemCard);
