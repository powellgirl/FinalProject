import { items } from './items.js';

console.log(items);

function append (parent, el) {
    return parent.appendChild(el);
}

function createNode(element) {
    return document.createElement(element);
}

let item;

const ul = document.getElementById('items')

items.map(item => {console.log(item.title)
    let li = createNode('li'),
    img = createNode('img')
    //span = createNode('span');

    img.src = item.picture;
    //span.innerHTML = `Listing: ${item.title} , ${item.value}`;

    append(li,img);
    //append(li,span);
    append(ul,li);

    document.getElementById("items").style.color = "black";
    document.getElementById("items").style.backgroundColor = "white";

})

