const inputNode = document.getElementById('input');
const essenceNode = document.getElementById('essence');
const quantityNode = document.getElementById('quantity');
const qualificationNode = document.getElementById('qualification');
const relativeNode = document.getElementById('relative');
const whereNode = document.getElementById('where');
const whenNode = document.getElementById('when');
const postureNode = document.getElementById('posture');
const havingNode = document.getElementById('having');
const doingNode = document.getElementById('doing');
const affectionNode = document.getElementById('affection');
let categories = [];

const categoriesJSON = window.localStorage.getItem('categories');
console.log(categoriesJSON);


inputNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const category = {
        essence: essenceNode.value,
        quantity: quantityNode.value,
        qualification: qualificationNode.value,
        relative: relativeNode.value,
        where: whenNode.value,
        when: whenNode.value,
        posture: postureNode.value, 
        doing: doingNode.value,
        affection: affectionNode.value,
    
    
    };
    
    categories.push(category);
    
    const categoriesJSON = JSON.stringify(categories);
    window.localStorage.setItem('categories', categoriesJSON);
   
})

console.log('hello');



