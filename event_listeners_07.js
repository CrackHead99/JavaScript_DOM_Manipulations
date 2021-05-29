// document.querySelector('.clear-tasks').addEventListener('click',onClick);

const clearTask = document.querySelector('.clear-tasks');
const addTask = document.querySelector('.input-field');
const faRemove = document.querySelector('fa-remove');
const deleteItem = document.querySelector('delete-item');
const inputField = document.querySelector('inut-field');

faRemove.addEventListener('click', onClick);
    if(faRemove.classList.contains('delete-item')) {
        faRemove.classList.remove('active');
    } 

addTask.addEventListener('click', onClick);
    if(addTask.classList.contains('input-field')){
        addTask.classList.add('text')
    }

clearTask.addEventListener('click',onClick);
    if(clearTask.classList.contains('Clicked')) {
        addTask.classList.remove('collection-item')
    }
function onClick(e){
    console.log('Clicked');
     e.preventDefault();
    let val ;
    val = e;

// // Event target element
     val = e.target;
     val = e.target.id;
     val = e.target.className;
     val = e.target.classList;

// //  Event type
    val = e.type;

// // Timestamp
 val = e.timeStamp;

// //  Coords event relative to the window
val = e.clientY;
val = e.clientX;

// // Coords event relative to the element
val = e.offsetY;
val = e.offsetX;

console.log(val);
}



