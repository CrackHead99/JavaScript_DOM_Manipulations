// create an element
const li = document.createElement('li');
const list = document.querySelector('ul.collection');

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// create new link element
const link = document.createElement('a');

// add classes to the new link
link.className = 'delete-item secondary-content';

// add html icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// append the link to the li 
li.appendChild(link);

li.textContent = 'List item';
document.querySelector('ul.collection').appendChild(link);


console.log(li);
console.log(list);
console.log(link);
