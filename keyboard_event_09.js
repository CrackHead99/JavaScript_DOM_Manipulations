const form = document.querySelector('form');
const taskInput = document.getElementById('#task');
const heading = document.querySelector('h5');

// Clear input
// taskInput.value = ' ';

form.addEventListener('submit',runEvent);
 //Key events
 //keydown
//  taskInput.addEventListener('keydown',runEvent);



function runEvent(e){
    console.log(`Event Type : ${e.type}`);
    console.log(e.target.value);
    // Get input value
    // console.log(taskInput.value);
    e.preventDefault();
}