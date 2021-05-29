//Event Bubbling

document.querySelector('.card-title').addEventListener('click',function(){
    console.log('Card title');
});

document.querySelector('.card-content').addEventListener('click',function(){
    console.log('Card content');
});

document.querySelector('.card').addEventListener('click',function(){
    console.log('Card');
});


// Event delegation 
document.body.addEventListener('click',function(){
    console.log('clicked');
});

document.querySelector('.card-title').addEventListener('click',function(){
        console.log('Card title');
    });