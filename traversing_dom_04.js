let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val= list;
val = listItem;

// // Get Child Nodes
val = list.childNodes;
// Print NodeList(11)[text, li.collection-item, text,]
val = list.childNodes[0];
// Print #text
val = list.childNodes[0].nodeName;
// Print #text
val = list.childNodes[0].nodeType; 
// Print 3

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype 


// Get children element nodes

val = list.children;
// print HTMLCollection(5) [li.collection-item.....]
val = list.children[1];
// print <li class="collection-item">
list.children[1].textContent = 'Hello world!';
//print <li class="collection-item"><Hello world!></li>

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
{/* <i class="fa fa-remove"></i>
</a> */}


// First child
val = list.firstChild;
val = list.firstElementChild;
{    /* <li class="collection-item">
    List Item
     <a href="#" class="delete-item secondary-content">
     <i class="fa fa-remove"></i></a>
</li>*/ }


// Last child
{  val=list.lastChild;
    val=list.lastElementChild;
    /*<li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
</li> */ }


// Count child elements
val = list.childElementCount;
/* Print 5 */

// Get parent node
val = listItem.parentNode;
// <ul class="collection">
{/* <li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li> 
<li class="collection-item">Hello world!</li> 
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content" id="test-link">
  <i class="fa fa-remove"></i>
</a>
</li>
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
</ul> */}

val = listItem.parentElement;
// <ul class="collection">
{/* <li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li> 
<li class="collection-item">Hello world!</li> 
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content" id="test-link">
  <i class="fa fa-remove"></i>
</a>
</li>
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
</ul> */}

val = listItem.parentElement.parentElement;
// <div class="card-action">
{/* <h5 id="task-title">Tasks</h5>
<ul class="collection">
  <li class="collection-item">
    List Item
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  </li> 
  <li class="collection-item">Hello world!</li> 
  <li class="collection-item">
    List Item
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  </li>
  <li class="collection-item">
    List Item
    <a href="#" class="delete-item secondary-content" id="test-link">
      <i class="fa fa-remove"></i>
    </a>
  </li>
  <li class="collection-item">
    List Item
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  </li>
</ul>
<a id="clear" class="clear-tasks btn" href="">Clear Tasks</a>
</div> */}

// Get next sibiling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
// Print 
{/* <li class="collection-item">Hello world!</li> */}


// Get previous sibiling

val = listItem.previousSibling;
// Print null : because we are dealing with the first list item(queryselector)
val =listItem.previousElementSibling;

console.log(val);