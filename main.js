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
document.getElementById("items").style.color = "black";
document.getElementById("items").style.backgroundColor = "#dcebd5";


items.map(item => {console.log(item.title)
    let li = createNode('li'),
    span = createNode('span'),
    img = createNode('img');

    img.src = item.picture;
    span.innerHTML = `Listing- ${item.title} : ${item.value}, Time Period: ${item.time_period}, Nation Origin: ${item.nation_origin}`;

    append(li,img);
    append(li,span);
    append(ul,li);
})
