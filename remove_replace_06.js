// --------------Elements---------------\\
console.log(main.id);
console.log(clear.id);
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const card = document.getElementById('main');
const taskTitle = document.getElementById('task-title');
const clearButton = document.getElementById('clear');

// ------------Style -----------------\\

card.style.color = 'black';
card.style.backgroundImage = 
'linear-gradient(to left, #730782 -20%, #5FC7DB 75%, #5FDBB2 100%)'
card.style.fontFamily = "'Mountains of Christmas', cursive";
card.style.padding = '5px';

taskTitle.style.color = 'black';
taskTitle.style.background = 'linear-gradient(to top, #D4888B 0%, #F9EDEF 100%)';
taskTitle.style.fontFamily = "'Mountains of Christmas', cursive";
taskTitle.style.maxWidth = '2px 8px';
taskTitle.style.padding = '10px';

clearButton.style.color = '#0A0A0A'
clearButton.style.background ='linear-gradient(to top, #F1120B 0%, #F1E0E0 100%)';
clearButton.style.fontSize = '1rem';
clearButton.style.padding = '5px'

// ---------Change Content -------\\
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span style="color:rblack">My To-Do list</span>';


//----------Selector Styling--------------\\

console.log(document.querySelector('.add'));
document.querySelector('#task').style.color = 'black'
document.querySelector('#task').style.fontFamily = "'Playfair Display', serif";

console.log(document.querySelector('.card-title'));
document.querySelector('.card-title').style.background = 
'linear-gradient(to top, #d41e5d 0%, #e6acc0 100%)';
document.querySelector('card-title')

console.log(document.querySelector('.btn'));
document.querySelector('.btn').style.background = 
'linear-gradient(to top, #15C210 0%, #A5E7C2 100%)';
document.querySelector('.btn').style.color = '#394839';

console.log(document.querySelector('h5'));
document.querySelector('h5').style.fontFamily = "'Mountains of Christmas', cursive";

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = '#75259F';
items[1].style.color = '#2B40C4';
items[2].style.color = '#75259F';
items[3].style.color = '#2B40C4';
items[4].style.color = '#75259F';

//Replace element

//Create element
const newHeading = document.createElement('h4');

// Add id
newHeading.id = 'task-title';

// New text 
newHeading.appendChild(document.createTextNode('My To-Do List'));

//Old heading 
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//replace 
cardAction.replaceChild(newHeading,oldHeading);

// Remove Element 

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Attributes & classes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val ; 

// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');


// Attributes
val = link.getAttribute('href');
link.setAttribute('href','http://google.com');
link.setAttribute('title','Google');
val = link.hasAttribute('title');
link.removeAttribute('title');




console.log(val);
// console.log(firstLi);
console.log(link);
// console.log(newHeading);
// console.log(oldHeading);
// console.log(lis);
// console.log(list);