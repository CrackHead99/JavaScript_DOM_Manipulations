// Selecting single elements

// document.getElementById()

console.log(document.getElementById('main'));
console.log(document.getElementById('task-title'));

// How to get data from element

console.log(document.getElementById('main').id);
console.log(document.getElementById('main').className);

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const card = document.getElementById('main');
const taskTitle = document.getElementById('task-title');

// How to change the style

card.style.background = 'rgba(234, 182, 118, 0.2)';
card.style.fontFamily = "'Playfair Display', serif";

// items.style.background = 'rgba(234, 182, 118, 0.2)';

taskTitle.style.color = 'black';
taskTitle.style.background = 'linear-gradient(to top, #d41e5d 0%, #e6acc0 100%)';
taskTitle.style.fontFamily = "'Mountains of Christmas', cursive";
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';


// How to change the content
taskTitle.textContent ='Task List';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span style="color:#140101">TO-DO Lists</span>';

// document.querySelector()

console.log(document.querySelector('.card'));
console.log(document.querySelector('#task'));
console.log(document.querySelector('.add'));
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

document.querySelector('.card').style.background = 'rgba(234, 182, 118, 0.2)';

document.querySelector('#task').style.fontFamily = "'Playfair Display', serif";
document.querySelector('#task').style.color = '#344B7A';
document.querySelector('#task').style.fontSize = '1.2rem';

document.querySelector('#task-title').style.fontFamily = "'Mountains of Christmas', cursive";

document.querySelector('.card-title').style.fontFamily = "'Mountains of Christmas', cursive";
document.querySelector('.card-title').style.background = 'linear-gradient(to top, #d41e5d 0%, #e6acc0 100%)';

document.querySelector('li:last-child').textContent='5) Work on articles';
document.querySelector('li:nth-child(3)').textContent='3) Check on Wix Site'
document.querySelector('li:nth-child(4').textContent = '4) Commit changes in GitHub';
document.querySelector('li:nth-child(odd)').textContent = '1) Learn to code';
document.querySelector('li:nth-child(even').textContent = '2) Practise color picker'

document.querySelector('#clear').style.background = 'linear-gradient(to top, #5e1e78 0%, #d59aed 100%)';
document.querySelector('#clear').style.fontFamily = "'Mountains of Christmas', cursive";

// Selecting multiple elements

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = '#75259F';
items[1].style.color = '#2B40C4';
items[2].style.color = '#75259F';
items[3].style.color = '#2B40C4';
items[4].style.color = '#75259F';

