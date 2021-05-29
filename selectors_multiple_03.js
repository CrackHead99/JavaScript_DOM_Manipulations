// ----- Selectors by Elements Id -----

console.log(document.getElementById('main'));
console.log(document.getElementById('task'));
console.log(document.getElementById('task-title'));

console.log(document.getElementById('main').id);
console.log(document.getElementById('main').className);

console.log(document.getElementById('task').id);
console.log(document.getElementById('task').className);

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const card = document.getElementById('main');
const taskTitle = document.getElementById('task-title');


// ---- styling contaainer card ----

card.style.background = 'rgba(234, 182, 118, 0.2)';
card.style.fontFamily = "'Playfair Display', serif";

// ------ styling contaier box ---------

taskTitle.style.color = 'black';
taskTitle.style.background = 'linear-gradient(to top, #d41e5d 0%, #e6acc0 100%)';
taskTitle.style.fontFamily = "'Mountains of Christmas', cursive";
taskTitle.style.padding = '4px';
taskTitle.innerHTML = '<span style="color:#140101">TO-DO Lists</span>';


// //------- Select by elements class/id --------- 

console.log(document.querySelector('.card'));
console.log(document.querySelector('#task'));
console.log(document.querySelector('.add'));
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));

// // ------Add Task -----
document.querySelector('#task').style.fontFamily = "'Playfair Display', serif";
document.querySelector('#task').style.color = '#344B7A';
document.querySelector('#task').style.fontSize = '1.2rem';


// // --------Add Task Button ------
document.querySelector('.btn').style.fontFamily = "'Mountains of Christmas', cursive";
document.querySelector('.btn').style.color = '##fff';
document.querySelector('.btn').style.background = 'linear-gradient(to top, #5e1e78 0%, #d59aed 100%)';
document.querySelector('.btn').style.fontSize = '1rem';

// // -----------Titles -----------------
// // Form - main title
document.querySelector('#task-title').style.fontFamily = "'Mountains of Christmas', cursive";

// // Second title
document.querySelector('.card-title').style.fontFamily = "'Mountains of Christmas', cursive";
document.querySelector('.card-title').style.background = 'linear-gradient(to top, #d41e5d 0%, #e6acc0 100%)';
taskTitle.style.padding = '10px';


// //----------Clear Task Button------------
document.querySelector('#clear').style.background = 'linear-gradient(to top, #5e1e78 0%, #d59aed 100%)';
document.querySelector('#clear').style.fontFamily = "'Mountains of Christmas', cursive";


// ----------------Collection items -----------------\\
// How to select multiple elements
// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].textContent = 'Walk the dog';
// items[1].textContent = 'Pack lunch';
// items[2].textContent = 'Apointment clinic at 11 am';
// items[3].textContent = 'Fetch mom';
// items[4].textContent = 'Grocery shopping';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems); 

// document.getElementsByTagName
let lis =document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color='#75259F';
lis[1].style.color='#2B40C4';
lis[2].style.color='#75259F';
lis[3].style.color='#2B40C4';
lis[4].style.color='#75259F';


// How to convert HTML collection to an Array
lis = Array.from(lis);
console.log(lis);
lis.reverse();

lis.forEach(function(li,index){
    console.log(li.className);
    li.textContent = `${index}:Hello world!`;

});

lis.reverse();

lis.forEach(function(li,index){
    console.log(li.className);
    li.textContent = `${index}:Hello world!`;

});

//document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);

items.forEach(function(item,index){
      item.textContent = `${index}: Hello world!`;
})

//Creating variables to change all the odd & even ones

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(li){
 li.style.background = '#ccc';
});


for (let i=0 ; i < liEven.length ; i++){
    liEven[i].style.background = '#f4f4f4';
}