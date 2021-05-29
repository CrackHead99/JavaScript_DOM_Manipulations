// Selecting single elements

console.log(document.getElementById('task-title'));

// How to get data from element
// console.log(taskTitle.id);

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');


// How to change the style

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

console.log(document.querySelector('.container'))
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('#task'));
console.log(document.querySelector('.add'));
console.log(document.querySelector('h5'));
console.log(document.querySelector('#clear'));

document.querySelector('.container').style.background = '#f5f4e4';

document.querySelector('.card-title').style.fontFamily = "'Mountains of Christmas', cursive";
document.querySelector('.card-title').style.background = 'linear-gradient(to top, #d41e5d 0%, #e6acc0 100%)';

document.querySelector('.add').style.fontFamily = "'Playfair Display', serif";
document.querySelector('.add').style.color = 'light grey';

document.querySelector('#task').style.fontFamily = "'Playfair Display', serif";
document.querySelector('#task').style.color = '#6c3ff2';

document.querySelector('.btn').style.fontFamily = "'Mountains of Christmas', cursive";
document.querySelector('.btn').style.background = 'linear-gradient(to top, #5e1e78 0%, #d59aed 100%)';

document.querySelector('ul').style.fontFamily = "'Playfair Display', serif";
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';


document.querySelector('li:last-child').style.color='red';
document.querySelector('li:last-child').style.background='#fcf2e3';
document.querySelector('li:last-child').textContent='Work on articles';

document.querySelector('li:nth-child(3)').style.color='red';
document.querySelector('li:nth-child(3)').style.background='#fcf2e3';
document.querySelector('li:nth-child(3)').textContent='Check on Wix Site'

document.querySelector('li:nth-child(4').textContent = 'Commit changes in GitHub';
document.querySelector('li:nth-child(4').style.color = '#f26d07';
document.querySelector('li:nth-child(4').style.background = '#fcf2e3';


document.querySelector('li:nth-child(odd)').style.color = 'red';
document.querySelector('li:nth-child(odd)').style.background = '#fcf2e3';
document.querySelector('li:nth-child(odd)').textContent = 'Learn to code';

document.querySelector('li:nth-child(even').style.color = '#f26d07';
document.querySelector('li:nth-child(even').style.background = '#fcf2e3';
document.querySelector('li:nth-child(even').textContent = 'Practise color picker'

document.querySelector('#clear').style.background = 'linear-gradient(to top, #5e1e78 0%, #d59aed 100%)';
document.querySelector('#clear').style.fontFamily = "'Mountains of Christmas', cursive";