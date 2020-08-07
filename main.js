import { items } from './items.js';

const container = document.querySelector('#container');

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
const myItemsArray = items.map(redefineItem)
 console.log(myItemsArray);



const cardHTML = myItemsArray.map(item => {
    return `
     <div class="scene">
      <div class="card">
      <div class="card__face card__face--front"><img id="img" src ='/atlaImg/${item.id}.png'/><div id="name">${item.name}</div></div>
      <div class="card__face card__face--back"><div id="info"><p>Value:${item.value}, Origin:${item.place_of_origin}, Time Period:${item.time_period}</p></div></div>
    </div>
    `
}).join(' ,');

console.log(cardHTML);


container.innerHTML=cardHTML;

var cards = document.querySelectorAll('.card');


cards.forEach (card => {
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
})

}

getItems();

